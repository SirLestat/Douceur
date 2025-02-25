import ScrollRevealWrapper from "../ScrollRevealWrapper";

const Hero = () => {
  return (
    <ScrollRevealWrapper>
      <div>
        <div className="hero min-h-[80vh] bg-[url('./src/components/hero/assets/hero-bg7.png')] bg-cover bg-center rounded-3xl relative">
          <div className="hero-content absolute bottom-0  text-left bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
            <div className=" text-white">
              <h1 className="text-5xl font-bold">Belleza Natural</h1>
              <p className="py-4">
                Descubre nuestra línea de cosméticos orgánicos certificados,
                elaborados con ingredientes naturales para el cuidado consciente
                de tu piel
              </p>
            </div>
          </div>
        </div>
        <button className="btn rounded-full w-full bg-[#8B9D83] text-white border-0 mt-8">
          Compra ahora
        </button>
      </div>
    </ScrollRevealWrapper>
  );
};

export default Hero;
