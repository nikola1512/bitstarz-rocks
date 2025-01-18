export type Product = {
  category: string;
  id: string;
  image: string;
  not_important_data1: string;
  not_important_data2: string;
  not_important_data3: string;
  title: string;
};

export type GetProductsArgs = {
  category: "top" | "exclusive" | "recent";
  offset: number;
  limit: number;
};

export type GetProductArgs = {
  id: string;
};

export type AddFavoriteArgs = {
  id: string;
};

export type RemoveFavoriteArgs = {
  id: string;
};

export type GetCommentsArgs = {
  id: string;
};

export type CommentType = string[];
