import { useMemo } from "react";

const Benefits = () => {
  const aosOffset = useMemo(() => {
    const width = window.innerWidth;
    return {
      image1: width < 768 ? 150 : 350,
      image2: width < 768 ? 150 : 300,
      image3: width < 768 ? 150 : 450,
      benefit1: width < 768 ? 150 : 200,
      benefit2: width < 768 ? 200 : 350,
      benefit3: width < 768 ? 250 : 500,
    };
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 text-black sm:pb-16">
      {/* Sección principal*/}
      <div
        className="flex flex-col items-center text-center sm:text-left"
        data-aos="fade-up"
      >
        <p className="text-5xl font-bold mb-8 md:text-5xl text-[#2D6A4F]">
          ¿Por qué elegir Douceur?
        </p>
        <hr className="bg-[#52B788] w-full h-[1px] mb-4" />
        <div className="w-full text-left">
          <p className="text-3xl font-medium text-[#5D534B]">
            Ingredientes <strong>orgánicos</strong>
          </p>
          <p className="mt-4 mb-8 text-lg md:text-xl">
            Descubre nuestras fórmulas enriquecidas con extractos botánicos y
            aceites esenciales para una piel radiante y saludable.
          </p>
        </div>
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 grid-rows-4 gap-4 md:gap-8 w-full h-[60vh]">
        <img
          src="/benefits/organic4.webp"
          alt="Ingredientes naturales orgánicos"
          className="rounded-3xl w-full h-full object-cover col-start-1 col-span-1 row-span-2"
          data-aos="fade-right"
          loading="lazy"
          data-aos-offset={aosOffset.image1}
        />
        <img
          src="/benefits/organic.webp"
          alt="Aguacate orgánico"
          className="col-span-1 row-span-2 row-start-1 col-start-1 rounded-3xl w-full h-full object-cover"
          data-aos="fade-right"
          loading="lazy"
          data-aos-offset={aosOffset.image2}
        />
        <img
          src="/benefits/demo-1.webp"
          alt="Resultado de uso de crema facial"
          className="col-span-2 row-span-4 row-start-1 col-start-2 rounded-3xl w-full h-full object-cover"
          data-aos="fade-down"
          loading="lazy"
          data-aos-offset={aosOffset.image3}
        />
      </div>

      {/* Sección de beneficios */}
      <div className="flex flex-col items-center sm:pt-16 pt-8">
        <p className="font-bold text-xl mb-8 md:text-xl lg:text-2xl text-[#5D534B]">
          Nuestros productos son 100% naturales, respetuosos con el medio
          ambiente y diseñados para nutrir profundamente.
        </p>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-6 md:w-full md:justify-between">
          {/* Beneficio 1 */}
          <div
            className="flex flex-col justify-center items-center text-center"
            data-aos="zoom-in"
            data-aos-offset={aosOffset.benefit1}
          >
            <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#52b788]/10">
              <img
                src="/benefits/benefit2.2.webp"
                alt="Sin parabenos"
                loading="lazy"
              />
            </div>
            <h2 className="font-bold pb-1 text-xl md:text-lg lg:text-xl pt-4 text-[#2D6A4F]">
              Pureza garantizada
            </h2>
            <p className="text-lg text-[#5D534B]">
              Sin parabenos, sulfatos o siliconas que puedan irritar tu piel o
              dañar el medio ambiente.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />
            <p className="text-[#2e8b57] font-semibold text-md">
              100% libre de tóxicos
            </p>
          </div>

          {/* Beneficio 2 */}
          <div
            className="flex flex-col justify-center items-center py-4 text-center"
            data-aos="zoom-in"
            data-aos-offset={aosOffset.benefit2}
          >
            <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#52b788]/10">
              <img
                src="/benefits/benefit1.2.webp"
                alt="Packaging sostenible"
                loading="lazy"
              />
            </div>
            <h2 className="font-bold pb-1 text-xl md:text-lg lg:text-xl pt-4 text-[#2D6A4F]">
              Packaging sostenible
            </h2>
            <p className="text-lg text-[#5D534B]">
              Materiales reciclables y biodegradables que minimizan nuestro
              impacto en el planeta.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />
            <p className="text-[#2e8b57] font-semibold text-md">
              Compromiso ecológico
            </p>
          </div>

          {/* Beneficio 3 */}
          <div
            className="flex flex-col justify-center items-center text-center"
            data-aos="zoom-in"
            data-aos-offset={aosOffset.benefit3}
          >
            <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#52b788]/10">
              <img
                src="/benefits/benefit3.3.webp"
                alt="Cruelty-Free"
                loading="lazy"
              />
            </div>
            <h2 className="font-bold pb-1 text-xl md:text-lg lg:text-xl pt-4 text-[#2D6A4F]">
              Cruelty-Free
            </h2>
            <p className="text-lg text-[#5D534B]">
              Productos 100% veganos y libres de crueldad, respetando a todos
              los seres vivos.
            </p>
            <hr className="bg-[#33850A] my-6 w-32 h-[1px]" />
            <p
              id="productsSection"
              className="text-[#2e8b57] font-semibold text-md"
            >
              Certificación Leaping Bunny
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
