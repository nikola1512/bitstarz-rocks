"use server";

// Get products
import {
  AddFavoriteArgs,
  GetCommentsArgs,
  GetProductArgs,
  GetProductsArgs,
  RemoveFavoriteArgs,
} from "@/types";

export const getProducts = async ({
  category,
  offset,
  limit,
}: GetProductsArgs) => {
  const data = await fetch(
    `${process.env.API_BASE_URL}/products/${category}?offset=${offset}&limit=${limit}`,
  );
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );

  return await data.json();
};

// Get product
export const getProduct = async ({ id }: GetProductArgs) => {
  const data = await fetch(`${process.env.API_BASE_URL}/product?id=${id}`);
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  return await data.json();
};

// Get favorites
export const getFavorites = async () => {
  const data = await fetch(`${process.env.API_BASE_URL}/favorites`, {
    headers: {
      "x-api-key": `secret-key-${process.env.SECRET_KEY}`,
    },
  });
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  return JSON.parse(JSON.stringify(await data.json()));
};

// Add favorite
export const addFavorite = async ({ id }: AddFavoriteArgs) => {
  const data = await fetch(`${process.env.API_BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `secret-key-${process.env.SECRET_KEY}`,
    },
    body: JSON.stringify({ id }),
  });
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  return JSON.parse(JSON.stringify(data));
};

// Remove favorite
export const removeFavorite = async ({ id }: RemoveFavoriteArgs) => {
  const data = await fetch(`${process.env.API_BASE_URL}/favorites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `secret-key-${process.env.SECRET_KEY}`,
    },
    body: JSON.stringify({ id }),
  });
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  return JSON.parse(JSON.stringify(data));
};

// Get comments
export const getComments = async ({ id }: GetCommentsArgs) => {
  const data = await fetch(`${process.env.API_BASE_URL}/comments?id=${id}`);
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  return await data.json();
};
