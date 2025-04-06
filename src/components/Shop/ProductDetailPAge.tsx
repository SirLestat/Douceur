// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { products } from "../Products/Products";
const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Convertir id a número para compararlo con los IDs de producto
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center text-red-500">Producto no encontrado 😢</div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:pt-32 pt-12 flex">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#2D6A4F]">
            {product.name}
          </h2>
          <p className="text-[#5D534B] text-sm mb-4">
            Categoría: {product.category}
          </p>
          <p className="text-xl font-semibold text-[#2D6A4F] mb-6">
            ${product.price}
          </p>
          {product.tooltip && (
            <div className="text-sm text-[#5D534B] mb-6">{product.tooltip}</div>
          )}
          <button
            onClick={() => addToCart(product)}
            className="bg-[#2D6A4F] hover:bg-[#245C45] text-white rounded-full w-full sm:w-auto py-2 px-6"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
