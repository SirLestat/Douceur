import { Link } from "react-router-dom";
import { useMemo } from "react";

const Blog = () => {
  const aosOffset = useMemo(() => (window.innerWidth < 768 ? 400 : 800), []);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-right md:bg-left bg-no-repeat z-[-1] "
        style={{
          backgroundImage: "url('/blog/nature2.avif')",
          backgroundAttachment: "fixed",
          opacity: "80%",
        }}
        aria-hidden="true"
      ></div>

      <div
        className="py-16 text-black md:grid md:grid-cols-2 container mx-auto px-6 relative z-10 gap-8"
        data-aos="fade-right"
        data-aos-offset={aosOffset}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <section>
          <h2 className="text-3xl font-bold pb-4 md:text-4xl text-[#333333] text-center">
            Cuidado Natural, Belleza Auténtica
          </h2>
          <figure>
            <img
              loading="lazy"
              src="/blog/nature1.webp"
              alt="Modelo con rodajas de pepino en el rostro"
              className="w-full h-auto rounded-br-full rounded-tl-full object-contain"
            />
          </figure>
        </section>

        <section className="flex flex-col justify-center h-full text-[#333333] font-medium">
          <p className="pb-4 text-xl">
            <strong>La belleza comienza con el cuidado adecuado.</strong>{" "}
            Descubre el poder de los ingredientes orgánicos para una piel
            radiante, saludable y en armonía con la naturaleza.
          </p>
          <Link to="blog/1">
            <button className="btn2 bg-[#E07A5F] hover:bg-[#C76A53] text-[#FFFFFF] text-lg sm:max-w-[320px] w-full">
              Leer blog
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Blog;
