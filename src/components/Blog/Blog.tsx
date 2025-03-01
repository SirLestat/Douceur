

const Blog = () => {
  return (
    <div className="py-16 md:py-24 text-black md:grid md:grid-cols-2  md:gap-8" data-aos="fade-right" data-aos-delay="250">
      <div>
        <h2 className="text-3xl font-bold pb-4 md:text-4xl">
          Cuidado Natural, Belleza Auténtica
        </h2>
        
        <img
          loading="lazy"
          src="src/components/Blog/assets/model1.png"
          alt="Modelo rubia demostrando cuidado natural"
          className="w-full rounded-3xl"
        />
      </div>

      <div>
        <div className="rounded-3xl overflow-hidden mb-4"></div>

        <div className="flex flex-col justify-center h-full">
          <p className="pb-4 font-semibold md:text-xl">
            <strong>La belleza comienza con el cuidado adecuado.</strong>{" "}
            Descubre el poder de los ingredientes orgánicos para una piel
            radiante, saludable y en armonía con la naturaleza.
          </p>
          <button className="btn2 ">
            Leer blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
