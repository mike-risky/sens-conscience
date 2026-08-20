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

export default function SituationsSection() {
  const [ref, isVisible] = useScrollReveal();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="situations" className="bg-[#F2EEE4] py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
            Quand la vie ne ressemble plus à ce que vous aviez imaginé
          </p>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Il arrive que l'on perde ses repères, son énergie, le sentiment d'être pleinement soi-même.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {situations.map((s, i) => {
            const Icon = s.Icon;
            return (
              <article
                key={i}
                className="flex items-start gap-4 p-6 md:p-8 bg-white/60 border border-[#D6CDC0]/40 rounded-lg"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#C07847]/10 flex items-center justify-center">
                  <Icon size={18} className="text-[#C07847]" />
                </div>
                <p className="font-body text-[#2C2C2C] text-base md:text-lg leading-relaxed">
                  {s.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <p className="italic text-xs text-[#C07847] mb-8">
            Si ces mots résonnent en vous, vous êtes peut-être au bon endroit.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#C07847] text-white font-body font-medium text-sm hover:bg-[#a8663a] transition-all duration-300"
          >
            Échanger avec moi
          </button>
        </div>
      </div>
    </section>
  );
}