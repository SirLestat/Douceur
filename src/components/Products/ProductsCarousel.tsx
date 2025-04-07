
import { useState, useMemo } from "react";
import { products } from "./Products";

import Carousel from "./Carousel";

const ProductCarousel = () => {
 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar productos por categoría 
  const filteredProducts = useMemo(
    () =>
      selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products,
    [selectedCategory]
  );

  //categorías para los botones
  const categories = [
    { label: "Todos", category: null },
    { label: "Skincare", category: "skincare" },
    { label: "Belleza", category: "belleza" },
  ];

  const buttons = categories.map((cat) => ({
    label: cat.label,
    onClick: () => setSelectedCategory(cat.category),
    category: cat.category,
  }));


  const aosOffset = useMemo(() => (window.innerWidth < 768 ? 300 : 400), []);

  return (
    <div
      className="w-full p-0"
      data-aos="fade-up"
      data-aos-offset={aosOffset}
    >
      <div className="container mx-auto px-6">
        
        <Carousel products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductCarousel;
