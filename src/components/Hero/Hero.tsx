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
    <section className="pt-8 p-4 sm:pt-0 sm:p-0 sm:mx-8">
      <div className="min-h-[74vh] lg:h-[100vh] rounded-3xl md:grid md:grid-cols-2 lg:items-center md:justify-center md:gap-8">
        <div className="text-black">
          <h1 className="text-7xl font-bold text-[#2D6A4F] sm:mb-4 mb-4 text-center md:text-left">
            Belleza Natural
          </h1>
          <p className="text-xl sm:mb-4 mb-4 text-[#5D534B]">
            Descubre nuestra línea de cosméticos orgánicos certificados,
            elaborados con ingredientes naturales para el cuidado consciente de
            tu piel.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#5D534B] sm:mb-4">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <LuLeaf className="text-[#2D6A4F]" />
              <span>Sin parabenos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <LuLeaf className="text-[#2D6A4F]" />
              <span>Cruelty-free</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <LuLeaf className="text-[#2D6A4F]" />
              <span>Eco-friendly</span>
            </div>
          </div>
          <button
            className="btn2 rounded-full w-full bg-[#E07A5F] text-[#ffffff] my-4 text-xl items sm:max-w-[30vh] hover:bg-[#C76A53]"
            onClick={scrollToProducts} // Agregar la función al clic
          >
            Compra ahora
          </button>
        </div>
        <div className="sm:flex justify-center">
          <img
            src="src\components\Hero\assets\hero2.jpg"
            alt=""
            className="rounded-3xl object-cover object-right h-96 sm:h-full sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
