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
    image: "/products/product1.webp",
    category: "skincare",
    tooltip:
      "El ácido ferúlico es un antioxidante de origen vegetal que se encuentra en frutas, verduras, cereales y semillas, conocido por sus propiedades antienvejecimiento.",
  },

  {
    id: 2,
    name: "Exfoliante de Sal del Himalaya y Aceite de Almendras ",
    price: 150.0,
    image: "/products/product9.webp",
    category: "belleza",
    tooltip:
      "Exfoliante natural que elimina células muertas, dejando la piel suave y renovada. Combina las propiedades curativas de la sal del Himalaya y el aceite de almendras.",
  },
  {
    id: 3,
    name: "Crema corporal nutritiva con manteca de karité",
    price: 180.0,
    image: "/products/product4.webp",
    category: "belleza",
    tooltip:
      "La manteca de karité es ideal para hidratar y nutrir la piel. Esta crema ayuda a suavizar y restaurar la piel seca, dejándola más suave y flexible.",
  },

  {
    id: 4,
    name: "Jabón de Caléndula y Manzanilla",
    price: 120.0,
    image: "/products/product7.1.webp",
    category: "belleza",
    tooltip:
      "El jabón de caléndula y manzanilla tiene propiedades calmantes y antiinflamatorias, ideal para piel sensible o irritada.",
  },
  {
    id: 5,
    name: "Crema hidratante con Aloe Vera y Jojoba",
    price: 170.0,
    image: "/products/product8.webp",
    category: "belleza",
    tooltip:
      "Combinación perfecta de Aloe Vera y aceite de jojoba para mantener la piel hidratada, calmada y saludable durante todo el día.",
  },
];
