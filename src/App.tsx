import { CartProvider } from "./context/CartContext";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import TipsPage from "./Pages/TipsPage";
import ScrollToTop from "./components/ScrollToTop";
import AloeVeraTips from "./components/Tips/AloeVeraTips";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog/1" element={<TipsPage />} />
          <Route path="blog/2" element={<AloeVeraTips />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
