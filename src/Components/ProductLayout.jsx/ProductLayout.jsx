import React from "react";
import useProductInfo from "../../Hooks/useProductInfo";
import ProductCard from "../ProductCard/ProductCard";

const ProductLayout = ({ category, Title }) => {
  const productsObject = useProductInfo(category);
  const products = productsObject?.products;
  console.log(products);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-outfit text-amber-950 uppercase">
        {Title ? `${Title}` : `All Products`}
      </p>
      <div
        className="grid gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5"
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;
