import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import usecategoryinfo from "../../Hooks/usecategoryinfo";
import CategoryCard from "../CategoryCard/CategoryCard";

function Category({ onSelect, productTitle }) {
  const category = usecategoryinfo(); //now this gives us array of category objects

  const filtercategory = category.filter((ele, index) => {
    return index < 10; // here i can filter the category array only upto 10 items
  });

  if (!category.length) {
    return (
      <p className="text-center text-2xl text-gray-800 font-serif font-medium">
        Loading categories...
      </p>
    );
  }

  return (
    // <div className="my-4">
    //   <div className="flex justify-between">
    //     <p className="text-2xl font-outfit text-indigo-700 uppercase">
    //       Category
    //     </p>
    //     <Button
    //       color="neutral"
    //       loading={false}
    //       onClick={function () {
    //         onSelect(null);
    //         productTitle(null);
    //       }}
    //       variant="soft"
    //     >
    //       All Products
    //     </Button>
    //   </div>

    //   <div className="flex gap-2 justify-between mt-2">
    //     {filtercategory.map((cat, index) => {
    //       return (
    //         <CategoryCard
    //           key={index}
    //           categoryname={cat.name}
    //           onClick={() => {
    //             onSelect(cat.slug);
    //             productTitle(cat.name);
    //           }}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>

    <div className="my-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl font-outfit uppercase text-indigo-700">
          Category
        </p>

        <Button
          variant="soft"
          color="neutral"
          onClick={() => {
            onSelect(null);
            productTitle(null);
          }}
        >
          All Products
        </Button>
      </div>

      {/* category cards */}
      <div
        className="
          mt-4
          flex snap-x gap-3 overflow-x-auto          /* horizontal scroll on mobiles */
          sm:flex-wrap sm:gap-4 sm:overflow-visible  /* wrap nicely on ≥640 px */
        "
      >
        {filtercategory.map((cat, index) => (
          <CategoryCard
            key={index}
            categoryname={cat.name}
            onClick={() => {
              onSelect(cat.slug);
              productTitle(cat.name);
            }}
            /* optional fixed width for scroll snapping */
            className="snap-start sm:snap-none"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
