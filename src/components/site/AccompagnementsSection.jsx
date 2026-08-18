import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Pause, Compass, Home } from "lucide-react";

const doors = [
  {
    title: "Faire halte",
    lead: "Quand tout devient flou.",
    text: "Faire l'état des lieux de votre situation, prendre du recul et identifier ce qui, aujourd'hui, mérite réellement votre attention.",
    Icon: Pause,
  },
  {
    title: "Revenir à soi",
    lead: "Retrouver l'endroit où vous vous êtes quitté.",
    text: "Comprendre votre fonctionnement, vos adaptations, vos schémas et ce qui vous a progressivement éloigné de vous-même.",
    Icon: Compass,
  },
  {
    title: "Habiter pleinement sa vie",
    lead: "Devenir son propre repère.",
    text: "Transformer les prises de conscience en choix, retrouver votre marge d'action et apprendre à revenir à votre axe sans dépendre de l'accompagnement.",
    Icon: Home,
  },
];

function DoorCard({ door, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);
  const Icon = door.Icon;
  return (
    <div
      ref={ref}
      className={`group p-8 md:p-10 bg-[#F2EEE4] rounded-lg border border-white/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } hover:shadow-xl hover:shadow-black/20 hover:bg-white`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-11 h-11 rounded-full bg-[#C07847]/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#C07847]">
        <Icon size={18} className="text-[#C07847] transition-colors duration-300 group-hover:text-white" />
      </div>
      <h3 className="service-card-title font-heading font-medium text-[#4a4838] mb-2 group-hover:text-[#C07847] transition-colors duration-300">
        {door.title}
      </h3>
      <p className="font-body text-sm text-[#C07847] italic mb-4">{door.lead}</p>
      <p className="font-body text-sm text-[#7A6952] leading-relaxed">{door.text}</p>
    </div>
  );
}

export default function AccompagnementsSection() {
  const [ref, isVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accompagnements" className="py-32 md:py-48 bg-[#87856C]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-white/70 uppercase mb-4">
            Les accompagnements
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6">
            Trois portes d'entrée
          </h2>
          <p className="font-body text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Coach de vie à Sion, j'accompagne la personne dans sa globalité, au-delà de toute étiquette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doors.map((d, i) => (
            <DoorCard key={i} door={d} index={i} />
          ))}
        </div>

        <div
          className={`max-w-2xl mx-auto text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
            Ces accompagnements peuvent notamment trouver leur place lors d'une transition de vie, d'un épuisement, de schémas qui se répètent, d'une perte de sens ou lorsqu'un fonctionnement singulier devient difficile à comprendre ou à réguler. Cela permet également d'accueillir des personnes HPI, hypersensibles, TDAH ou simplement en décalage, avec ou sans diagnostic, sans transformer ces étiquettes en prestations.
          </p>
        </div>

        <div
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#C07847] text-white font-body font-medium text-sm hover:bg-[#a8663a] transition-all duration-300"
          >
            Parler de votre situation
          </button>
        </div>
      </div>
    </section>
  );
}