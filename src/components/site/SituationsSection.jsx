import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        setDistance(Math.max(0, trackWidth - window.innerWidth + 80));
      }
    };
    calc();
    window.addEventListener("resize", calc);
    const t = setTimeout(calc, 300);
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="situations" className="bg-[#F2EEE4]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-48 text-center">
        <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
          Quand la vie ne ressemble plus à ce que vous aviez imaginé
        </p>
        <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Il arrive que l'on perde ses repères, son énergie, le sentiment d'être pleinement soi-même.
        </p>
      </div>

      <div ref={targetRef} style={{ height: `${situations.length * 28}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 px-6 md:px-10 w-max items-stretch"
          >
            {situations.map((s, i) => {
              const Icon = s.Icon;
              return (
                <article
                  key={i}
                  className="group w-[78vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] shrink-0 p-8 md:p-10 bg-white/60 border border-[#D6CDC0]/40 rounded-lg flex flex-col justify-center transition-colors duration-300 hover:bg-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C07847]/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#C07847]">
                    <Icon size={18} className="text-[#C07847] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <p className="font-body text-[#2C2C2C] text-base md:text-lg leading-relaxed">{s.text}</p>
                  <span className="font-heading text-sm text-[#87856C]/50 mt-6">{String(i + 1).padStart(2, "0")}</span>
                </article>
              );
            })}
          </motion.div>

          <div className="max-w-md mx-auto w-full px-6 mt-10">
            <div className="h-px bg-[#D6CDC0] relative overflow-hidden rounded-full">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="origin-left absolute inset-0 bg-[#C07847] h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-32 md:pb-48 text-center">
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
    </section>
  );
}