// Crea un nuevo componente ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Efecto suave como deslizar un dedo
    });
  }, [pathname]); // Se activa cada vez que cambia la URL

  return null; // No renderiza nada, es un componente fantasma
};

export default ScrollToTop;
