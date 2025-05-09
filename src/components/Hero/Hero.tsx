import React from "react";
import { scroller } from "react-scroll";
import { LuLeaf } from "react-icons/lu";

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    scroller.scrollTo("productsSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section
      className="pt-8 p-4 sm:pt-0 sm:p-0 sm:mx-8"
      data-aos="fade-down"
      data-aos-duration="1500"
      aria-label="Sección principal de Belleza Natural"
    >
      <div className="min-h-[74vh] lg:h-[100vh] rounded-3xl md:grid md:grid-cols-2 lg:items-center md:justify-center md:gap-8">
        <div className="text-black">
          <h1 className="text-7xl font-bold text-[#1B4332] sm:mb-4 mb-4 text-center md:text-left">
            Belleza Natural
          </h1>
          <p className="text-xl sm:mb-4 mb-4 text-[#5D534B]">
            Descubre nuestra línea de cosméticos orgánicos certificados,
            elaborados con ingredientes naturales para el cuidado consciente de
            tu piel.
          </p>
          <ul className="flex flex-wrap items-center gap-4 text-sm text-[#5D534B] sm:mb-4">
            {["Sin parabenos", "Cruelty-free", "Eco-friendly"].map((text) => (
              <li
                key={text}
                className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border border-[#E6DFD4]"
              >
                <LuLeaf className="text-[#1B4332]" aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button
            className="btn2 rounded-full w-full bg-[#D35400] text-white my-4 text-xl sm:max-w-[30vh] hover:bg-[#BA4A00] focus:outline-none focus:ring-2 focus:ring-[#BA4A00] focus:ring-offset-2 transition-colors duration-200"
            onClick={scrollToProducts}
            aria-label="Explora nuestra colección de productos naturales"
          >
            Compra ahora
          </button>
        </div>
        <div className="sm:flex justify-center">
          <img
            src="/hero/hero2.webp"
            width={1200}
            height={800}
            alt="Colección de cosméticos orgánicos con envases sostenibles"
            className="rounded-3xl object-cover object-right h-96 sm:h-full sm:w-full"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
