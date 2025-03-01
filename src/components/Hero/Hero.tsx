

const Hero = () => {
  return (
    <section
      aria-label="Sección principal - Portada de modelo"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Grid en lg para organizar contenido */}
      <div className="hero min-h-[74vh] md:min-h-[90vh] lg:w-full bg-cover bg-center rounded-3xl relative lg:grid lg:grid-cols-2 lg:items-center ">
        {/* Texto a la izquierda en lg */}
        <div
          className="hero-content absolute bottom-0 left-0 w-full p-6 
                          bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl 
                          md:relative md:bg-none md:p-12 lg:col-start-1"
        >
          <div className="text-white md:text-black">
            <h1 className="text-5xl font-bold md:text-6xl">Belleza Natural</h1>
            <p className="py-4 sm:text-xl">
              Descubre nuestra línea de cosméticos orgánicos certificados,
              elaborados con ingredientes naturales para el cuidado consciente
              de tu piel.
            </p>

            {/* Botón visible solo en md+ */}
            <button className="btn2 hidden md:flex items-center justify-center  min-w-[200px] h-[56px]  md:text-xl bg-[#697B60] text-white  mt-4">
              Compra ahora
            </button>
          </div>
        </div>

        {/* Imagen a la derecha en md+ */}
        <img
          src="./src/components/hero/assets/hero-bg8.png"
          alt="Portada mostrando una mujer de belleza natural usando cosméticos orgánicos"
          className="object-cover w-full h-full md:max-h-screen rounded-3xl 
                        md:w-full md:h-full md:col-start-2 "
        />
      </div>

      {/* Botón visible solo en sm */}
      <button className="md:hidden btn rounded-full w-full bg-[#697B60] text-white  mt-4 text-lg items">
        Compra ahora
      </button>
    </section>
  );
};

export default Hero;
