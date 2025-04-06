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
          {buttons.map((button, index) => {
            const id = `tab-${button.category || "all"}`;
            const panelId = `tabpanel-${button.category || "all"}`;
            const isSelected = selectedCategory === button.category;

            return (
              <button
                key={index}
                id={id}
                onClick={button.onClick}
                role="tab"
                aria-selected={isSelected}
                aria-controls={panelId}
                aria-label={button.label}
                className={`
                  text-sm md:text-base px-4 py-2 rounded-full font-semibold transition-all duration-300 transform 
                  focus:-translate-y-1.5 focus:bg-[#2D6A4F]
                  ${
                    isSelected
                      ? "bg-[#2D6A4F] text-white"
                      : "bg-[#FFFFFF] text-[#5D534B] hover:bg-[#2D6A4F] border border-[#E9ECEF] hover:text-white"
                  }
                `}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </nav>

      
      {buttons.map((button, index) => {
        const id = `tab-${button.category || "all"}`;
        const panelId = `tabpanel-${button.category || "all"}`;
        const isSelected = selectedCategory === button.category;

        return (
          <div
            key={index}
            id={panelId}
            role="tabpanel"
            aria-labelledby={id}
            hidden={!isSelected}
          >
            
            <span className="sr-only">Contenido de {button.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScroll;
