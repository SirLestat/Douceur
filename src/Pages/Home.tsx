import Benefits from "../components/Benefits/Benefits";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import NewsCarousel from "../components/Noticias/NewsCarousel";
import ProductCarousel from "../components/Products/ProductsCarousel";
import Testimonials from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductCarousel />
      <Testimonials />
      <Blog />
      <NewsCarousel />
    </>
  );
};

export default Home;
