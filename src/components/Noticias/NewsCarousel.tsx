import { newslist } from "./News";

const NewsCarousel: React.FC = () => {
  return (
    <div className="container mx-auto px-6 sm:px-0 sm:py-16 pt-12">
      <h2 className="text-[#2D6A4F] text-3xl font-bold pb-8 text-center md:text-left">
        Inspírate con Tips y Secretos de Cuidado Natural
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newslist.map((news) => (
          <div
            key={news.id}
            className="p-4 bg-[#5d534b15] rounded-3xl shadow-lg transition-transform transform hover:scale-105  cursor-pointer active:scale-100"
          >
            <img
              src={news.image}
              className="w-full h-auto max-h-60 rounded-3xl object-cover aspect-[4/3]"
              alt={news.imgdescription}
              loading="lazy"
            />

            <div className="text-[#5D534B] text-md font-medium pt-4 flex justify-between items-center">
              <p>{news.title}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
