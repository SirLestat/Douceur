import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  options?: scrollReveal.ScrollRevealObjectOptions;
}

const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  options,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        delay: 200,
        distance: "50px",
        origin: "bottom",
        duration: 1000,
        easing: "ease-in-out",
        reset: false,
        ...options, // Opciones personalizadas
      });
    }
  }, [options]);

  return <div ref={sectionRef}>{children}</div>;
};

export default ScrollRevealWrapper;
