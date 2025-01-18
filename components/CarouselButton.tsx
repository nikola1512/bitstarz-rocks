"use client";

import { ReactNode } from "react";

type CarouselButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
  children: ReactNode;
};

export const CarouselButton = ({
  onClick,
  isDisabled,
  children,
}: CarouselButtonProps) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
        isDisabled ? "bg-gray-300" : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default CarouselButton;
