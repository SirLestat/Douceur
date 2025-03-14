// En Carousel.tsx
import { LiaCartPlusSolid } from "react-icons/lia";
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
              <LiaCartPlusSolid
                onClick={() => addToCart(product)}
                aria-label="Agregar producto"
                className=" btn absolute bg-[#ffffff] border-white hover:border-[#2D6A4F] hover:bg-[#2D6A4F] -top-[1px] -right-[1px]  rounded-none rounded-bl-3xl  rounded-tr-3xl w-[60px] text-black hover:text-white"
              />
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
