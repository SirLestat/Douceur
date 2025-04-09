// Carousel.tsx
import React from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useCart } from "../../context/CartContext";
import { Product } from "./Products";
import { Link } from "react-router-dom";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="mt-4 md:px-0">
      <div className="md:flex-row flex flex-col   ">
        <p className="text-[#2D6A4F] font-bold text-2xl md:text-3xl ">
          Los más vendidos
        </p>
      </div>

      <hr className="text-[#2D6A4F] mt-4 mb-4" />
      <div className="carousel carousel-center rounded-box max-w-full space-x-4">
        {products.map((product) => (
          <div key={product.id} className="carousel-item flex flex-col">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-3xl max-h-full max-w-72 object-contain"
                loading="lazy"
              />

              <button
                onClick={() => addToCart(product)}
                aria-label={`Agregar ${product.name} al carrito`}
                className="btn absolute bg-[#ffffff] border border-white hover:border-[#2D6A4F] hover:bg-[#2D6A4F] -top-1 -right-1 rounded-bl-3xl rounded-tr-3xl w-15 h-15 flex items-center justify-center text-black hover:text-white transition-colors"
              >
                <LiaCartPlusSolid className="w-6 h-6" />
              </button>
            </div>
            <p className="text-lg text-[#5D534B] font-bold max-w-72">
              {product.name}
            </p>
            <p className="text-sm text-[#1B4332] pb-4">$ {product.price} MXN</p>
          </div>
        ))}
      </div>
      <div className="py-4">
        <Link to="/productos">
          <button className="btn2 text-white bg-[#2D6A4F] px-4 font-medium">
            Ver todos los productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
