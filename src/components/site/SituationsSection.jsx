import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const situations = [
  "Vous ne trouvez plus de goût ou d'élan dans votre quotidien.",
  "Vous vous sentez dépassé par vos responsabilités.",
  "Vous traversez un divorce, une séparation ou un bouleversement familial.",
  "Vous vous épuisez à vouloir tout porter.",
  "Vous avez tendance à vous isoler ou à vous refermer.",
  "Vous tournez en rond sans parvenir à avancer.",
  "Vous répétez des schémas qui vous font souffrir.",
  "Vous ne savez plus quelle direction prendre.",
  "Vous avez le sentiment de ne plus être pleinement vous-même.",
  "Vous vivez difficilement votre hypersensibilité, votre HPI, votre TDAH ou un fonctionnement atypique.",
];

function SituationCard({ text, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`p-8 bg-[#EEE9E0]/60 rounded-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="font-body text-[#292824] text-sm md:text-base leading-relaxed">{text}</p>
    </div>
  );
}

export default function SituationsSection() {
  const [ref, isVisible] = useScrollReveal();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="situations" className="py-32 md:py-48 bg-[#F8F6F1]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Quand la vie ne ressemble plus à ce que vous aviez imaginé
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Pourquoi consulter une coach de vie à Sion ?
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Il arrive que l'on perde ses repères, son énergie, le sentiment d'être pleinement soi-même.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {situations.map((s, i) => (
            <SituationCard key={i} text={s} index={i} />
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="font-heading italic text-lg md:text-xl text-[#7C8873] mb-8">
            Si ces mots résonnent en vous, vous êtes peut-être au bon endroit.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#7C8873] text-white font-body font-medium text-sm hover:bg-[#6b7763] transition-all duration-300"
          >
            Échanger avec Nuray
          </button>
        </div>
      </div>
    </section>
  );
}