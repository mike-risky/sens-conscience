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
    <section id="a-propos" className="py-24 md:py-36 bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="order-2 lg:order-1">
            <img
              src={PORTRAIT_IMG}
              alt="Nuray C. Posse, coach de vie à Sion, dans un cadre naturel et lumineux"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-lg object-cover aspect-[3/4]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
              À propos
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-8">
              Nuray C. Posse, coach de vie à Sion
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-body text-[#6E6A62] text-base leading-relaxed">
                Depuis plus de vingt ans, j'accompagne des personnes dans leur apprentissage, leurs relations, leurs transitions et leurs périodes de remise en question.
              </p>
              <p className="font-body text-[#6E6A62] text-base leading-relaxed">
                Mon parcours s'est construit à la croisée de l'enseignement, de la médiation, de la philosophie pratique, des neurosciences et de l'accompagnement humain.
              </p>
              <p className="font-body text-[#6E6A62] text-base leading-relaxed">
                Je ne cherche pas à imposer une réponse toute faite. Mon travail consiste à vous aider à mieux comprendre ce que vous traversez, à retrouver vos propres ressources et à identifier les possibilités d'action qui vous correspondent réellement.
              </p>
              <p className="font-body text-[#6E6A62] text-base leading-relaxed">
                Je considère chaque personne dans la globalité de son histoire et de son environnement. L'objectif n'est pas de devenir quelqu'un d'autre, mais d'habiter sa vie avec davantage de lucidité, de liberté et de cohérence.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#B49A78] pl-5 mb-8">
              <p className="font-heading italic text-lg text-[#292824]">
                «&nbsp;Retrouver son chemin ne signifie pas revenir en arrière. Cela signifie apprendre à avancer autrement.&nbsp;»
              </p>
            </blockquote>

            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-full bg-[#7C8873] text-white font-body font-medium text-sm hover:bg-[#6b7763] transition-all duration-300"
            >
              Prendre contact avec Nuray
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}