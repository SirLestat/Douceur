import { useMemo } from "react";
import { products } from "./Products";

import Carousel from "./Carousel";

const ProductCarousel = () => {
  const aosOffset = useMemo(() => (window.innerWidth < 768 ? 300 : 400), []);

  return (
    <div className="w-full p-0" data-aos="fade-up" data-aos-offset={aosOffset}>
      <div className="container mx-auto px-6">
        <Carousel products={products} />
      </div>
    </div>
  );
};

export default ProductCarousel;
