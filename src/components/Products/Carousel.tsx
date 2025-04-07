// Carousel.tsx
import React from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useCart } from "../../context/CartContext";
import { Product } from "./Products";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="mt-4 md:px-0">
      <div>
        <p className="text-[#2D6A4F] font-bold text-2xl md:text-3xl pt-8 pb-4">
          Los más vendidos
        </p>

        <button className="btn2 bg-[#2D6A4F]">todos los productos </button>
      </div>

      <hr className="text-[#2D6A4F] p-2" />
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
    </div>
  );
};

export default Carousel;
