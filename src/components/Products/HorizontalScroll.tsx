// En HorizontalScroll.tsx
interface ButtonConfig {
  label: string;
  onClick: () => void;
  category?: string | null; // Nueva prop para comparar
}

interface HorizontalScrollProps {
  buttons: ButtonConfig[];
  selectedCategory: string | null; // Recibe la categoría seleccionada
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  buttons,
  selectedCategory,
}) => {
  return (
    <div className="px-6 md:px-0">
      <p className="text-black font-bold text-3xl pt-8">Los más vendidos</p>
      <div className="overflow-x-auto scroll-container whitespace-nowrap pt-4 hide-scrollbar">
        <div className="inline-flex gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`
            btn2 font-normal text-sm
            transform transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
            active:translate-y-0
            ${
              selectedCategory === button.category
                ? "-translate-y-1 shadow-lg ring-2 ring-[#8B9D83]"
                : "translate-y-0 shadow-md"
            }
          `}
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
