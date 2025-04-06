// Crea un nuevo componente ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Efecto suave como deslizar 
    });
  }, [pathname]); // Se activa cada vez que cambia la URL

  return null; 
};

export default ScrollToTop;
