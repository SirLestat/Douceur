import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  cartItemId?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  adjustQuantity: (productId: number, amount: number) => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  adjustQuantity: () => {},
  totalItems: 0,
  subtotal: 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      return existing
        ? current.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...current,
            { product, quantity: 1, cartItemId: crypto.randomUUID() },
          ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((current) =>
      current.filter((item) => item.product.id !== productId)
    );
  };

  const adjustQuantity = (productId: number, amount: number) => {
    setCart(
      (current) =>
        current
          .map((item) => {
            if (item.product.id === productId) {
              const newQuantity = item.quantity + amount;
              return newQuantity > 0
                ? { ...item, quantity: newQuantity }
                : null;
            }
            return item;
          })
          .filter(Boolean) as CartItem[]
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        adjustQuantity,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
