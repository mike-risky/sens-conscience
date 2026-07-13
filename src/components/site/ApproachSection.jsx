import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Eye, Lightbulb, Sparkles, Footprints } from "lucide-react";

const steps = [
  { num: "01", title: "Observer", text: "Comprendre votre situation sans la réduire à un seul problème.", Icon: Eye },
  { num: "02", title: "Comprendre", text: "Mettre en lumière les mécanismes et les ressources qui influencent votre quotidien.", Icon: Lightbulb },
  { num: "03", title: "Clarifier", text: "Retrouver une vision plus lisible de vos priorités et de votre direction.", Icon: Sparkles },
  { num: "04", title: "Agir", text: "Transformer cette compréhension en choix et en actions concrètes.", Icon: Footprints },
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
  const Icon = step.Icon;
  return (
    <div
      ref={ref}
      className={`flex gap-5 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="font-heading text-3xl text-[#E8D5BA] font-light shrink-0 mt-1">
        {step.num}
      </span>
      <div>
        <div className="w-9 h-9 rounded-full bg-[#E76F51]/10 flex items-center justify-center mb-3">
          <Icon size={16} className="text-[#E76F51]" />
        </div>
        <h3 className="font-heading text-xl text-[#2C2C2C] mb-2">{step.title}</h3>
        <p className="font-body text-sm text-[#7A6952] leading-relaxed">{step.text}</p>
      </div>
    </div>
  );
}

export default function ApproachSection() {
  const [ref, isVisible] = useScrollReveal();
  const [credRef, credVisible] = useScrollReveal();

  return (
    <section id="approche" className="py-32 md:py-48 bg-gradient-to-b from-[#FDF6EC] to-[#FBF1E2]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#D2691E] uppercase mb-4">
            Une approche globale
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-6">
            Un accompagnement de vie profondément humain et personnalisé
          </h2>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
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
          className={`border-t border-[#E8D5BA] pt-12 max-w-3xl mx-auto text-center transition-all duration-1000 ${
            credVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[#7A6952] text-base leading-relaxed mb-8">
            Un regard nourri par plus de vingt ans d'expérience :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {domains.map((d, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#F7E9D4] font-body text-sm text-[#D2691E]"
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