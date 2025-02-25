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

    <div className="pt-16">
      <p className="text-black font-bold text-3xl">Los más vendidos</p>
      <div className="overflow-x-auto scroll-container whitespace-nowrap pt-4 hide-scrollbar">
      
      <div className="inline-flex gap-4  ">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`min-w-[120px] px-6 py-2 rounded-[25px] transition-all duration-300 hover:-translate-y-2
              flex-shrink-0 text-sm font-medium shadow-sm ${
                selectedCategory === button.category // Comparación directa
                  ? "bg-[#6B7B64] text-white" // Estilo activo
                  : "bg-[#8B9D83] text-white hover:bg-[#7A8B73]" // Estilo normal
              }`}
            onClick={button.onClick}
            type="button"
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
