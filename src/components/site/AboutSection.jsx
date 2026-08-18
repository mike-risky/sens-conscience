import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const PORTRAIT_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/c434c1563_generated_2b157cf6.png";

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="a-propos" className="py-32 md:py-48 bg-[#F2EEE4]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="order-2 lg:order-1">
            <img
              src={PORTRAIT_IMG}
              alt="Nuray C. Posse, coach de vie à Sion, dans un cadre naturel et lumineux"
              loading="lazy"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-lg object-cover aspect-[3/4]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
              À propos
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-2">
              Nuray C. Posse
            </h2>
            <p className="font-body text-sm text-[#87856C] mb-8">Coach de vie à Sion</p>

            <div className="space-y-5 mb-8">
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                Je m'appelle Nuray C. Posse. Depuis plus de vingt ans, j'accompagne des êtres humains dans des moments où quelque chose ne fonctionne plus comme avant.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                En tant qu'enseignante spécialisée, médiatrice, praticienne-formatrice, coach professionnel et titulaire d'un master en sciences de l'éducation, j'ai appris à observer ce qui ne se voit pas immédiatement. Avec le temps, mes recherches, mes formations et mon expérience de vie m'ont conduite vers une conviction simple : derrière chaque difficulté se cache une logique. Rien n'apparaît par hasard.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                Au fil des années, j'ai enrichi cette approche par la philosophie, les neurosciences, la connaissance de divers fonctionnements atypiques, la métacognition, le fonctionnement du corps et les schémas du cœur.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                Mais ce qui guide mon travail ne se résume à aucun diplôme. Je m'intéresse moins à ce qui vous est arrivé qu'à l'endroit où vous avez cessé d'habiter pleinement votre propre existence.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                Je ne cherche pas à vous donner des réponses toutes faites, ni à vous convaincre d'adopter une manière de penser. Je cherche à vous aider à retrouver les vôtres. Mon rôle est d'éclairer ce qui est devenu invisible, de relier ce qui semblait épars et de vous accompagner jusqu'à ce que vous puissiez reprendre les rênes de votre vie en toute autonomie.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                J'ai moi-même cherché longtemps des réponses auprès des philosophes, des chercheurs et des sciences humaines. J'y ai trouvé des éclairages précieux, mais surtout une manière d'observer l'être humain dans toute sa complexité, sans jugement et sans recette universelle. Aujourd'hui, cette vision est devenue le cœur de mon accompagnement.
              </p>
              <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
                Je marche à vos côtés le temps nécessaire. Puis je vous laisse poursuivre votre chemin, libre, conscient et profondément vivant.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#C07847] pl-5 mb-8">
              <p className="italic text-xs text-[#2C2C2C]">
                «&nbsp;Je ne prétends pas connaître votre chemin. Je vous accompagne jusqu'à ce que vous retrouviez le vôtre.&nbsp;»
              </p>
            </blockquote>

            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-full bg-[#C07847] text-white font-body font-medium text-sm hover:bg-[#a8663a] transition-all duration-300"
            >
              Prendre contact avec moi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}