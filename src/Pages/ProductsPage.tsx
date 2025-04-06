import React, { useState } from "react";
import ProductList from "../components/Shop/ProductList";
import { products } from "../components/Products/Products"; // Lista de productos

const ProductsPage: React.FC = () => {
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Manejar el clic en los botones de categoría
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="container mx-auto px-4 py-6"
      data-aos="fade-left"
      data-aos-duration="200"
    >
      <h1 className="text-3xl font-semibold text-center mb-6">
        Nuestros Productos
      </h1>

      {/* Filtros de categoría */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`${
            !selectedCategory
              ? "bg-[#2D6A4F] text-white"
              : "bg-white text-[#5D534B] border border-[#E9ECEF] hover:bg-[#2D6A4F] hover:text-white"
          } px-4 py-2 rounded-full`}
        >
          Todo
        </button>
        <button
          onClick={() => handleCategoryChange("skincare")}
          className={`${
            selectedCategory === "skincare"
              ? "bg-[#2D6A4F] text-white"
              : "bg-white text-[#5D534B] border border-[#E9ECEF] hover:bg-[#2D6A4F] hover:text-white"
          } px-4 py-2 rounded-full`}
        >
          Skincare
        </button>
        <button
          onClick={() => handleCategoryChange("belleza")}
          className={`${
            selectedCategory === "belleza"
              ? "bg-[#2D6A4F] text-white"
              : "bg-white text-[#5D534B] border border-[#E9ECEF] hover:bg-[#2D6A4F] hover:text-white"
          } px-4 py-2 rounded-full`}
        >
          Belleza
        </button>
      </div>

      {/* Pasamos los productos filtrados a ProductList */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
