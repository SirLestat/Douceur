import { newslist } from "../Noticias/News";
import NewsCarousel from "../Noticias/NewsCarousel";

const CocoTips: React.FC = () => {
  const firstNews = newslist[2];

  return (
    <div
      className="container mx-auto px-6 py-8"
      data-aos="fade-left"
      data-aos-duration="200"
    >
      <div className="mx-auto sm:mx-20 mt-4 lg:mt-16 text-[#5D534B] flex flex-col items-center">
        <img
          src="/tips/coco.webp"
          alt={firstNews.imgdescription}
          className="rounded-3xl w-full max-w-4xl object-cover shadow-lg"
          loading="lazy"
        />

        <h2 className="text-3xl sm:text-5xl font-bold py-8 text-[#2D6A4F] text-center leading-tight">
          El Poder del Coco para tu Piel: Beneficios Científicos y Naturales 🌴
        </h2>

        <main className="text-lg text-justify leading-relaxed">
          <p>
            El coco, más que una fruta tropical deliciosa, es un tesoro natural
            para el cuidado de la piel. Su aceite, reconocido por la ciencia,
            contiene propiedades únicas que hidratan, protegen y regeneran.
            Descubre cómo este ingrediente puede transformar tu rutina de
            belleza.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8 pb-4">
            ¿Qué hace especial al Aceite de Coco? 🌱
          </h3>
          <p>
            El aceite de coco es rico en ácidos grasos saturados como el ácido
            láurico, conocido por sus propiedades antibacterianas y
            antiinflamatorias. Ayuda a proteger la piel contra microorganismos
            dañinos y reduce irritaciones, fortaleciendo la barrera cutánea.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8 pb-4">
            Hidratación profunda 💧
          </h3>
          <p>
            Este aceite actúa como un emoliente natural, reteniendo la humedad y
            mejorando la textura de pieles secas. Además, estimula la producción
            de colágeno y elastina, aumentando la elasticidad y reduciendo el
            riesgo de arrugas.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8 pb-4">
            Acción antioxidante ✨
          </h3>
          <p>
            El coco es rico en vitamina E, un antioxidante que combate los
            radicales libres responsables del envejecimiento prematuro. Esto
            ayuda a mantener una piel radiante, protegida contra factores
            externos como contaminación y estrés ambiental.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-16 pb-4">
            🌿 Ideal para Problemas Cutáneos
          </h3>
          <p>
            El aceite de coco es un remedio natural para condiciones como el
            eczema, la dermatitis atópica y el acné. Sus propiedades
            antimicrobianas alivian inflamaciones, mientras que su acción
            calmante reduce la picazón y acelera la recuperación de la piel.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-16 pb-4">
            ✅ ¿Cómo usarlo correctamente?
          </h3>
          <p>Para aprovechar sus beneficios:</p>
          <ul className="list-disc pl-8">
            <li>Aplica sobre piel limpia y seca.</li>
            <li>Usa pequeñas cantidades para evitar saturar los poros.</li>
            <li>Realiza una prueba de alergia si tienes piel sensible.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-16 pb-4">
            🌴 Conclusión: Un Aliado Natural para tu Piel
          </h3>
          <p>
            El aceite de coco es mucho más que un hidratante; es una solución
            integral para proteger, regenerar y embellecer tu piel. Al incluirlo
            en tu rutina, estás eligiendo un ingrediente natural respaldado por
            la ciencia y respetuoso con el medio ambiente. ¡Tu piel merece el
            poder del coco! 🥥✨
          </p>
        </main>
      </div>
      <NewsCarousel />
    </div>
  );
};

export default CocoTips;
