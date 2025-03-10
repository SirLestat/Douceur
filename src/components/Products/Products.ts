export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  tooltip?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Serum de Vitamina C y Ácido Ferúlico",
    price: 299.0,
    image: "src/components/Products/assets/product1.webp",
    category: "skincare",
    tooltip:
      "El ácido ferúlico es un antioxidante de origen vegetal que se encuentra en frutas, verduras, cereales y semillas. ",
  },

  {
    id: 2,
    name: "Exfoliante de Sal del Himalaya y Aceite de Almendras ",
    price: 150.0,
    image: "src/components/Products/assets/product9.jpg",
    category: "belleza",
  },
  {
    id: 3,
    name: "Crema corporal nutritiva con manteca de karité",
    price: 180.0,
    image: "src/components/Products/assets/product4.webp",
    category: "belleza",
  },

  {
    id: 4,
    name: "Jabón de Caléndula y Manzanilla",
    price: 120.0,
    image: "src/components/Products/assets/product7.1.jpg",
    category: "belleza",
  },
  {
    id: 5,
    name: "Crema hidratante con Aloe Vera y Jojoba",
    price: 170.0,
    image: "src/components/Products/assets/product8.jpg",
    category: "belleza",
  },
];
