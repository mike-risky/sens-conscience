import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Observer",
    text: "Prendre le temps de comprendre votre situation sans réduire votre expérience à un seul problème.",
  },
  {
    num: "02",
    title: "Comprendre",
    text: "Mettre en lumière les mécanismes, les besoins, les ressources et les schémas qui influencent votre quotidien.",
  },
  {
    num: "03",
    title: "Clarifier",
    text: "Retrouver une vision plus lisible de vos priorités, de vos possibilités et de la direction que vous souhaitez prendre.",
  },
  {
    num: "04",
    title: "Agir",
    text: "Transformer cette compréhension en choix et en actions concrètes, réalistes et cohérentes.",
  },
];

const domains = [
  "enseignement",
  "médiation",
  "accompagnement humain",
  "philosophie pratique",
  "neurosciences",
];

function StepCard({ step, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);
  return (
    <div
      ref={ref}
      className={`flex gap-5 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="font-heading text-3xl text-[#DED8CE] font-light shrink-0 mt-1">
        {step.num}
      </span>
      <div>
        <h3 className="font-heading text-xl text-[#292824] mb-2">{step.title}</h3>
        <p className="font-body text-sm text-[#6E6A62] leading-relaxed">{step.text}</p>
      </div>
    </div>
  );
}

export default function ApproachSection() {
  const [ref, isVisible] = useScrollReveal();
  const [credRef, credVisible] = useScrollReveal();

  return (
    <section id="approche" className="py-24 md:py-36 bg-[#F8F6F1]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Une approche globale
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Un accompagnement de vie profondément humain et personnalisé
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Chaque accompagnement commence par un état des lieux global. La personne est considérée dans son histoire, son environnement, ses relations, son fonctionnement, ses ressources et les leviers d'action disponibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        <div
          ref={credRef}
          className={`border-t border-[#DED8CE] pt-12 max-w-3xl mx-auto text-center transition-all duration-1000 ${
            credVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[#6E6A62] text-base leading-relaxed mb-6">
            Le regard de Nuray C. Posse est nourri par plus de vingt ans d'expérience dans les domaines suivants :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {domains.map((d, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#EEE9E0] font-body text-sm text-[#6E6A62]"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="font-body text-[#6E6A62] text-sm leading-relaxed max-w-xl mx-auto">
            Cette expérience permet de rendre visibles les ressources et les possibilités d'action qui deviennent parfois inaccessibles dans les périodes de brouillard.
          </p>
        </div>
      </div>
    </section>
  );
}