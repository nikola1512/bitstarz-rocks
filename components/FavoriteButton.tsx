"use client";
import { Product } from "@/types";

type FavoriteButtonProps = {
  product: Product;
  addFavorite: ({ id }: { id: string }) => Promise<Response>;
  removeFavorite: ({ id }: { id: string }) => Promise<Response>;
  favorites: Product["id"][];
  onSubmit: () => Promise<Product[]>;
};

const FavoriteButton = ({
  product,
  addFavorite,
  removeFavorite,
  favorites,
  onSubmit,
}: FavoriteButtonProps) => {
  const isFavorite = (favorites || []).some(
    (favorite) => favorite === product.id,
  );
  return (
    <button
      className="flex justify-center w-full my-2 py-2 bg-blue-500 text-white rounded-md"
      onClick={
        isFavorite
          ? async () => {
              await removeFavorite({ id: product.id });
              onSubmit();
            }
          : async () => {
              await addFavorite({ id: product.id });
              onSubmit();
            }
      }
    >
      <span className="text-center">
        {isFavorite ? "Remove" : "Add"} Favorite
      </span>
    </button>
  );
};

export default FavoriteButton;
