import ScrollRevealWrapper from "../ScrollRevealWrapper";

const Hero = () => {
  return (
    <ScrollRevealWrapper>
      <div>
        {/* Grid en lg para organizar contenido */}
        <div className="hero min-h-[80vh] md:min-h-[90vh] lg:w-full bg-cover bg-center rounded-3xl relative lg:grid lg:grid-cols-2 lg:items-center">
          
          {/* Texto a la izquierda en lg */}
          <div className="hero-content absolute bottom-0 left-0 w-full p-6 
                          bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl 
                          md:relative md:bg-none md:p-12 lg:col-start-1">
            <div className="text-white md:text-black">
              <h1 className="text-5xl font-bold md:text-6xl">Belleza Natural</h1>
              <p className="py-4 sm:text-xl">
                Descubre nuestra línea de cosméticos orgánicos certificados,
                elaborados con ingredientes naturales para el cuidado consciente
                de tu piel.
              </p>

              {/* Botón visible solo en md+ */}
              <button className="hidden md:block btn rounded-full w-full md:w-auto bg-[#8B9D83] text-white border-0 mt-4 md:mt-4">
                Compra ahora
              </button>
            </div>
          </div>

          {/* Imagen a la derecha en lg */}
          <img
            src="./src/components/hero/assets/hero-bg7.png"
            alt="portada de mujer hermosa"
            className="object-cover w-full h-full md:max-h-screen rounded-3xl 
                        lg:w-full lg:h-full lg:col-start-2"
          />
          
        </div>

        {/* Botón visible solo en sm */}
        <button className="md:hidden btn rounded-full w-full bg-[#8B9D83] text-white border-0 mt-4">
          Compra ahora
        </button>
      </div>
    </ScrollRevealWrapper>
  );
};

export default Hero;
