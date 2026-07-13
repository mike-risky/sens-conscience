import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Observer",
    text: "Comprendre votre situation sans la réduire à un seul problème.",
  },
  {
    num: "02",
    title: "Comprendre",
    text: "Mettre en lumière les mécanismes et les ressources qui influencent votre quotidien.",
  },
  {
    num: "03",
    title: "Clarifier",
    text: "Retrouver une vision plus lisible de vos priorités et de votre direction.",
  },
  {
    num: "04",
    title: "Agir",
    text: "Transformer cette compréhension en choix et en actions concrètes.",
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
    <section id="approche" className="py-32 md:py-48 bg-[#F8F6F1]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Une approche globale
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Un accompagnement de vie profondément humain et personnalisé
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Chaque accompagnement commence par un état des lieux global de votre situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24">
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
          <p className="font-body text-[#6E6A62] text-base leading-relaxed mb-8">
            Un regard nourri par plus de vingt ans d'expérience :
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
        </div>
      </div>
    </section>
  );
}