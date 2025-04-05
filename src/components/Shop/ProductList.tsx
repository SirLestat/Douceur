import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Product } from "../Products/Products";

import { div } from "framer-motion/client";

interface Pruduct {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
}

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
