import React from "react";
import { useState, useEffect } from "react";
import Category from "../Category/Category";
import ProductLayout from "../ProductLayout.jsx/ProductLayout";

function Shop() {
  const [activecategory, setactivecategory] = useState("");
  const [productTitle, setProductTitle] = useState("All Products");
  console.log(activecategory);
  return (
    <div className="my-4">
      <Category onSelect={setactivecategory} productTitle={setProductTitle} />
      <ProductLayout category={activecategory} Title={productTitle} />
    </div>
  );
}

export default Shop;
