import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { newslist } from "./News";

const NewsCarousel: React.FC = () => {
  return (
    <div className="pt-16">
      <ScrollRevealWrapper>
        <h2 className="text-black text-2xl font-bold pb-4">Noticias</h2>
        <div className="carousel carousel-center rounded-box border-none pb-4">
          {newslist.map((news) => (
            <div
              key={news.id}
              className="carousel-item relative border-none pr-4"
            >
              <div className="relative">
                <img
                  src={news.image}
                  className="rounded-3xl "
                  alt={news.imgdescription}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl "></div>

                <h2 className="absolute text-left left-0 bottom-14 text-white text-lg font-sm p-4">
                  {news.title}
                </h2>

                <div className="bg-[#F5F6F3] absolute right-0 bottom-0 rounded-br-2xl rounded-tl-[40px] rounded-tr-none rounded-bl-none border-none w-[16vw] h-[7.2vh]">
                  <button className="btn absolute bottom-0 left-3 text-xl text-center flex rounded-none rounded-tl-3xl rounded-br-3xl bg-[#8B9D83]">
                    <img
                      src="src/components/Noticias/assets/arrow2.png"
                      alt="ir"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <button className="btn w-full rounded-full bg-[#8B9D83] text-white">
          Ver todas las noticias
        </button>
      </ScrollRevealWrapper>
    </div>
  );
};

export default NewsCarousel;
