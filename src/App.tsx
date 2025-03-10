import Benefits from "./components/Benefits/Benefits";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsCarousel from "./components/Noticias/NewsCarousel";
import Products from "./components/Products/ProductsCarousel";
import { CartProvider } from "./context/CartContext";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <CartProvider>
      <div className="w-full min-h-screen pt-12 md:pt-20 lg:pt-0">
        <Navbar />
        <div className=" w-full mx-auto">
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
