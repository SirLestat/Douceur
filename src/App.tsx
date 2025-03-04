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
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <CartProvider>
      <div className="w-full min-h-screen pt-20 md:pt-0">
        <Navbar />
        <div className="px-6 md:px-8 w-full mx-auto">
          <Hero />
          <Benefits />
          <Products />
          <Testimonial />
          <Blog />
          <NewsCarousel />
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
