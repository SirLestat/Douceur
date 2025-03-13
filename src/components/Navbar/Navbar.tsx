import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { cart } = useCart();

  const totalItems = cart.length;
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div
      className={`navbar bg-[#ffffff] border-b-[#E6F2ED] border-[2px] w-full text-[#5D534B] fixed z-50 backdrop-blur-sm top-0 mx-auto font-medium`}
    >
      <div className="navbar-start">
        {/* Dropdown solo en mobile */}
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

      
      <div className="navbar-end flex">
        
        <div className="hidden md:flex items-center gap-x-2 pr-8 text-xl ">
          <a
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Inicio
          </a>
          <a
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Productos
          </a>
          <a
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Nosotros
          </a>
        </div>

        <button
          className={`btn btn-ghost btn-circle sm:hover:bg-[#2D6A4F] sm:hover:text-white ${
            isScrolled && "sm:hover:bg-[#2D6A4F]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 `}
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
            className={`btn btn-ghost btn-circle sm:hover:bg-[#2D6A4F] sm:hover:text-white ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 `}
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

              <span className="badge badge-sm indicator-item bg-[#2D6A4F] text-white">
                {totalItems}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-normal dropdown-content bg-[#F5F6F3] z-[1] mt-3 w-52 shadow border-2 border-[#2E6B34] rounded-2xl"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-[#5D534B]">
                {totalItems} Productos
              </span>

          
              <div className="card-actions justify-center">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn2 text-[#FFFFFF] bg-[#2D6A4F] hover:bg-[#1c4231] py-3 mt-2 px-6"
                  onClick={() =>
                    (
                      document.getElementById("my_modal_2") as HTMLDialogElement
                    ).showModal()
                  }
                >
                  Ver Carrito
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    {cart.length === 0 ? (
                      <h3 className="font-bold text-medium">
                        Parece que aún no has elegido tus productos favoritos.
                        Explora nuestra tienda y encuentra el cuidado ideal para
                        tu piel. 💚
                      </h3>
                    ) : (
                      <div>
                        <p>Mi carrito</p>
                        <hr className="h-[2px] bg-[#5D534B] mb-4"/>
                        {cart.map((item, index) => (
                          <div>
                            <p key={index} className="text-black text-sm mb-4">
                              🌱 {item.name} - ${item.price} 
                            </p>
                            
                          </div>
                        ))}
                        <hr className="h-[2px] bg-[#5D534B]"/>
                        <p className="pb-4 text-right">Total: ${subtotal} MXN</p>
                        <button className="btn2 w-full bg-[#5D534B] text-[#ffffff] hover:bg-[#3d3731]">Comprar ahora</button>
                      </div>
                    )}
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    
                  </form>
                  
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
