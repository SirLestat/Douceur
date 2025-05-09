import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 10) - 10;
  };

  return (
    <div className="container mx-auto py-20">
      <p className="text-[#2D6A4F] pb-12 text-3xl font-bold text-center md:text-start mx-6">
        Lo que dicen nuestros clientes
      </p>
      <div className="mx-auto max-w-full px-6  font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="relative h-48 w-48 md:h-64 md:w-64 mx-auto">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src || "/placeholder.svg"}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F]">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-[#8A817C] ">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg text-[#5D534B] max-h-20 italic">
                  <RiDoubleQuotesL className="text-[#C76A53] absolute top-[320px] md:top-[68px] lg:top-[65px]" />
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
            <div className="flex justify-end md:justify-start gap-4 pt-12 md:pt-0 text-justify">
              <button
                onClick={handlePrev}
                aria-label="Ver testimonio anterior"
                disabled={active === 0}
                aria-disabled={active === 0} // Si estamos en el primer testimonio
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-[#2D6A4F] text-[#2D6A4F] hover:text-[#FFFFFF] border-[#2D6A4F] border transition-transform duration-100 ease-in-out active:scale-90 ${
                  active === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <IconArrowLeft className="h-5 w-5  " />
              </button>
              <button
                onClick={handleNext}
                aria-label="Ver siguiente testimonio"
                disabled={active === testimonials.length - 1}
                aria-disabled={active === testimonials.length - 1} // Si estamos en el último testimonio
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-[#2D6A4F] text-[#2D6A4F] hover:text-[#FFFFFF] border-[#2D6A4F] border transition-transform duration-100 ease-in-out active:scale-90 ${
                  active === testimonials.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
