const Blog = () => {
  return (
    <div
      className="py-16 md:py-36 text-black md:grid md:grid-cols-2  md:gap-8 max-w-[150vh] mx-auto"
      data-aos="fade-right"
      data-aos-offset={window.innerWidth < 768 ? 400 : 700}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div>
        <h2 className="text-3xl font-bold pb-4 md:text-4xl">
          Cuidado Natural, Belleza Auténtica
        </h2>
<div className="">
  
  <img
          loading="lazy"
          src="src\components\Blog\assets\nature2.jpg"
          alt="Modelo en la naturaleza con flor en el cabello"
          className="w-full  rounded-br-full rounded-tl-full object-cover row-start-2 col-start-2"
        />
  

</div>
        
      </div>

      <div>
        <div className="rounded-3xl overflow-hidden mb-4"></div>

        <div className="flex flex-col justify-center h-full">
          <p className="pb-4 font-semibold md:text-xl">
            <strong>La belleza comienza con el cuidado adecuado.</strong>{" "}
            Descubre el poder de los ingredientes orgánicos para una piel
            radiante, saludable y en armonía con la naturaleza.
          </p>
          <button className="btn2 ">Leer blog</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
