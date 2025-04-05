import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
}

interface Props {
  product: Product;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-[#E6F2ED] rounded-xl p-4 shadow hover:shadow-lg transition">
     
      <Link to={`/producto/${product.id}`} className="block mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-[#5D534B]">${product.price} MXN</p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full py-2 bg-[#2D6A4F] text-white rounded-full hover:bg-[#245C45] transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
