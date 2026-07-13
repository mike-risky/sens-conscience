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
    <section id="a-propos" className="py-32 md:py-48 bg-[#F8F6F1]">
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
              className="w-full max-w-md mx-auto lg:mx-0 rounded-lg object-cover aspect-[3/4]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
              À propos
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-10">
              Nuray C. Posse, coach de vie à Sion
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed">
                Depuis plus de vingt ans, j'accompagne des personnes dans leurs transitions et leurs périodes de remise en question, à la croisée de l'enseignement, de la médiation, de la philosophie pratique et des neurosciences.
              </p>
              <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed">
                Je ne cherche pas à imposer une réponse toute faite, mais à vous aider à mieux comprendre ce que vous traversez et à retrouver vos propres ressources.
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