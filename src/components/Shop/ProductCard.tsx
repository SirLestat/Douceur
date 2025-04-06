import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  tooltip?: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-[#E6F2ED] rounded-3xl p-4 shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <Link to={`/producto/${product.id}`} className="block mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 lg:h-96 object-cover rounded-3xl mb-4"
          />
          <h2 className="text-lg font-semibold text-[#2D6A4F] min-h-16">
            {product.name}
          </h2>
          <p className="text-[#5D534B] text-sm mb-2">{product.category}</p>
          <p className="text-[#5D534B] font-semibold">${product.price} MXN</p>
          {product.tooltip && (
            <p className="text-sm text-[#5D534B] mt-2 italic">
              {product.tooltip}
            </p>
          )}
        </Link>
      </div>

      <div>
        <button
          onClick={() => addToCart(product)}
          className="btn2 mt-2 w-full py-2 bg-[#2D6A4F] text-white rounded-full hover:bg-[#245C45] transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
