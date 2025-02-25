// En Carousel.tsx
import { Product } from "./Products"; // Ajusta la ruta

interface CarouselProps {
  products: Product[]; // Recibe los productos como prop
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  return (
    <div className="mt-4">
      <div className="carousel carousel-center bg-[rgba(139,157,131,0.2)] rounded-box max-w-md space-x-4 p-4">
        {products.map(
          (
            product // Mapea los productos filtrados
          ) => (
            <div key={product.id} className="carousel-item flex flex-col">
              <p className="text-lg text-black font-medium">{product.name}</p>
              <p className="text-sm text-neutral-500 pb-4">{product.price}</p>

              <div className="relative">
                <img
                  src={product.image}
                  className="rounded-box row-span-2 "
                  alt={product.name}
                />

                <button className="btn absolute  top-3 right-3  btn-circle ">
                  <img src="src\components\Products\assets\basket-icon4.png" alt="add to basket icon "  className="w-8 h-8" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
