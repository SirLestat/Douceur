"use client"

import { useState, useRef } from "react"


interface TestimonialProps {
  image: string
  name: string
  location: string
  testimonial: string
}

const testimonials: TestimonialProps[] = [
  {
    image: "/placeholder.svg?height=80&width=80",
    name: "María García",
    location: "Madrid",
    testimonial:
      "Estos productos cambiaron completamente mi rutina de cuidado facial. Mi piel se siente más hidratada y radiante. ¡Increíble que sean 100% naturales!",
  },
  {
    image: "/placeholder.svg?height=80&width=80",
    name: "Laura Sánchez",
    location: "Barcelona",
    testimonial:
      "Después de probar tantas marcas, finalmente encontré productos que respetan mi piel sensible. Los ingredientes orgánicos hacen toda la diferencia.",
  },
  {
    image: "/placeholder.svg?height=80&width=80",
    name: "Carmen Rodríguez",
    location: "Valencia",
    testimonial:
      "El aroma natural de estos productos es simplemente divino. Me encanta saber exactamente qué estoy aplicando en mi piel.",
  },
  {
    image: "/placeholder.svg?height=80&width=80",
    name: "Ana Martínez",
    location: "Sevilla",
    testimonial:
      "Llevo usando estos productos por más de un año y la diferencia es notable. Mi piel está más firme y luminosa que nunca.",
  },
  {
    image: "/placeholder.svg?height=80&width=80",
    name: "Elena Gómez",
    location: "Bilbao",
    testimonial:
      "Me encanta que estos productos sean respetuosos con el medio ambiente. La calidad es excepcional y los resultados hablan por sí mismos.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  // Calculate how many testimonials to show and total slides
  const itemsPerView = 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerView)

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))


    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.querySelector(".testimonial-card")?.clientWidth || 0
      const scrollPosition = ((currentIndex + 1) % testimonials.length) * (cardWidth + 16) // 16px for gap
      mobileScrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))

    // For mobile scroll
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.querySelector(".testimonial-card")?.clientWidth || 0
      const scrollPosition = ((currentIndex - 1 + testimonials.length) % testimonials.length) * (cardWidth + 16) // 16px for gap
      mobileScrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  // Calculate which testimonials to display for desktop
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerView
    return testimonials.slice(startIndex, startIndex + itemsPerView)
  }

  // Handle scroll snap on mobile
  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollPosition = mobileScrollRef.current.scrollLeft
      const cardWidth = mobileScrollRef.current.querySelector(".testimonial-card")?.clientWidth || 0
      const newIndex = Math.round(scrollPosition / (cardWidth + 16))
      if (newIndex !== currentIndex && newIndex < testimonials.length) {
        setCurrentIndex(Math.floor(newIndex / itemsPerView))
      }
    }
  }

  return (
    <div className="w-full max-w-[150vh] mx-auto relative pt-6">
      {/* Carousel container */}
      <div className="overflow-hidden py-8">
        <p className="text-black  text-3xl font-semibold pb-4">Lo que dicen nuestros clientes</p>
        {/* Mobile view (horizontally scrollable) */}
        <div
          ref={mobileScrollRef}
          className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={handleMobileScroll}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card flex-shrink-0 w-[85%] snap-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Medium view (3 cards) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="btn2 absolute -left-5 top-[190px] -translate-y-1/2 bg-[#2E6B34] hover:bg-[#2E6B34] text-white rounded-full p-2 shadow-md transition-colors duration-300 focus:outline-none z-10 hidden md:flex"
        aria-label="Testimonio anterior"
      >
       <img src="src\components\testimonial\assets\leftarrow.png" alt="flecha izquierda" className="w-6" />
      </button>

      <button

        onClick={nextSlide}
        className="btn2 absolute -right-5 top-[190px] -translate-y-1/2 bg-[#2E6B34] hover:bg-[#2E6B34] text-white rounded-full p-2 shadow-md transition-colors duration-300 focus:outline-none z-10 hidden md:flex"
        aria-label="Siguiente testimonio"
      >
        <img src="src\components\testimonial\assets\rightarrow.png" alt="flecha derecha" className="w-6" />
      </button>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 pb-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#2E6B34]" : "bg-gray-300"
            }`}
            aria-label={`Ir al grupo de testimonios ${index + 1}`}
          />
        ))}
      </div>

      
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-transform duration-300 hover:shadow-lg">
      <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-[#F5F6F3]">
        {/* Testimonial text */}
        <div className="mb-4 relative">
          <svg
            className="absolute -top-2 -left-3 w-6 h-6 text-[#2E6B34] opacity-40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 italic text-sm pl-4">{testimonial.testimonial}</p>
        </div>

        {/* Profile */}
        <div className="mt-auto flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#5D6D56]/20">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-[#5D6D56] font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500 text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

