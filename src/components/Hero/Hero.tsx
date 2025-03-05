const Hero = () => {
  return (
    <section 
    className="p-4 md:px-8"
      aria-label="Sección principal - Portada de modelo"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Grid en lg para organizar contenido */}
      <div className="hero min-h-[74vh] md:h-[100vh] md:w-12/12 place-items-center rounded-3xl relative md:grid md:grid-cols-2 lg:items-center ">
        {/* Texto a la izquierda en lg */}
        <div
          className="hero-content absolute bottom-0 left-0 w-full p-6 
                          bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl 
                          md:relative md:bg-none md:p-12 lg:col-start-1"
        >
          <div className="text-white md:text-white ">
            <h1 className="text-5xl font-bold md:text-8xl">Belleza Natural</h1>
            <p className="py-4 text-lg md:text-3xl ">
              Descubre nuestra línea de cosméticos orgánicos certificados,
              elaborados con ingredientes naturales para el cuidado consciente
              de tu piel.
            </p>

            {/* Botón visible solo en md+ */}
            <button className="btn2 hidden md:flex items-center justify-center  min-w-[200px] h-[56px]  md:text-xl text-white  mt-4">
              Compra ahora
            </button>
          </div>
        </div>

        {/* Imagen a la derecha en md+ */}
        
        <img
          src="./src/components/hero/assets/hero8.png"
          alt="Portada mostrando una mujer de belleza natural usando cosméticos orgánicos"
          className="object-cover w-full h-full md:max-h-screen rounded-3xl 
                        md:w-12/12 md:h-[95vh]  col-span-2 col-start-1 md:object-top"
        />
      </div>

      {/* Botón visible solo en sm */}
      <button className="md:hidden btn rounded-full w-full bg-[#009688] text-white  mt-4 text-lg items">
        Compra ahora
      </button>
    </section>
  );
};

export default Hero;
