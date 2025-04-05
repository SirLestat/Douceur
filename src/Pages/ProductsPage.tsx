import React from "react";
import ProductList from "../components/Shop/ProductList";

const ProductsPage: React.FC = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Crema Facial",
      price: 250,
      image: "https://via.placeholder.com/200",
      category: "Cuidado de la piel",
    },
    {
      id: 2,
      name: "Aceite Natural",
      price: 180,
      image: "https://via.placeholder.com/200",
      category: "Cuidado de la piel",
    },
    {
      id: 3,
      name: "Exfoliante Natural",
      price: 200,
      image: "https://via.placeholder.com/200",
      category: "Cuidado de la piel",
    },
    {
      id: 4,
      name: "Sérum Revitalizante",
      price: 300,
      image: "https://via.placeholder.com/200",
      category: "Cuidado de la piel",
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-6"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <h1 className="text-3xl font-semibold text-center mb-6">
        Nuestros Productos
      </h1>
      <ProductList products={mockProducts} />
    </div>
  );
};

export default ProductsPage;
