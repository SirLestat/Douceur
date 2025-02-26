import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { newslist } from "./News";

const NewsCarousel: React.FC = () => {
  return (
    <div className="pt-16">
      <ScrollRevealWrapper>
        <h2 className="text-black text-3xl font-bold pb-4 text-left">
          Noticias
        </h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {newslist.map((news) => (
            <div
              key={news.id}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
            >
              <div className="relative group">
                <img
                  src={news.image}
                  className="w-full h-auto rounded-3xl"
                  alt={news.imgdescription}
                />

                {/* Degradado y texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl p-4 flex flex-col justify-end">
                  <h2 className="text-white text-lg sm:text-xl font-semibold leading-tight absolute bottom-20">
                    {news.title}
                  </h2>
                </div>

                {/* Botón posicionado en la parte derecha */}
                <div className="absolute bottom-4 right-4 ">
                  <button className="btn bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-110 px-[13px] ">
                    <img
                      src="src/components/Noticias/assets/arrow1.png"
                      alt="icono de flecha"
                      className="w-5 "
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <button className="btn w-full rounded-full bg-[#8B9D83] text-white mt-6 py-3 px-6 shadow-lg hover:bg-[#6f7d5b] transition-all duration-300">
          Ver todas las noticias
        </button>
      </ScrollRevealWrapper>
    </div>
  );
};

export default NewsCarousel;
