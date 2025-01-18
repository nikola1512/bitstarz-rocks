import Link from "next/link";
import { Product } from "@/types";
import { addFavorite, getProduct } from "@/app/actions";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import Comments from "@/components/Comments";
import { Suspense } from "react";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  const product: Product = await getProduct({ id });

  if (!product) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <div>
        <Link className="p-4" href="/">
          {`<`} Home
        </Link>
      </div>
      <div className="px-4">
        <h1 className="text-2xl py-4">{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
        {/*<FavoriteButton*/}
        {/*  product={product}*/}
        {/*  addFavorite={({ id }) => addFavorite({ id })}*/}
        {/*/>*/}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Comments postId={id} />
      </Suspense>
    </div>
  );
};

export default ProductPage;
