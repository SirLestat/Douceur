const Benefits = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-black sm:pb-32">
      {/* Contenido principal con Flex */}
      <div
        className="flex flex-col items-center text-center sm:text-left"
        data-aos="fade-up"
      >
        <p className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl text-[#2E6B34]">
          ¿Por qué elegir Douceur?
        </p>

        <div className="w-full max-w-full text-left">
          <p className="text-2xl font-medium md:text-3xl lg:text-4xl text-[#5D534B]">
            Ingredientes <strong>orgánicos</strong>
          </p>
          <p className="mt-4 mb-8 text-lg md:text-xl ">
            Descubre nuestras fórmulas enriquecidas con extractos botánicos y
            aceites esenciales para una piel radiante y saludable.
          </p>
        </div>
      </div>

      {/* Grid para  imágenes */}

      <div className="grid grid-cols-2 grid-rows-4 gap-4 md:gap-8 w-full h-[60vh]">
        <img
          src="src\components\Benefits\assets\organic4.jpg"
          alt="ingredientes naturales organicos"
          className="rounded-3xl w-full h-full object-cover col-start-1 col-span-1 row-span-2 "
          data-aos="fade-down"
          loading="lazy"
          data-aos-offset={window.innerWidth < 768 ? 150 : 300}
        />
        <img
          src="src\components\Benefits\assets\organic.jpg"
          alt="Crema facial"
          className="col-span-1 row-span-2 row-start-1 col-start-1 rounded-3xl w-full h-full object-cover"
          data-aos="fade-up"
          loading="lazy"
          data-aos-offset={window.innerWidth < 768 ? 150 : 300}
        />
        <img
          src="src\components\Benefits\assets\demo-1.png"
          alt="Resultado de uso de crema facial"
          className="col-span-2 row-span-4 row-start-1 col-start-2 rounded-3xl w-full h-full object-cover"
          data-aos="fade-down"
          loading="lazy"
          data-aos-offset={window.innerWidth < 768 ? 150 : 400}
        />
      </div>

      <div className="flex flex-col items-center sm:pt-16 pt-8">
        <p className="font-bold text-xl mb-8 md:text-xl lg:text-2xl text-[#5D534B]">
          Nuestros productos son 100% naturales, respetuosos con el medio
          ambiente y diseñados para nutrir profundamente.
        </p>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-6 md:w-full md:justify-between">
          <div
            className="flex flex-col justify-center items-center text-center"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 150 : 300}
          >
            <div className="bg-[#e6f0e6] rounded-full w-20 h-20 items-center justify-center flex">
              <img
                src="src\components\Benefits\assets\benefit2.2.png"
                alt="Sin parabenos"
                loading="lazy"
              />
            </div>

            <h3 className="font-bold pb-1 text-xl md:text-lg lg:text-xl pt-4 text-[#1e6e1e]">
              Pureza garantizada
            </h3>
            <p className="text-lg  lg:text-lg">
              Sin parabenos, sulfatos o siliconas que puedan irritar tu piel o
              dañar el medio ambiente.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />
            <p className="text-[#2e8b57] font-semibold text-md">
              100% libre de tóxicos
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center py-4 text-center"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 200 : 500}
          >
            <div className="bg-[#e6f0e6] rounded-full w-20 h-20 items-center justify-center flex">
              <img
                src="src\components\Benefits\assets\benefit1.2.png"
                alt="Packaging sostenible"
                loading="lazy"
              />
            </div>

            <h3 className="font-bold pb-1 text-xl md:text-lg lg:text-xl text-[#1e6e1e]  pt-4">
              Packaging sostenible
            </h3>
            <p className="text-lg  lg:text-lg">
              Materiales reciclables y biodegradables que minimizan nuestro
              impacto en el planeta.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />

            <p className="text-[#2e8b57] font-semibold text-md">
              Compromiso ecológico
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center text-center"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 250 : 700}
          >
            <div className="bg-[#e6f0e6] rounded-full w-20 h-20 flex items-center justify-center">
              <img
                src="src\components\Benefits\assets\benefit3.3.png"
                alt="Cruelty-Free"
                loading="lazy"
              />
            </div>

            <h3 className="font-bold pb-1 text-xl md:text-lg lg:text-xl text-[#1e6e1e] pt-4">
              Cruelty-Free
            </h3>
            <p className="text-lg  lg:text-lg">
              Productos 100% veganos y libres de crueldad, respetando a todos
              los seres vivos.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />
            <p className="text-[#2e8b57] font-semibold text-md">
              Certificación Leaping Bunny
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
