// Crea un nuevo componente ProductCarousel.tsx
import { useState } from "react";
import { products } from "./Products";
import HorizontalScroll from "./HorizontalScroll";
import Carousel from "./Carousel";
import ScrollRevealWrapper from "../ScrollRevealWrapper";

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
    <div>
      <ScrollRevealWrapper>
        <HorizontalScroll
          buttons={buttons}
          selectedCategory={selectedCategory}
        />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper >
        <Carousel products={filteredProducts} />
      </ScrollRevealWrapper>
    </div>
  );
};

export default ProductCarousel;
