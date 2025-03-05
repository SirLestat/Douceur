
import { newslist } from "./News";

const NewsCarousel: React.FC = () => {
  return (
    <div className="max-w-[150vh] mx-6 md:mx-auto">
      <h2 className="text-black text-3xl font-bold pb-4 text-left">Noticias</h2>
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
                loading="lazy"
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
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn2 ">
        Ver todas las noticias
      </button>
    </div>
  );
};

export default NewsCarousel;
