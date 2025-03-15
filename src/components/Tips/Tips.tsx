import { newslist } from "../Noticias/News";

const Tips: React.FC = () => {
  const firstNews = newslist[2];

  return (
    <div
      className="container mx-auto px-6 py-8 "
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="mx-auto sm:mx-20 mt-4 lg:mt-32 text-[#5D534B] flex flex-col items-center">
        <img
          src="public\tips\tip1.webp"
          alt={firstNews.imgdescription}
          className="rounded-3xl w-full max-w-4xl object-cover shadow-lg "
          loading="lazy"
        />

        <h2 className="text-3xl sm:text-5xl font-bold py-6 text-[#2D6A4F] text-center leading-tight">
          Errores que Dañan tu Piel: Soluciones Naturales para un Cutis
          Saludable
        </h2>

        <main className="text-lg text-justify leading-relaxed ">
          <p>
            La piel es nuestro órgano más grande y nuestra principal defensa. A
            menudo cometemos errores en nuestras rutinas diarias que pueden
            dañarla sin darnos cuenta. Descubre los hábitos más perjudiciales y
            cómo los cosméticos naturales orgánicos pueden ayudarte a
            corregirlos.
          </p>

          {[
            {
              title: "No Conocer tu Tipo de Piel 🔍",
              subtitle: "La base de todo cuidado efectivo",
              text: "Usar productos sin conocer tu tipo de piel es como medicar sin diagnóstico. Cada tipo (grasa, seca, mixta o sensible) necesita ingredientes específicos y evitar otros que podrían empeorar su condición.",
              alternative:
                "Los cosméticos naturales orgánicos suelen ser más respetuosos con todos los tipos de piel. Sus ingredientes botánicos trabajan en armonía con nuestra fisiología, sin los químicos agresivos que pueden desequilibrar la piel sensible o reactiva.",
            },
            {
              title: "Errores en la Limpieza Facial 🧼",
              subtitle: "Una limpieza inadecuada arruina todo",
              text: "Sin una buena limpieza, los poros se obstruyen y los productos que apliques después no funcionarán correctamente. La acumulación de impurezas provoca puntos negros, acné y un envejecimiento prematuro por la contaminación ambiental.",
              alternative:
                "Los limpiadores naturales con aceites vegetales, arcillas y extractos de plantas eliminan impurezas sin destruir la barrera protectora natural de la piel. A diferencia de los limpiadores con sulfatos, no provocan sequedad ni irritación.",
            },
            {
              title: "Olvidar la Protección Solar 🌞",
              subtitle: "El error que más envejece tu piel",
              text: "No usar protector solar diariamente es quizás el error más grave en el cuidado facial. Los rayos UV causan envejecimiento prematuro, manchas y aumentan el riesgo de cáncer de piel, incluso en días nublados o dentro de casa.",
              alternative:
                "Actualmente existen protectores solares naturales con SPF50 que usan filtros minerales como el óxido de zinc. Estos crean una barrera física efectiva y suelen incluir antioxidantes que combaten el daño oxidativo adicional causado por el sol.",
            },
            {
              title: "Usar Demasiados Productos ❌",
              subtitle: "Menos es más para tu piel",
              text: "Aplicar muchos productos simultáneamente puede irritar la piel y dificultar identificar qué te está causando reacciones. Las rutinas excesivamente complicadas suelen hacer más daño que bien.",
              alternative:
                "La cosmética natural apuesta por productos multifuncionales con ingredientes activos concentrados. Un buen aceite facial orgánico puede hidratar, nutrir y aportar antioxidantes a la vez, simplificando tu rutina.",
            },
            {
              title: "Descuidar la Hidratación 💧",
              subtitle: "La deshidratación afecta a todos los tipos de piel",
              text: "Incluso las pieles grasas necesitan hidratación. La falta de agua puede causar tirantez, descamación y paradójicamente, más producción de grasa como mecanismo de compensación.",
              alternative:
                "Los hidratantes naturales con aloe vera, aceites vegetales de calidad o ácido hialurónico de origen natural proporcionan hidratación profunda sin ocluir los poros, reforzando la barrera cutánea natural.",
            },
            {
              title: "No Desmaquillarse Antes de Dormir 🌙",
              subtitle: "Un hábito destructivo",
              text: "Dormir con maquillaje obstruye los poros, impide la regeneración nocturna de la piel y acelera el envejecimiento. La piel necesita respirar y repararse durante la noche, algo imposible si está cubierta de productos.",
              alternative:
                "Los aceites desmaquillantes naturales como el de jojoba o argán disuelven incluso el maquillaje waterproof sin frotar. Son perfectos para una limpieza profunda que respeta el manto hidrolipídico de la piel.",
            },
            {
              title: "Exfoliar en Exceso ⚠️",
              subtitle: "Demasiado de algo bueno",
              text: "La sobre-exfoliación daña la barrera cutánea causando sensibilidad, enrojecimiento y descamación. Muchas personas exfolian demasiado buscando una piel perfecta, consiguiendo el efecto contrario.",
              alternative:
                "Los exfoliantes orgánicos con ingredientes como azúcar, café o enzimas de frutas eliminan células muertas sin microlesiones. Una exfoliación semanal suele ser suficiente para la mayoría de personas.",
            },
            {
              title: "No Leer las Etiquetas 🏷️",
              subtitle: "Lo que no sabes puede dañarte",
              text: "Muchos productos convencionales contienen parabenos, ftalatos y sulfatos que pueden causar sensibilización o alteraciones hormonales. La piel absorbe estos químicos, permitiéndoles entrar en el torrente sanguíneo.",
              alternative:
                "La cosmética orgánica certificada se caracteriza por su transparencia, evitando químicos sintéticos potencialmente dañinos y ofreciendo listas de ingredientes comprensibles, permitiendo decisiones informadas sobre lo que aplicas en tu piel.",
            },
          ].map((item, index) => (
            <section
              key={index}
              className="pt-8 border-b border-[#EDE0D4] pb-6"
            >
              <h3 className="text-2xl font-bold text-[#2D6A4F]">
                {item.title}
              </h3>
              <p className="pt-2 font-medium">{item.subtitle}</p>
              <p className="pt-2">{item.text}</p>
              <p className="pt-2 font-medium">La alternativa natural</p>
              <p>{item.alternative}</p>
            </section>
          ))}

          <section className="pt-8 text-center">
            <h3 className="text-2xl font-bold text-[#2D6A4F]">
              Conclusión: Por una Belleza Natural Consciente 🌱
            </h3>
            <p className="pt-4 text-justify">
              Cuidar nuestra piel con productos naturales orgánicos no solo
              mejora su salud y apariencia, sino que representa una elección
              respetuosa con nuestro cuerpo y el medio ambiente. Conocer los
              errores comunes y cómo evitarlos con alternativas naturales es el
              primer paso hacia una piel radiante y saludable. La verdadera
              belleza comienza con decisiones informadas y hábitos conscientes
              de cuidado personal.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Tips;
