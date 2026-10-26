import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { User, Building2 } from "lucide-react";

const offers = [
  {
    id: "fidelite",
    audience: "Pour les particuliers",
    Icon: User,
    title: "Lecture de fidélité à soi",
    price: "2 heures — CHF 250.–",
    paragraphs: [
      "Une rencontre individuelle pour prendre de la hauteur sur son quotidien, mieux comprendre son fonctionnement, identifier ses ressources et les éventuels décalages entre ses besoins, ses pensées et ses comportements.",
      "La personne repart avec des outils pour poursuivre cette observation de manière autonome.",
    ],
    cta: "Découvrir cette séance",
  },
  {
    id: "entreprises",
    audience: "Pour les entreprises",
    Icon: Building2,
    title: "Regard sur les fonctionnements",
    price: "Tarif sur demande",
    paragraphs: [
      "Une intervention adaptée aux équipes pour prendre du recul sur les habitudes individuelles et collectives, les tensions du quotidien et les possibilités d'amélioration dans les relations et l'organisation du travail.",
    ],
    cta: "Discutons de vos besoins",
  },
];

function OfferCard({ offer, index, onChoose }) {
  const [ref, isVisible] = useScrollReveal(0.15);
  const Icon = offer.Icon;
  return (
    <div
      ref={ref}
      className={`group bg-white border border-[#D9C1A9] rounded-lg p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-[#1F2E26]/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-11 h-11 shrink-0 rounded-full bg-[#A34D20]/10 flex items-center justify-center">
          <Icon size={20} className="text-[#A34D20]" />
        </div>
        <p className="font-body text-xs tracking-[0.2em] text-[#A34D20] uppercase">
          {offer.audience}
        </p>
      </div>

      <h3 className="font-heading text-2xl md:text-3xl text-[#1F2E26] mb-4">
        {offer.title}
      </h3>
      <p className="inline-block font-body text-sm font-medium text-[#2D4A3A] bg-[#EAD9C7] rounded-full px-4 py-1.5 mb-6">
        {offer.price}
      </p>

      <div className="space-y-4 mb-8">
        {offer.paragraphs.map((p, i) => (
          <p key={i} className="font-body text-sm md:text-base text-[#2D4A3A] leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <p className="font-body text-sm font-medium text-[#1F2E26] border-t border-[#D9C1A9] pt-5 mb-8">
        Sans engagement pour la suite.
      </p>

      <button
        onClick={onChoose}
        className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#A34D20] text-white border border-[#A34D20] font-body font-medium text-sm shadow-sm hover:bg-[#8F4119] hover:border-[#8F4119] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      >
        {offer.cta}
      </button>
    </div>
  );
}

export default function DiscoverySection() {
  const [ref, isVisible] = useScrollReveal();

  const choose = (offer) => {
    window.dispatchEvent(new CustomEvent("sc:select-offer", { detail: offer }));
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="decouverte" className="bg-[#FBF5EC] py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-14 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#1F2E26] mb-6">
            Et si tout commençait par un premier regard&nbsp;?
          </h2>
          <p className="font-body text-[#2D4A3A] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Un temps pour prendre du recul, comprendre ce qui se joue et découvrir de nouvelles
            possibilités d'action. Deux approches, sans engagement pour la suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} onChoose={() => choose(offer)} />
          ))}
        </div>
      </div>
    </section>
  );
}