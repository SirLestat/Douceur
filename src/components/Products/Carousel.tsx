// En Carousel.tsx
import { useCart } from "../../context/CartContext";
import { Product } from "./Products";

interface CarouselProps {
  products: Product[]; // Recibe los productos como prop
}
const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const { addToCart } = useCart();
  return (
    <div className="mt-4  md:px-0">
      <div className="carousel carousel-center rounded-box max-w-full space-x-4 ">
        {products.map((product) => (
          <div key={product.id} className="carousel-item flex flex-col ">
            <div className="relative object-fill ">
              <img
                src={product.image}
                className="rounded-3xl row-span-2  max-h-full max-w-72 object-contain "
                alt={product.name}
                loading="lazy"
              />

              <button
                onClick={() => addToCart(product)}
                className="btn absolute bg-[#000000]/40 border-black/20 hover:border-black hover:bg-[#000000] -top-[0px] -right-[0px]  rounded-none rounded-bl-3xl  rounded-tr-3xl w-[56px]"
              >
                <img
                  src="src\components\Products\assets\carrito2.png"
                  alt="icono agregar al carrito"
                  className="w-full h-auto"
                />
              </button>
            </div>
            <p className="text-lg text-black font-medium max-w-72">{product.name}</p>
            <p className="text-sm text-neutral-500 pb-4">
              $ {product.price} MXN
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
