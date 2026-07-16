import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import {
  Sparkles,
  Mountain,
  Wind,
  Backpack,
  Shell,
  RefreshCw,
  Repeat,
  Compass,
  Moon,
  Zap,
} from "lucide-react";

const situations = [
  { text: "Vous ne trouvez plus de goût ou d'élan dans votre quotidien.", Icon: Sparkles },
  { text: "Vous vous sentez dépassé par vos responsabilités.", Icon: Mountain },
  { text: "Vous traversez un divorce, une séparation ou un bouleversement familial.", Icon: Wind },
  { text: "Vous vous épuisez à vouloir tout porter.", Icon: Backpack },
  { text: "Vous avez tendance à vous isoler ou à vous refermer.", Icon: Shell },
  { text: "Vous tournez en rond sans parvenir à avancer.", Icon: RefreshCw },
  { text: "Vous répétez des schémas qui vous font souffrir.", Icon: Repeat },
  { text: "Vous ne savez plus quelle direction prendre.", Icon: Compass },
  { text: "Vous avez le sentiment de ne plus être pleinement vous-même.", Icon: Moon },
  { text: "Vous vivez difficilement votre hypersensibilité, votre HPI, votre TDAH ou un fonctionnement atypique.", Icon: Zap },
];

function SituationCard({ text, Icon, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`p-8 bg-[#F7E9D4]/60 rounded-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-9 h-9 rounded-full bg-[#E76F51]/10 flex items-center justify-center mb-4">
        <Icon size={16} className="text-[#E76F51]" />
      </div>
      <p className="font-body text-[#2C2C2C] text-sm md:text-base leading-relaxed">{text}</p>
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
    <section id="situations" className="py-32 md:py-48 bg-gradient-to-b from-[#FDF6EC] via-[#FDF6EC] to-[#FBF1E2]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#D2691E] uppercase mb-4">
            Quand la vie ne ressemble plus à ce que vous aviez imaginé
          </p>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Il arrive que l'on perde ses repères, son énergie, le sentiment d'être pleinement soi-même.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {situations.map((s, i) => (
            <SituationCard key={i} text={s.text} Icon={s.Icon} index={i} />
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="font-heading italic text-lg md:text-xl text-[#E76F51] mb-8">
            Si ces mots résonnent en vous, vous êtes peut-être au bon endroit.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#C4522E] text-white font-body font-medium text-sm hover:bg-[#B04728] transition-all duration-300"
          >
            Échanger avec moi
          </button>
        </div>
      </div>
    </section>
  );
}