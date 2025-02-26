import ScrollRevealWrapper from "../ScrollRevealWrapper";

const Benefits = () => {
  return (
    <div className="mt-10 min-h-[90vh] text-black">
      {/* Contenido principal con Flex */}
      <div className="flex flex-col items-center text-center sm:text-left">
        <p className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl">
          ¿Por qué elegir Douceur?
        </p>

        <div className="w-full max-w-full text-left">
          <ScrollRevealWrapper>
            <p className="text-2xl font-medium md:text-3xl lg:text-4xl">
              Ingredientes <strong>orgánicos</strong>
            </p>
            <p className="mt-4 mb-8 text-base md:text-lg lg:text-xl">
              Descubre nuestras fórmulas enriquecidas con extractos botánicos y
              aceites esenciales para una piel radiante y saludable.
            </p>
          </ScrollRevealWrapper>
        </div>
      </div>

      {/* Grid solo para las imágenes */}
      <ScrollRevealWrapper>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 md:gap-8">
          <img
            src="src\components\Benefits\assets\product-1.png"
            alt="Crema facial"
            className="col-span-2 row-start-2 rounded-3xl"
          />
          <img
            src="src\components\Benefits\assets\demo-1.png"
            alt="Resultado de uso de crema facial"
            className="col-span-2 row-start-1 row-span-2 bg-cover rounded-3xl"
          />
        </div>
      </ScrollRevealWrapper>

      {/* Contenido adicional con Flex */}
      <div className="flex flex-col items-center mt-8">
        <ScrollRevealWrapper>
          <p className="font-bold text-lg mb-8 md:text-xl lg:text-2xl">
            Nuestros productos son 100% naturales, respetuosos con el medio
            ambiente y diseñados para nutrir profundamente.
          </p>
        </ScrollRevealWrapper>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-6 md:w-full md:justify-between">
          <ScrollRevealWrapper
            options={{ origin: "right", delay: 600, distance: "px" }}
          >
            <div className="border-4 border-[#8B9D83] bg-gray-00 rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit2.2.png"
                alt="Pureza garantizada"
                
              />
              <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
                Pureza garantizada
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Sin parabenos, sulfatos o siliconas
              </p>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper
            options={{ origin: "left", delay: 600, distance: "15px" }}
          >
            <div className="border-4 border-[#8B9D83] rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit1.2.png"
                alt="Packaging sostenible"
              />
              <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
                Packaging sostenible
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Materiales 100% reciclables y biodegradables
              </p>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper
            options={{ origin: "right", delay: 600, distance: "15px" }}
          >
            <div className="border-4 border-[#8B9D83] rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit3.3.png"
                alt="Cruelty-Free"
              />
              <h3 className="font-medium pb-1 text-md md:text-lg lg:text-xl">
                Cruelty-Free
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Productos 100% veganos y libres de crueldad.
              </p>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
