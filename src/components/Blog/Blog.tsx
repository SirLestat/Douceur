const Blog = () => {
  return (
    <div className="relative">
      {/* Imagen de fondo solo para esta sección */}
      <div
        className="absolute inset-0 w-full h-[50vh] top-28 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('src/components/Blog/assets/nature3.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Contenido del Blog */}
      <div
        className="py-16 md:py-36 text-black md:grid md:grid-cols-2 container mx-auto px-6 relative z-10"
        data-aos="fade-right"
        data-aos-offset={window.innerWidth < 768 ? 400 : 700}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div>
          <h2 className="text-3xl font-bold pb-4 md:text-4xl text-white">
            Cuidado Natural, Belleza Auténtica
          </h2>

          <div>
            <img
              loading="lazy"
              src="src/components/Blog/assets/nature2.jpg"
              alt="Modelo en la naturaleza con flor en el cabello"
              className="w-full rounded-br-full rounded-tl-full object-cover row-start-2 col-start-2"
            />
          </div>
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden mb-4"></div>

          <div className="flex flex-col justify-center h-full text-white">
            <p className="pb-4 md:text-lg text-lg">
              <strong>La belleza comienza con el cuidado adecuado.</strong>{" "}
              Descubre el poder de los ingredientes orgánicos para una piel
              radiante, saludable y en armonía con la naturaleza.
            </p>
            <button className="btn2">Leer blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
