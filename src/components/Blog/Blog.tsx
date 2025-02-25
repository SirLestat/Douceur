import ScrollRevealWrapper from "../ScrollRevealWrapper";

const Blog = () => {
  return (
    <div className="text-black pt-16">
      <ScrollRevealWrapper>
        <h2 className=" text-3xl font-bold pb-4">
          Cuidado Natural, Belleza Auténtica
        </h2>
        <div className="rounded-3xl overflow-hidden mb-4">
          <img src="src\components\Blog\assets\model1.png" alt="Blonde model" />
        </div>
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <p className="pb-4 font-semibold ">
          La belleza comienza con el cuidado adecuado. Descubre el poder de los
          ingredientes orgánicos para una piel radiante, saludable y en armonía
          con la naturaleza.
        </p>
        <button className="btn rounded-full bg-[#8B9D83] text-white">
          Leer blog
        </button>
      </ScrollRevealWrapper>
    </div>
  );
};

export default Blog;
