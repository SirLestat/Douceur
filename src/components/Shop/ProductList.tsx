// src/components/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../Products/Products";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="px-4 py-6">
      {/* Header de la lista de productos */}
      

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
