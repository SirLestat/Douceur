import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { cart } = useCart();

  const totalItems = cart.length;
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div
      className={`navbar bg-[#F5F6F3]/50 ${
        isScrolled
          ? "sm:bg-[#2E6B34] sm:text-white"
          : "bg-transparent text-black"
      } w-full text-black fixed z-50 backdrop-blur-sm top-0 mx-auto`}
    >
      {/* Menú móvil y marca */}
      <div className="navbar-start">
        {/* Dropdown solo en móvil */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Productos</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
          </ul>
        </div>

        {/* Marca - Visible siempre */}
        <div className="flex items-center">
          <a className="btn btn-ghost text-2xl md:text-4xl pl-2 hover:bg-transparent">
            <img
              src="src\assets\hoja3.png"
              alt="Logo hoja verde"
              className="w-[4vh] h-[4vh] "
              loading="lazy"
            />
            Douceur
          </a>
        </div>
      </div>

      {/* Menú desktop y iconos */}
      <div className="navbar-end flex">
        {/* Links visibles solo en desktop */}
        <div className="hidden md:flex items-center gap-x-2 pr-8 text-xl ">
          <a
            className={`hover:bg-black/20 sm:hover:bg-[#2E6B34] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[black]"
            }`}
          >
            Inicio
          </a>
          <a
            className={`hover:bg-black/20 sm:hover:bg-[#2E6B34] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[black]"
            }`}
          >
            Productos
          </a>
          <a
            className={`hover:bg-black/20 sm:hover:bg-[#2E6B34] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[black]"
            }`}
          >
            Nosotros
          </a>
        </div>

        <button
          className={`btn btn-ghost btn-circle sm:hover:bg-[#2E6B34] sm:hover:text-white ${
            isScrolled && "sm:hover:bg-[black]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isScrolled && "sm:text-white "}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle sm:hover:bg-[#2E6B34] sm:hover:text-white ${
              isScrolled && "sm:hover:bg-[black]"
            }`}
          >
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6  ${isScrolled && "sm:text-white"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="badge badge-sm indicator-item bg-[#ffffff] text-black">
                {totalItems}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-normal dropdown-content bg-[#F5F6F3] z-[1] mt-3 w-52 shadow border-2 border-[#2E6B34] rounded-2xl"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-[#000000]">
                {totalItems} Productos
              </span>
              <div>
                {cart.map((item, index) => (
                  <div>
                    <p key={index} className="text-black text-sm">
                      {item.name} - ${item.price}
                      
                    </p>
                    <br />
                  </div>
                ))}
              </div>
              <span className="text-[#000000]">Subtotal: ${subtotal}</span>
              <div className="card-actions">
                <button className="btn btn-block bg-[#9B644C] text-white hover:bg-[#523528]">
                  Ver Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
