// HorizontalScroll.tsx
interface ButtonConfig {
  label: string;
  onClick: () => void;
  category: string | null; // Asegurar que siempre existe
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
      <p
        
        className="text-[#2D6A4F] font-bold text-2xl md:text-3xl pt-8 pb-4"
      >
        Los más vendidos
      </p>
      <hr className="bg-[#52B788] w-full h-[1px] mb-4" />

      <div className=" hide-scrollbar">
        <div className="inline-flex gap-3 md:gap-4 min-w-max ">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`
                text-sm md:text-base px-4 py-2 rounded-full
                font-semibold transition-all duration-300
                transform focus:-translate-y-1.5
                focus:bg-[#2D6A4F]
                ${
                  selectedCategory === button.category
                    ? "bg-[#2D6A4F] text-white"
                    : "bg-[#FFFFFF] text-[#5D534B] hover:bg-[#2D6A4F] border-[#E9ECEF] border hover:text-white"
                }
              `}
              aria-current={
                selectedCategory === button.category ? "true" : "false"
              }
              role="tab"
              aria-controls={`tabpanel-${button.category}`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
