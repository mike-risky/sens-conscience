import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Accompagnement individuel",
    text: "Un espace confidentiel pour prendre du recul, comprendre votre situation et retrouver une direction.",
  },
  {
    title: "Transitions de vie",
    text: "Traverser une séparation, un changement professionnel, familial ou personnel sans perdre votre axe.",
  },
  {
    title: "Marche narrative",
    text: "Un accompagnement en mouvement, dans un cadre naturel, pour libérer la parole et faire émerger de nouvelles perspectives.",
  },
  {
    title: "À la rencontre de soi",
    text: "Mieux comprendre votre fonctionnement, vos besoins, vos valeurs et la manière dont vous souhaitez habiter votre vie.",
  },
  {
    title: "Schémas répétitifs",
    text: "Identifier les mécanismes qui se répètent et construire progressivement des réponses plus saines et plus conscientes.",
  },
  {
    title: "Reprendre les rênes de sa vie",
    text: "Sortir du sentiment d'impuissance, retrouver une marge de choix et avancer à nouveau.",
  },
  {
    title: "Hypersensibilité, HPI et TDAH",
    text: "Mieux comprendre et apprivoiser un fonctionnement atypique, sans chercher à le nier ou à le normaliser.",
  },
  {
    title: "Retrouver le goût de sa vie",
    text: "Renouer avec ce qui donne du sens, de l'énergie et une direction à votre existence.",
  },
];

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`group p-7 md:p-8 bg-white rounded-lg hover:shadow-md transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
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
    <section id="accompagnements" className="py-24 md:py-36 bg-[#EEE9E0]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Les accompagnements
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Coaching de vie et accompagnement personnalisé à Sion
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Les accompagnements sont adaptés à la situation, au rythme et aux besoins de chaque personne. Il ne s'agit pas d'appliquer une méthode identique à tous, mais de construire un chemin pertinent et concret.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
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