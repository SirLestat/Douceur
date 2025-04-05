import { Link, useLocation } from "react-router-dom";
import { newslist } from "../Noticias/News";

const NewsCarousel: React.FC = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-6  sm:py-16 pt-12">
      <h2 className="text-[#2D6A4F] text-3xl font-bold pb-8 text-center md:text-left">
        Inspírate con Tips y Secretos de Cuidado Natural
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newslist.map((news) => {
          const isCurrentPage = location.pathname === news.path;
          return (
            <Link
              key={news.id}
              to={news.path}
              aria-label={`Leer más sobre ${news.title}`}
              className={isCurrentPage ? "pointer-events-none" : ""}
            >
              <article
                className={`h-full p-4 rounded-3xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer active:scale-100 border border-[#2D6A4F] flex flex-col ${
                  isCurrentPage ? "opacity-50" : ""
                }`}
              >
                <figure>
                  <img
                    src={news.image}
                    alt={news.imgdescription}
                    className="w-full h-auto max-h-60 rounded-3xl object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </figure>
                <div className="text-[#5D534B] text-lg font-medium pt-4 flex flex-col">
                  <p>{news.title}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCarousel;
