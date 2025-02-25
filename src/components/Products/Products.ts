export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Crema Facial",
    price: 299.0,
    image:
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    category: "skincare",
  },

  {
    id: 2,
    name: "Jabón Artesanal",
    price: 150.0,
    image:
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    category: "belleza",
  },
];
