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
      {/* Espacio superior para no ser tapado por la barra de navegación */}
      <div className="pt-4 md:pt-16"></div>

      {/* Título y Subtítulo de la sección de productos */}
      <div className="bg-[#2D6A4F] text-white py-6 px-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Descubre Nuestra Colección
            </h2>
            <p className="text-lg opacity-90">
              Productos naturales para realzar tu belleza y cuidar tu piel
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center mt-4 md:mt-0">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="font-medium">
                Envío gratis en compras mayores a $100 MXN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="flex gap-4 justify-start pl-4 mt-6">
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

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
