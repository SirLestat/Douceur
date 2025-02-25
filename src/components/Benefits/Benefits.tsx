import ScrollRevealWrapper from "../ScrollRevealWrapper";

const Benefits = () => {
  return (
    <div className="mt-10 min-h-[90vh] text-black">
      {/* Contenido principal con Flex */}

      <div className="flex flex-col items-center text-center">
        <p className="text-4xl font-bold mb-8">¿Por qué elegir Douceur?</p>

        <div className="w-full max-w-4xl text-left">
          <ScrollRevealWrapper>
            <p className="text-2xl font-medium">
              Ingredientes <strong>orgánicos</strong>
            </p>
            <p className="mt-4 mb-8 ">
              Descubre nuestras fórmulas enriquecidas con extractos botánicos y
              aceites esenciales para una piel radiante y saludable.
            </p>
          </ScrollRevealWrapper>
        </div>
      </div>

      {/* Grid solo para las imágenes */}
      <ScrollRevealWrapper>
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <img
            src="src\components\Benefits\assets\product-1.png"
            alt="Crema facial"
            className="col-span-2 row-start-2 rounded-3xl"
          />
          <img
            src="src\components\Benefits\assets\demo-1.png"
            alt="Resultado de uso de crema facial"
            className=" col-span-2 row-start-1 row-span-2 bg-cover rounded-3xl "
          />
        </div>
      </ScrollRevealWrapper>

      {/* Contenido adicional con Flex */}
      <div className="flex flex-col items-center mt-8">
        <ScrollRevealWrapper>
          <p className="font-bold text-lg mb-8 ">
            Nuestros productos son 100% naturales, respetuosos con el medio
            ambiente y diseñados para nutrir profundamente.
          </p>
        </ScrollRevealWrapper>

        <div className="flex flex-col  gap-y-4">
          <ScrollRevealWrapper
            options={{ origin: "right", delay: 600, distance: "px" }}
          >
            <div className="border-4 border-[#8B9D83] bg-gray-00 rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit2.2.png"
                alt=""
                className="pb-2"
              />
              <h3 className="font-medium pb-1 text-md">Pureza garantizada</h3>
              <p>Sin parabenos, sulfatos o siliconas</p>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper
            options={{ origin: "left", delay: 600, distance: "15px" }}
          >
            <div className="border-4 border-[#8B9D83]  rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit1.png"
                alt="icono reciclaje"
              />
              <h3 className="font-medium pb-1 text-md">Packaging sostenible</h3>
              <p>Materiales 100% reciclables y biodegradables</p>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper
            options={{ origin: "right", delay: 600, distance: "15px" }}
          >
            <div className="border-4 border-[#8B9D83]  rounded-3xl p-4">
              <img
                src="src\components\Benefits\assets\benefit3.3.png"
                alt="icono libre de crueldad animal"
              />
              <h3 className="font-medium pb-1 text-md">Cruelty-Free</h3>
              <p>Productos 100% veganos y libres de crueldad.</p>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
