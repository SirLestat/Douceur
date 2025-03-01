// En HorizontalScroll.tsx
interface ButtonConfig {
  label: string;
  onClick: () => void;
  category?: string | null; // Nueva prop para comparar
}

interface HorizontalScrollProps {
  buttons: ButtonConfig[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ buttons }) => {
  return (
    <div>
      <p className="text-black font-bold text-3xl">Los más vendidos</p>
      <div className="overflow-x-auto scroll-container whitespace-nowrap pt-4 hide-scrollbar">
        <div className="inline-flex gap-4  ">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="btn2 font-normal text-sm"
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
