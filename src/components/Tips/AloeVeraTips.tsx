import { newslist } from "../Noticias/News";
import NewsCarousel from "../Noticias/NewsCarousel";

const AloeVeraTips: React.FC = () => {
  const firstNews = newslist[1];

  return (
    <div
      className="container mx-auto px-6 py-8"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="mx-auto sm:mx-20 mt-4 lg:mt-16 text-[#5D534B] flex flex-col items-center">
        <img
          src="/tips/aloe.webp"
          alt={firstNews.imgdescription}
          className="rounded-3xl w-full max-w-4xl object-cover shadow-lg"
          loading="lazy"
        />

        <h2 className="text-3xl sm:text-5xl font-bold py-8 text-[#2D6A4F] text-center leading-tight">
          El Poder Mágico del Aloe Vera para tu Piel ✨
        </h2>

        <main className="text-lg text-justify leading-relaxed">
          <p>
            ¿Sabías que el aloe vera es uno de los ingredientes más poderosos en
            cosmética natural? ¡Esta planta increíble puede transformar tu
            rutina de belleza! Descubre todo sobre ella en esta mini-guía.
          </p>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8 pb-4">
            ¿Qué hace tan especial al Aloe Vera? 🌱
          </h3>
          <p>
            El aloe vera no es solo una planta bonita - ¡es un auténtico tesoro
            natural! Este superhéroe vegetal contiene vitaminas, minerales y
            antioxidantes que tu piel amará desde la primera aplicación.
          </p>

          {/* Imagen placeholder */}
          <div className="pt-8  grid lg:grid-cols-2 gap-y-8">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/tips/aloe1.avif"
                alt="maceta con planta de savila"
                width="1500px"
                height="1000px"
                loading="lazy"
                className="rounded-3xl w-[30rem] h-auto"
              />
            </div>

            <div className="flex flex-col justify-center gap-4 mx-auto">
              <h3 className="text-2xl font-bold text-[#2D6A4F] ">
                Beneficios rápidos que te encantarán:
              </h3>
              <ul className="text-start ">
                <li className="pb-4">💧 Hidrata sin dejar sensación grasa</li>
                <li className="pb-4">
                  🔥 Calma quemaduras y picaduras al instante
                </li>
                <li className="pb-4">
                  ✨ Previene el envejecimiento prematuro
                </li>
                <li className="pb-4">
                  🧴 Perfecto para TODOS los tipos de piel
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-16">
            Usos increíbles que no conocías 💚
          </h3>

          {/* Imagen placeholder */}
          <div className="pt-8  grid lg:grid-cols-2  justify-between">
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl font-semibold text-[#2D6A4F] ">
                Para pieles secas = ¡Adiós sequedad!
              </h4>
              <p>
                El aloe tiene una capacidad asombrosa para retener agua, lo que
                lo hace ideal si tu piel parece un desierto. ¡La hidratación
                dura todo el día!
              </p>
              <h4 className="text-xl font-semibold text-[#2D6A4F] pt-8 ">
                Para limpiar tu rostro = ¡Piel purificada!
              </h4>
              <p>
                ¿Cansada de limpiadores que resecan? El aloe limpia
                profundamente pero con suavidad, dejando tu piel fresca y sin
                esa horrible sensación de tirantez.
              </p>

              <h4 className="text-xl font-semibold text-[#2D6A4F] pt-8">
                Para después del sol = ¡Salvador total!
              </h4>
              <p>
                ¿Te has pasado con el sol? El aloe es EL remedio definitivo para
                calmar, refrescar y ayudar a reparar la piel después de la
                exposición solar.
              </p>
            </div>

            <div className="grid justify-center items-center pt-8">
              <img
                src="/tips/aloe2.avif"
                alt="mujer en spa con tratamiento de savila"
                width="1500px"
                height="1000px"
                loading="lazy"
                className="rounded-3xl w-[30rem] h-auto"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8">
            Hacks de belleza con Aloe Vera 🌟
          </h3>

          <section className="pt-8 border-b border-[#EDE0D4] pb-6">
            <h3 className="text-2xl font-bold text-[#2D6A4F] pb-4">
              #1: Mascarilla express de 5 minutos
            </h3>
            <p>
              Aplica gel de aloe puro en todo tu rostro y déjalo actuar mientras
              te cepillas los dientes. ¡Piel hidratada en tiempo récord!
            </p>

            <div className="pt-8 text-center justify-center flex">
              <img
                src="/tips/aloe3.avif"
                alt="mujer aplicandose gel de savila"
                className="rounded-3xl md:w-4/6 "
                width="1500px"
                height="1000px"
                loading="lazy"
              />
            </div>
          </section>

          <section className="pt-8 border-b border-[#EDE0D4] pb-6">
            <h3 className="text-2xl font-bold text-[#2D6A4F]">
              #2: Boost de hidratación para tu crema
            </h3>
            <p>
              Mezcla unas gotas de gel de aloe con tu crema habitual para
              potenciar sus efectos. ¡Tu piel te lo agradecerá!
            </p>
          </section>

          <section className="pt-8 border-b border-[#EDE0D4] pb-6">
            <h3 className="text-2xl font-bold text-[#2D6A4F]">
              #3: Calmante para después del afeitado/depilación
            </h3>
            <p>
              Aplica directamente sobre la piel después de depilarte para
              reducir irritación y rojeces. ¡Funciona como por arte de magia!
            </p>
          </section>

          <h3 className="text-2xl font-bold text-[#2D6A4F] pt-8">
            Por qué elegir cosmética natural con Aloe 💯
          </h3>
          <ul className="list-disc pl-8">
            <li>
              Tu piel absorbe lo que le pones - ¿prefieres químicos o plantas?
              🤔
            </li>
            <li>Menos efectos secundarios = menos dramas con tu piel 🙌</li>
            <li>Aromas naturales que huelen DE VERDAD a naturaleza 🌿</li>
            <li>¡El planeta también te lo agradece! 🌎</li>
          </ul>

          {/* Imagen placeholder */}
          <div className="pt-8 text-center flex justify-center">
            <img
              src="/tips/aloe4.avif"
              alt=""
              className="rounded-3xl md:w-4/6 "
            />
          </div>

          <section className="pt-8 text-center">
            <h3 className="text-2xl font-bold text-[#2D6A4F]">
              ¿Lo probamos? 🔥
            </h3>
            <p className="pt-4">
              No esperes más para darle a tu piel el poder del aloe vera. Este
              ingrediente mágico puede revolucionar completamente tu rutina de
              belleza con resultados visibles desde la primera aplicación.
            </p>
          </section>

          <section className="pt-8 text-center">
            <h3 className="text-2xl font-bold text-[#2D6A4F]">
              ¿Ya usas aloe vera en tu rutina? ¡Cuéntanos tu experiencia en los
              comentarios!
            </h3>
            <p className="pt-4">
              Y si nunca lo has probado, ¿a qué estás esperando? Tu piel se
              merece lo mejor que la naturaleza puede ofrecer.
            </p>
          </section>
        </main>
      </div>
      <NewsCarousel />
    </div>
  );
};

export default AloeVeraTips;
