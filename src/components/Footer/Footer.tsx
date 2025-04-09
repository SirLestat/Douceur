import logo from "../../assets/hoja3.webp";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 px-6 container mx-auto">
      <footer className="bg-[#F2F7F2] p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Logo hoja verde"
            className="w-[4vh] h-[4vh] mb-2"
            loading="lazy"
          />
          <p className="text-[#2D6A4F] text-3xl font-bold">Douceur</p>
          <p className="text-[#5D534B] font-normal">Douceur Industries Ltd.</p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <a
            href="https://portfolio-alejandro-santiago.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2D6A4F] font-medium underline"
          >
            Ver Portafolio
          </a>

          <a
            href="https://www.linkedin.com/in/alejandrosantiagodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2D6A4F] hover:text-[#3D8B43] text-2xl mt-2 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>

      {/* Footer final */}
      <div className="mt-6 border-t border-[#D1E7D6] py-4 text-[#5D534B] text-sm text-center flex flex-col md:flex-row justify-center items-center gap-2">
        <p>© 2025 Douceur — All rights reserved</p>
        <span className="hidden md:inline">|</span>
        <p className="flex items-center gap-1">
          Designed & developed by
          <a
            href="https://portfolio-alejandro-santiago.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#2D6A4F] hover:text-[#3D8B43] transition-colors"
          >
            Alejandro Santiago
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
