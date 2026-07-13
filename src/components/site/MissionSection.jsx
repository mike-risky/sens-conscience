import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

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
      <div className="w-px h-10 bg-[#DED8CE] mx-auto mb-5" />
      <h3 className="font-heading text-xl md:text-2xl text-[#292824] mb-3">{pillar.title}</h3>
      <p className="font-body text-sm text-[#6E6A62] leading-relaxed">{pillar.text}</p>
    </div>
  );
}

export default function MissionSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-32 md:py-48 bg-[#EEE9E0]/40">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Ma mission
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-8">
            Vous aider à retrouver votre capacité d'agir
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Vous aider à retrouver votre axe, vos ressources et votre capacité à faire des choix cohérents avec la personne que vous êtes aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <PillarCard key={i} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}