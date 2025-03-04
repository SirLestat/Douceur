const Benefits = () => {
  return (
    <div className="py-16 md:py-36 min-h-[90vh] w-full text-black mx-auto  max-w-[150vh]">
      {/* Contenido principal con Flex */}
      <div
        className="flex flex-col items-center text-center sm:text-left"
        data-aos="fade-up"
      >
        <p className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl">
          ¿Por qué elegir Douceur?
        </p>

        <div className="w-full max-w-full text-left">
          <p className="text-2xl font-medium md:text-3xl lg:text-4xl">
            Ingredientes <strong>orgánicos</strong>
          </p>
          <p className="mt-4 mb-8 text-base md:text-lg lg:text-xl">
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
          data-aos-offset={window.innerWidth < 768 ? 150 : 400}
        />
        <img
          src="src\components\Benefits\assets\organic.jpg"
          alt="Crema facial"
          className="col-span-1 row-span-2 row-start-1 col-start-1 rounded-3xl w-full h-full object-cover"
          data-aos="fade-up"
          loading="lazy"
          data-aos-offset={window.innerWidth < 768 ? 150 : 400}
        />
        <img
          src="src\components\Benefits\assets\demo-1.png"
          alt="Resultado de uso de crema facial"
          className="col-span-2 row-span-4 row-start-1 col-start-2 rounded-3xl w-full h-full object-cover"
          data-aos="fade-down"
          loading="lazy"
          data-aos-offset={window.innerWidth < 768 ? 150 : 600}
        />
      </div>

      <div className="flex flex-col items-center mt-8 ">
        <p className="font-bold text-lg mb-8 md:text-xl lg:text-2xl">
          Nuestros productos son 100% naturales, respetuosos con el medio
          ambiente y diseñados para nutrir profundamente.
        </p>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-6 md:w-full md:justify-between">
          <div
            className="border-4 border-[#697B60] bg-gray-00 rounded-3xl p-4"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 150 : 400}
          >
            <img
              src="src\components\Benefits\assets\benefit2.2.png"
              alt="Pureza garantizada"
              loading="lazy"
            />
            <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
              Pureza garantizada
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Sin parabenos, sulfatos o siliconas
            </p>
          </div>

          <div
            className="border-4 border-[#697B60] rounded-3xl p-4"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 200 : 600}
          >
            <img
              src="src\components\Benefits\assets\benefit1.2.png"
              alt="Packaging sostenible"
              loading="lazy"
            />
            <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
              Packaging sostenible
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Materiales reciclables y biodegradables
            </p>
          </div>

          <div
            className="border-4 border-[#697B60] rounded-3xl p-4"
            data-aos="zoom-in"
            data-aos-offset={window.innerWidth < 768 ? 250 : 800}
          >
            <img
              src="src\components\Benefits\assets\benefit3.3.png"
              alt="Cruelty-Free"
              loading="lazy"
            />
            <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
              Cruelty-Free
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Productos 100% veganos y libres de crueldad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
