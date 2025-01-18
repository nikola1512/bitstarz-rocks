"use client";

import { GetProductsArgs, Product } from "@/types";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import { addFavorite, removeFavorite, getFavorites } from "@/app/actions";
import CarouselButton from "@/components/CarouselButton";

type HomepageSectionProps = {
  title: string;
  category: "top" | "exclusive" | "recent";
  fetchProducts: ({
    category,
    offset,
    limit,
  }: GetProductsArgs) => Promise<Product[]>;
};

const HomepageSection = ({
  title,
  category,
  fetchProducts,
}: HomepageSectionProps) => {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<Product["id"][]>([]);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts({ category, offset: 0, limit: 6 }).then((products) => {
      setProducts(products);
    });
    getFavorites().then((favorites) => {
      setFavorites(favorites);
    });
  }, []);

  return (
    <section className="border-b border-solid border-gray-150 mx-4 py-8">
      <h2 className="text-xl my-4">{title}</h2>
      <div className="flex items-center gap-4">
        <ul className="flex gap-2 px-4">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <h4 className="text-sm text-center">{product.title}</h4>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
              </Link>
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <FavoriteButton
                    product={product}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    favorites={favorites}
                    onSubmit={async () => {
                      const newFavorites = await getFavorites();
                      console.log("newFavorites", newFavorites);
                      setFavorites(newFavorites);
                      return newFavorites;
                    }}
                  />
                </Suspense>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <CarouselButton
            onClick={() => {
              const newOffset = offset + 6;
              setOffset(newOffset);
              setIsLoading(true);
              fetchProducts({
                category,
                offset: newOffset,
                limit: 6,
              }).then((newProducts) => {
                setIsLoading(false);
                setProducts(newProducts);
              });
            }}
            isDisabled={isLoading}
          >
            Next
          </CarouselButton>
          <CarouselButton
            onClick={() => {
              const newOffset = offset - 6;
              setOffset(newOffset);
              setIsLoading(true);
              fetchProducts({
                category,
                offset: newOffset,
                limit: 6,
              }).then((newProducts) => {
                setIsLoading(false);
                setProducts(newProducts);
              });
            }}
            isDisabled={offset === 0 || isLoading}
          >
            Previous
          </CarouselButton>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection;
