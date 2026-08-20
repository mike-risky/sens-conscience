import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Eye, Lightbulb, Sparkles, Footprints } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Observer",
    lead: "Faire l'état des lieux de votre existence.",
    text: "Regarder votre situation dans son ensemble, sans jugement et sans la réduire au problème qui vous amène.",
    Icon: Eye,
  },
  {
    num: "02",
    title: "Comprendre",
    lead: "Repérer l'endroit où quelque chose a basculé.",
    text: "Comprendre votre fonctionnement, vos mécanismes d'adaptation et ce qui vous a progressivement éloigné de vous-même.",
    Icon: Lightbulb,
  },
  {
    num: "03",
    title: "Clarifier",
    lead: "Distinguer ce qui dépend de vous de ce qui ne vous appartient pas.",
    text: "Retrouver vos priorités, vos ressources et l'axe à partir duquel vous souhaitez désormais avancer.",
    Icon: Sparkles,
  },
  {
    num: "04",
    title: "Agir",
    lead: "Reprendre les rênes de votre existence.",
    text: "Transformer cette compréhension en choix concrets et apprendre progressivement à avancer sans dépendre de l'accompagnement.",
    Icon: Footprints,
  },
];

const domains = [
  { title: "Enseignement", sub: "Sciences de l'éducation" },
  { title: "Médiation", sub: "Accompagnement existentiel" },
  { title: "Philosophie pratique", sub: null },
  { title: "Neurosciences & cognition", sub: null },
  { title: "Coaching professionnel", sub: null },
];

export default function ApproachSection() {
  const [stepsRef, stepsVisible] = useScrollReveal();
  const [credRef, credVisible] = useScrollReveal();
  const [sysRef, sysVisible] = useScrollReveal();

  return (
    <section id="approche" className="bg-white py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
            Une approche globale
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-6">
            Un accompagnement de vie profondément humain et personnalisé
          </h2>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Chaque accompagnement commence par un état des lieux global de votre situation.
          </p>
        </div>

        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20 transition-all duration-1000 ${
            stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <div key={step.num} className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#C07847]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#C07847]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-heading text-sm text-[#87856C]/60">{step.num}</span>
                    <h3 className="font-heading text-xl md:text-2xl text-[#2C2C2C]">{step.title}</h3>
                  </div>
                  <p className="font-body text-[#4a4838] text-base md:text-lg leading-relaxed mb-2">
                    {step.lead}
                  </p>
                  <p className="font-body text-[#7A6952] text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-sm md:text-base text-[#4a4838] leading-relaxed">
            Où suis-je&nbsp;? <span className="text-[#C07847]">→</span> Comment suis-je arrivé là&nbsp;? <span className="text-[#C07847]">→</span> Qu'est-ce qui dépend de moi&nbsp;? <span className="text-[#C07847]">→</span> Qu'est-ce que j'en fais maintenant&nbsp;?
          </p>
        </div>

        <div
          ref={credRef}
          className={`border-t border-[#D6CDC0] pt-12 text-center transition-all duration-1000 ${
            credVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
            Ce qui nourrit mon regard
          </p>
          <p className="font-body text-[#7A6952] text-base leading-relaxed mb-8">
            Plus de vingt ans d'expérience au croisement de plusieurs disciplines :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {domains.map((d, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-[#D6CDC0]/50 font-body text-sm text-[#87856C] text-center"
              >
                {d.title}
                {d.sub && <span className="block text-xs text-[#87856C]/70 mt-0.5">{d.sub}</span>}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={sysRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            sysVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-heading text-xl md:text-2xl text-[#2C2C2C] mb-4">Le regard systémique</h3>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
            Des disciplines différentes, un même regard : comprendre la personne dans son ensemble plutôt que l'enfermer dans un symptôme, une difficulté ou une étiquette.
          </p>
        </div>
      </div>
    </section>
  );
}