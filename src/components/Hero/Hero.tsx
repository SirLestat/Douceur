import { Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section
      className=" pt-8 p-4 sm:pt-0 sm:p-0 sm:mx-8"
      aria-label="Sección principal - Portada de modelo"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="min-h-[74vh] lg:h-[100vh] rounded-3xl md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-8 ">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] animate-float-slow">
            <Leaf className="w-8 h-8 text-[#7BB989]/60 rotate-45" />
          </div>
          <div className="absolute top-[30%] left-[35%] animate-pulse">
            <Leaf className="w-6 h-6 text-[#7BB989]/70 -rotate-12" />
          </div>
          <div className="absolute bottom-[25%] left-[20%] animate-float-reverse">
            <Leaf className="w-10 h-10 text-[#7BB989]/50 rotate-90" />
          </div>
        </div>
        <div className="text-black">
          <h1 className="text-5xl font-bold sm:text-8xl text-[#4A8B54] sm:mb-8 mb-4">
            Belleza Natural
          </h1>
          <p className="text-lg sm:text-3xl sm:mb-4 mb-4 text-[#5D534B]">
            Descubre nuestra línea de cosméticos orgánicos certificados,
            elaborados con ingredientes naturales para el cuidado consciente de
            tu piel.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#5D534B] sm:mb-4">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <Leaf className="h-4 w-4 text-[#4A8B54]" />
              <span>Sin parabenos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <Leaf className="h-4 w-4 text-[#4A8B54]" />
              <span>Cruelty-free</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border-[#E6DFD4] border-2">
              <Leaf className="h-4 w-4 text-[#4A8B54]" />
              <span>Eco-friendly</span>
            </div>
          </div>
          <button className="btn2 rounded-full w-full bg-[#4A8B54] text-white  my-4 text-xl items sm:max-w-[16vh]">
            Compra ahora
          </button>
        </div>
        <div className="sm:flex justify-center">
          <img
            src="src\components\Hero\assets\hero2.jpg"
            alt=""
            className="rounded-3xl object-cover object-right h-96 sm:h-full sm:w-full "
          />
        </div>
      </div>
      button
    </section>
  );
};

export default Hero;
