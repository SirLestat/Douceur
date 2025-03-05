// En Carousel.tsx
import { useCart } from "../../context/CartContext";
import { Product } from "./Products";

interface CarouselProps {
  products: Product[]; // Recibe los productos como prop
}
const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const { addToCart } = useCart();
  return (
    <div className="mt-4 px-6 md:px-0">
      <div className="carousel carousel-center  rounded-box max-w-full space-x-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-item flex flex-col"
            data-aos="flip-left"
            data-aos-duration="850"
            data-aos-offset={window.innerWidth < 768 ? 300 : 700}
          >
            <p className="text-lg text-black font-medium">{product.name}</p>
            <p className="text-sm text-neutral-500 pb-4">
              $ {product.price} MXN
            </p>

            <div className="relative">
              <img
                src={product.image}
                className="rounded-box row-span-2 "
                alt={product.name}
                loading="lazy"
              />

              <button
                onClick={() => addToCart(product) }
                className="btn absolute  top-3 right-3  btn-circle "
              >
                <img
                  src="src\components\Products\assets\basket-icon4.png"
                  alt="add to basket icon "
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
