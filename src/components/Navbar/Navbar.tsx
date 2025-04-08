import { useCart } from "../../context/CartContext";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/hoja3.webp";
import CheckoutAnimation from "./CheckoutAnimation";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { cart, removeFromCart, adjustQuantity, totalItems, subtotal } =
    useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-white border-b-2 border-[#E6F2ED] text-[#5D534B] z-50 backdrop-blur-sm font-medium flex justify-between">
      <div className="navbar-start">
        {/* Menú móvil */}
        <div className="dropdown md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul
            id="mobile-menu"
            className={`dropdown-content menu menu-md mt-3 w-52 p-2 bg-white rounded-box shadow z ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" onClick={closeMenu}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/blog/1" onClick={closeMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost text-2xl md:text-4xl flex items-center pl-2"
          aria-label="Douceur - Página de inicio"
        >
          <img
            src={logo}
            alt=""
            className="w-10 h-10"
            loading="eager"
            aria-hidden="true"
          />
          <span>Douceur</span>
        </Link>
      </div>

      {/* Menú desktop */}
      <div className="hidden md:flex navbar-end gap-x-4 pr-8 text-xl">
        <Link
          to="/"
          className="hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full"
        >
          Inicio
        </Link>
        <Link
          to="/productos"
          className="hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full"
        >
          Productos
        </Link>
        <Link
          to="/blog/1"
          className="hover:bg-black/20 sm:hover:bg-[#2D6A4F] sm:hover:text-white px-4 py-2 rounded-full"
        >
          Blog
        </Link>
      </div>

      {/* Botón carrito */}
      <button
        aria-label={`Ver carrito (${totalItems} items)`}
        onClick={() =>
          (
            document.getElementById("cart_modal") as HTMLDialogElement
          )?.showModal()
        }
        className="relative btn btn-ghost btn-circle hover:bg-[#2D6A4F] hover:text-white mx-2"
      >
        <LiaShoppingCartSolid className="w-6 h-6" aria-hidden="true" />
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 badge badge-sm bg-[#5D534B] text-white">
            {totalItems}
          </span>
        )}
      </button>

      {/* Modal carrito */}
      <dialog
        id="cart_modal"
        className="modal"
        aria-labelledby="cart-modal-title"
      >
        <div className="modal-box max-w-md relative">
          <form method="dialog">
            <button
              className="absolute right-4 top-4 text-[#5D534B] hover:text-[#2D6A4F] text-xl font-bold"
              aria-label="Cerrar carrito de compras"
            >
              ✕
            </button>
          </form>

          {cart.length === 0 ? (
            <div className="text-center p-4">
              <h3 id="cart-modal-title" className="font-bold text-lg">
                Carrito vacío
              </h3>
              <p className="text-[#5D534B]">
                Parece que aún no has elegido tus productos favoritos 😢.
                Explora nuestra tienda y encuentra el cuidado ideal para tu
                piel. 💚
              </p>
            </div>
          ) : (
            <>
              <h3 id="cart-modal-title" className="font-bold text-lg">
                Tu selección
              </h3>
              <hr className="border-[#E6F2ED] mb-4" />
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-4 p-2 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt=""
                      className="w-14 rounded-xl object-cover"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-[#5D534B]">
                        ${product.price} MXN c/u
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#ffffff] rounded-full border">
                      <button
                        onClick={() => adjustQuantity(product.id, -1)}
                        aria-label={`Reducir cantidad de ${product.name}`}
                        className="px-3 py-1 hover:bg-[#2D6A4F] hover:text-white rounded-l-full"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm" aria-live="polite">
                        {quantity}
                      </span>
                      <button
                        onClick={() => adjustQuantity(product.id, 1)}
                        aria-label={`Aumentar cantidad de ${product.name}`}
                        className="px-3 py-1 hover:bg-[#2D6A4F] hover:text-white rounded-r-full"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Eliminar ${product.name} del carrito`}
                      className="ml-2 text-red-500 hover:scale-110"
                    >
                      <FiTrash2 aria-hidden="true" />
                    </button>
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
              <div className="flex justify-center">
                <CheckoutAnimation />
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-hidden="true" className="cursor-default"></button>
        </form>
      </dialog>
    </nav>
  );
};

export default Navbar;
