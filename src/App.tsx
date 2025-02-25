import Benefits from "./components/Benefits/Benefits";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsCarousel from "./components/Noticias/NewsCarousel";
import Products from "./components/Products/ProductsCarousel";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="w-full min-h-screen pt-20">
        <Navbar />
        <div className="px-4">
          <Hero />
          <Benefits />
          <Products />
          <Blog />
          <NewsCarousel />
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
