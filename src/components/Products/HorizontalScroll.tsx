import React from "react";

interface ButtonConfig {
  label: string;
  onClick: () => void;
  category: string | null;
}

interface HorizontalScrollProps {
  buttons: ButtonConfig[];
  selectedCategory: string | null;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  buttons,
  selectedCategory,
}) => {
  return (
    <div>
      <p className="text-[#2D6A4F] font-bold text-2xl md:text-3xl pt-8 pb-4">
        Los más vendidos
      </p>
      <hr className="bg-[#52B788] w-full h-[1px] mb-4" />

      <nav className="hide-scrollbar" role="tablist">
        <div className="inline-flex gap-3 md:gap-4 min-w-max">
          {buttons.map((button, index) => (
            <button
              aria-label={button.label}
              key={index}
              onClick={button.onClick}
              className={`
                text-sm md:text-base px-4 py-2 rounded-full font-semibold transition-all duration-300 transform 
                focus:-translate-y-1.5 focus:bg-[#2D6A4F]
                ${
                  selectedCategory === button.category
                    ? "bg-[#2D6A4F] text-white"
                    : "bg-[#FFFFFF] text-[#5D534B] hover:bg-[#2D6A4F] border border-[#E9ECEF] hover:text-white"
                }
              `}
              aria-selected={selectedCategory === button.category} // Usamos un valor booleano en aria-selected
              role="tab"
              aria-controls={`tabpanel-${button.category || "all"}`} // Identificador correcto
            >
              {button.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HorizontalScroll;
