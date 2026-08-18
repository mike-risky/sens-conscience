import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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

function StepSlide({ step, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const isLast = index === total - 1;
  const opacity = useTransform(
    progress,
    [start, start + 0.04, end - 0.04, end],
    [0, 1, 1, isLast ? 1 : 0]
  );
  const y = useTransform(progress, [start, end], [50, -50]);
  const scale = useTransform(progress, [start, end], [0.96, 1]);
  const Icon = step.Icon;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
    >
      <span className="font-heading text-7xl md:text-8xl text-[#87856C]/15 font-light mb-2">
        {step.num}
      </span>
      <div className="w-12 h-12 rounded-full bg-[#C07847]/10 flex items-center justify-center mb-6">
        <Icon size={20} className="text-[#C07847]" />
      </div>
      <h3 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] mb-4">{step.title}</h3>
      <p className="font-body text-lg md:text-xl text-[#4a4838] leading-relaxed mb-3 max-w-xl">
        {step.lead}
      </p>
      <p className="font-body text-base md:text-lg text-[#7A6952] leading-relaxed max-w-xl">
        {step.text}
      </p>
    </motion.div>
  );
}

export default function ApproachSection() {
  const targetRef = useRef(null);
  const [credRef, credVisible] = useScrollReveal();
  const [sysRef, sysVisible] = useScrollReveal();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <section id="approche" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-48 text-center">
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

      <div ref={targetRef} style={{ height: `${steps.length * 80}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {steps.map((step, i) => (
            <StepSlide key={i} step={step} index={i} total={steps.length} progress={scrollYProgress} />
          ))}

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {steps.map((s, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-[#C07847]" : "w-2 bg-[#D6CDC0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-32 md:pb-48 text-center">
        <p className="font-body text-sm md:text-base text-[#4a4838] leading-relaxed">
          Où suis-je&nbsp;? <span className="text-[#C07847]">→</span> Comment suis-je arrivé là&nbsp;? <span className="text-[#C07847]">→</span> Qu'est-ce qui dépend de moi&nbsp;? <span className="text-[#C07847]">→</span> Qu'est-ce que j'en fais maintenant&nbsp;?
        </p>
      </div>

      <div
        ref={credRef}
        className={`border-t border-[#D6CDC0] pt-12 max-w-3xl mx-auto px-6 md:px-10 text-center transition-all duration-1000 ${
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
        className={`max-w-2xl mx-auto px-6 md:px-10 text-center pb-32 md:pb-48 transition-all duration-1000 ${
          sysVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-heading text-xl md:text-2xl text-[#2C2C2C] mb-4">Le regard systémique</h3>
        <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
          Des disciplines différentes, un même regard : comprendre la personne dans son ensemble plutôt que l'enfermer dans un symptôme, une difficulté ou une étiquette.
        </p>
      </div>
    </section>
  );
}