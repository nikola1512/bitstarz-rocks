"use client";
import { Product } from "@/types";

type FavoriteButtonProps = {
  product: Product;
  addFavorite: ({ id }: { id: string }) => Promise<Response>;
  favorites: Product["id"][];
  onSubmit: () => Promise<Product[]>;
};

const FavoriteButton = ({
  product,
  addFavorite,
  favorites,
  onSubmit,
}: FavoriteButtonProps) => {
  return (
    <button
      className="flex justify-center w-full my-2 py-2 bg-blue-500 text-white rounded-md"
      onClick={async () => {
        const res = await addFavorite({ id: product.id });
        onSubmit();
      }}
    >
      <span className="text-center">
        {(favorites || []).some((favorite) => favorite === product.id)
          ? "Remove"
          : "Add"}{" "}
        Favorite
      </span>
    </button>
  );
};

export default FavoriteButton;
