import { AnimatedTestimonials } from "./AnimatedTestimonials";
import face1 from "../../../public/testimonials/Face1.webp";
import face2 from "../../../public/testimonials/Face2.webp";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Estos productos cambiaron completamente mi rutina de cuidado facial. Mi piel se siente más hidratada y radiante.",
      name: "María García",
      designation: "Madrid",
      src: face2,
    },
    {
      quote:
        "Después de probar tantas marcas, finalmente encontré productos que respetan mi piel sensible.",
      name: "Laura Sánchez",
      designation: "Barcelona",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "El aroma natural de estos productos es simplemente divino. Me encanta saber exactamente qué estoy aplicando en mi piel.",
      name: "Carmen Rodríguez",
      designation: "México",
      src: face1,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
