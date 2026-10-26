import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const tools = [
  "Questionnement existentiel",
  "État des lieux de l'existence selon le cycle de la vie",
  "Regard systémique",
  "Philosophie appliquée au réel et stoïcisme moderne",
  "Conscience du corps",
  "Connaissance de son fonctionnement",
  "Auto-compassion",
  "Auto-hypnose et états de conscience",
  "Métacognition",
  "Marche philosophique en nature",
  "Écriture réflexive",
  "Rituels de transformation",
];

export default function OutilsSection() {
  const [ref, isVisible] = useScrollReveal();
  const [convRef, convVisible] = useScrollReveal();

  return (
    <section id="outils" className="py-28 md:py-40 bg-[#EAD9C7]/50">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#2D4A3A] uppercase mb-4">
            Mes outils
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#1F2E26] mb-4">
            Avec quoi nous cheminons
          </h2>
          <p className="font-body text-[#4E6156] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Des repères pratiques, jamais un catalogue de méthodes.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tools.map((t, i) => (
            <div
              key={i}
              className="flex items-baseline gap-3 font-body text-sm md:text-base text-[#22332B] leading-relaxed"
            >
              <span className="text-[#A34D20] shrink-0">—</span>
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div
          ref={convRef}
          className={`max-w-2xl mx-auto text-center mt-16 transition-all duration-1000 ${
            convVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-heading text-2xl md:text-3xl text-[#A34D20] mb-4">L'autonomie.</p>
          <p className="font-body text-[#4E6156] text-base md:text-lg leading-relaxed">
            Que vous retrouviez votre axe sans dépendre de l'accompagnement.
          </p>
        </div>
      </div>
    </section>
  );
}