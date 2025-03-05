import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.length;
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="navbar bg-[#F5F6F3]/50 md:bg-transparent w-full md:w-11/12 text-black fixed md:absolute z-50 backdrop-blur-sm md:backdrop-blur-none top-0 md:top-20 md:left-1/2 md:-translate-x-1/2 mx-auto">
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
          <a className="btn btn-ghost text-2xl md:text-4xl pl-2 hover:bg-transparent md:text-white">
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
        <div className="hidden md:flex items-center gap-x-2 pr-8 text-2xl font-semibold text-white">
          <a className="hover:bg-black/20 px-4 py-2 rounded-full cursor-pointer">
            Inicio
          </a>
          <a className="hover:bg-black/20 px-4 py-2 rounded-full cursor-pointer">
            Productos
          </a>
          <a className="hover:bg-black/20 px-4 py-2 rounded-full cursor-pointer">
            Nosotros
          </a>
        </div>

        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:text-white"
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
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:text-white"
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
              <span className="badge badge-sm indicator-item bg-[#009688] text-white">
                {totalItems}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-[#F5F6F3] z-[1] mt-3 w-52 shadow border-2 border-[#8B9D83] rounded-2xl"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-[#000000]">
                {totalItems} Productos
              </span>
              <span className="text-[#000000]">Subtotal: ${subtotal}</span>
              <div className="card-actions">
                <button className="btn btn-block bg-[#8B9D83] text-white hover:bg-[#5D6D56]">
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
