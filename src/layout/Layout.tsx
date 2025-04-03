import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Reinicia el scroll
    window.scrollTo(0, 0);
  }, [location.key]); // location.key cambia con cada navegación

  return (
    <div className="w-full min-h-screen pt-12 md:pt-20 lg:pt-0">
      <Navbar />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
