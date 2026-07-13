import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const MISSION_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/4d1d7fe48_generated_image.png";

const pillars = [
  {
    title: "Clarté",
    text: "Comprendre ce que vous vivez et identifier ce qui vous bloque.",
  },
  {
    title: "Capacité d'agir",
    text: "Retrouver les ressources nécessaires pour avancer concrètement.",
  },
  {
    title: "Cohérence",
    text: "Faire des choix davantage alignés avec vos besoins et vos valeurs.",
  },
];

function PillarCard({ pillar, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-px h-10 bg-[#E8D5BA] mx-auto mb-5" />
      <h3 className="font-heading text-xl md:text-2xl text-[#2C2C2C] mb-3">{pillar.title}</h3>
      <p className="font-body text-sm text-[#7A6952] leading-relaxed">{pillar.text}</p>
    </div>
  );
}

export default function MissionSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-32 md:py-48 bg-[#F7E9D4]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <img
              src={MISSION_IMG}
              alt="Nature morte chaleureuse au soleil du matin près de Sion — la clarté retrouvée"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-lg object-cover aspect-[4/5] shadow-lg shadow-[#3A2E22]/10"
            />
          </div>

          <div>
            <div
              ref={ref}
              className={`mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-body text-xs tracking-[0.2em] text-[#D2691E] uppercase mb-4">
                Ma mission
              </p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-6">
                Vous aider à retrouver votre capacité d'agir
              </h2>
              <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl">
                Vous aider à retrouver votre axe, vos ressources et votre capacité à faire des choix cohérents avec la personne que vous êtes aujourd'hui.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {pillars.map((p, i) => (
                <PillarCard key={i} pillar={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}