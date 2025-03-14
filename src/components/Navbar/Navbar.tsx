import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, removeFromCart, adjustQuantity, totalItems, subtotal } =
    useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar bg-[#ffffff] border-b-[#E6F2ED] border-[2px] w-full text-[#5D534B] fixed z-50 backdrop-blur-sm top-0 mx-auto font-medium`}
    >
      <div className="navbar-start">
        {/* Dropdown mobile */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              Productos
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="btn btn-ghost text-2xl md:text-4xl pl-2 hover:bg-transparent"
          >
            <img
              src="src/assets/hoja3.png"
              alt="Logo Douceur"
              className="w-[4vh] h-[4vh]"
              loading="lazy"
            />
            Douceur
          </Link>
        </div>
      </div>

      <div className="navbar-end flex">
        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-x-2 pr-8 text-xl">
          <Link
            to="/"
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Inicio
          </Link>
          <a
            
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full cursor-pointer ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Productos
          </a>
          <Link
            to="/blog"
            className={`btn2 hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full ${
              isScrolled && "sm:hover:bg-[#2D6A4F]"
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Carrito */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box max-w-md">
            {cart.length === 0 ? (
              <div className="text-center p-4">
                <h3 className="font-bold text-lg mb-2">Carrito vacío</h3>
                <p className="text-[#5D534B]">
                  Parece que aún no has elegido tus productos favoritos. Explora
                  nuestra tienda y encuentra el cuidado ideal para tu piel. 💚
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-lg mb-4">Tu selección</h3>
                <hr className="border-[#E6F2ED] mb-4" />

                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between mb-4 p-2  rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-auto rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-medium text-sm">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-[#5D534B]">
                          ${item.product.price} MXN c/u
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#E6F2ED] rounded-full">
                        <button
                          onClick={() => adjustQuantity(item.product.id, -1)}
                          className="px-3 py-1 hover:bg-[#2D6A4F] hover:text-white rounded-l-full transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          -
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => adjustQuantity(item.product.id, 1)}
                          className="px-3 py-1 hover:bg-[#2D6A4F] hover:text-white rounded-r-full transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                      <FiTrash2
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-2 text-red-500 cursor-pointer hover:scale-110 transition-transform"
                        aria-label="Eliminar producto"
                      />
                    </div>
                  </div>
                ))}

                <hr className="border-[#E6F2ED] my-4" />
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-lg text-[#2D6A4F]">
                    ${subtotal} MXN
                  </span>
                </div>
                <button className="btn2 w-full bg-[#2D6A4F] text-white hover:bg-[#245C45]">
                  Finalizar compra
                </button>
              </div>
            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* Botón del carrito */}
        <button
          onClick={() =>
            (
              document.getElementById("my_modal_2") as HTMLDialogElement
            ).showModal()
          }
          className="relative btn btn-ghost btn-circle hover:bg-[#2D6A4F] hover:text-white mx-2"
          aria-label="Ver carrito de compras"
        >
          <LiaShoppingCartSolid className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 badge badge-sm bg-[#5D534B] border-white text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
