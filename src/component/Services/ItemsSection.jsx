import React from "react";
import ItemCard from "./ItemCard";

const ItemsSection = ({selectedItem}) => {
  
  return (
    < div className="w-full sm:w-2/3 bg-gray-5f00 sm:my-8 p-3 rounded-lg">
    <div className="hidden sm:block text-center text-3xl py-4 my-2 font-medium text-[var(--primary-color)] bg-gray-500 rounded-2xl bg-opacity-30">{selectedItem.toUpperCase()}</div>
      <div className="flex flex-wrap items-center justify-center">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  );
};

export default ItemsSection;
