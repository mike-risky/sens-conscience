import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { User, Route, Footprints, Eye, Repeat, Compass, Brain, Sun } from "lucide-react";

const services = [
  { title: "Accompagnement individuel", text: "Un espace confidentiel pour prendre du recul et retrouver une direction.", Icon: User },
  { title: "Transitions de vie", text: "Traverser un changement sans perdre votre axe.", Icon: Route },
  { title: "Marche narrative", text: "Un accompagnement en mouvement, dans la nature, pour libérer la parole.", Icon: Footprints },
  { title: "À la rencontre de soi", text: "Mieux comprendre votre fonctionnement et vos besoins.", Icon: Eye },
  { title: "Schémas répétitifs", text: "Identifier les mécanismes qui se répètent et y répondre autrement.", Icon: Repeat },
  { title: "Reprendre les rênes de sa vie", text: "Sortir du sentiment d'impuissance et retrouver une marge de choix.", Icon: Compass },
  { title: "Hypersensibilité, HPI et TDAH", text: "Comprendre et apprivoiser un fonctionnement atypique.", Icon: Brain },
  { title: "Retrouver le goût de sa vie", text: "Renouer avec ce qui donne du sens et de l'énergie.", Icon: Sun },
];

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  const Icon = service.Icon;
  return (
    <div
      ref={ref}
      className={`group p-8 md:p-10 bg-white rounded-lg hover:shadow-md transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-full bg-[#7C8873]/10 flex items-center justify-center mb-5">
        <Icon size={18} className="text-[#7C8873] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="font-heading text-lg md:text-xl text-[#292824] mb-3 group-hover:text-[#7C8873] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="font-body text-sm text-[#6E6A62] leading-relaxed">{service.text}</p>
    </div>
  );
}

export default function AccompagnementsSection() {
  const [ref, isVisible] = useScrollReveal();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accompagnements" className="py-32 md:py-48 bg-[#EEE9E0]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Les accompagnements
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Coaching de vie et accompagnement personnalisé à Sion
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Des accompagnements adaptés à votre situation, à votre rythme et à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        <div className="text-center mt-20">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#7C8873] text-white font-body font-medium text-sm hover:bg-[#6b7763] transition-all duration-300"
          >
            Parler de votre situation
          </button>
        </div>
      </div>
    </section>
  );
}