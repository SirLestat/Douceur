import Benefits from "../components/Benefits/Benefits";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import NewsCarousel from "../components/Noticias/NewsCarousel";
import ProductCarousel from "../components/Products/ProductsCarousel";
import AnimatedTestimonialsDemo from "../components/testimonial/AnimatedTestimonialsDemo";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductCarousel />
      <AnimatedTestimonialsDemo />
      <Blog />
      <NewsCarousel />
    </>
  );
};

export default Home;
