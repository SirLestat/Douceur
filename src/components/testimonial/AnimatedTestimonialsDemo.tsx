import { AnimatedTestimonials } from "./AnimatedTestimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Estos productos cambiaron completamente mi rutina de cuidado facial. Mi piel se siente más hidratada y radiante.",
      name: "María García",
      designation: "Madrid",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
