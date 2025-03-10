// Crea un nuevo componente ProductCarousel.tsx
import { useState } from "react";
import { products } from "./Products";
import HorizontalScroll from "./HorizontalScroll";
import Carousel from "./Carousel";
import TestimonialCarousel from "../testimonial/Testimonial";

const ProductCarousel = () => {
  // Estado para guardar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar productos basado en la categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Configurar los botones con sus categorías
  const categories = [
    { label: "Todos", category: null }, // Muestra todos los productos
    { label: "Skincare", category: "skincare" },
    { label: "Belleza", category: "belleza" },
  ];

  // Crear la configuración de los botones
  const buttons = categories.map((cat) => ({
    label: cat.label,
    onClick: () => setSelectedCategory(cat.category), // Al hacer clic, actualiza el estado
  }));

  return (
    <div
      className=" w-full p-0  "
      data-aos="fade-up"
      data-aos-offset={window.innerWidth < 768 ? 300 : 400}
    >
      <div className="container mx-auto px-6">
        <HorizontalScroll
          buttons={buttons}
          selectedCategory={selectedCategory}
        />

        <Carousel products={filteredProducts} />
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default ProductCarousel;
