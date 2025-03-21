import { useState, useEffect } from "react";

interface TestimonialProps {
  name: string;
  location: string;
  testimonial: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "María García",
    location: "Madrid",
    testimonial:
      "Estos productos cambiaron completamente mi rutina de cuidado facial. Mi piel se siente más hidratada y radiante.",
  },
  {
    name: "Laura Sánchez",
    location: "Barcelona",
    testimonial:
      "Después de probar tantas marcas, finalmente encontré productos que respetan mi piel sensible.",
  },
  {
    name: "Carmen Rodríguez",
    location: "Valencia",
    testimonial:
      "El aroma natural de estos productos es simplemente divino. Me encanta saber exactamente qué estoy aplicando en mi piel.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
   
    <div
      className="w-full p-6 mx-auto mb-32 flex flex-col justify-center items-center bg-gradient-to-r from-[#F8F9FA] to-[#E6F2ED]"
      role="region"
      aria-labelledby="testimonial-heading"
    >
      <h2
        id="testimonial-heading"
        className="text-2xl font-semibold text-[#2D6A4F] mb-6"
      >
        Lo que dicen nuestros clientes
      </h2>

      
      <figure className="bg-[#FFFFFF] rounded-3xl shadow-md p-6 mb-6 transition-opacity duration-300 max-w-[600px]">
        <blockquote className="mb-4 italic text-[#5D534B]">
          “{testimonials[currentIndex].testimonial}”
        </blockquote>
        <figcaption className="flex items-center">
          <div
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
            aria-hidden="true"
          >
            {testimonials[currentIndex].name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium text-[#2D6A4F]">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-[#8A817C] text-sm">
              {testimonials[currentIndex].location}
            </p>
          </div>
        </figcaption>
      </figure>

      
      <div className="flex justify-center space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] ${
              currentIndex === index ? "bg-[#2D6A4F]" : "bg-gray-300"
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
