import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Footprints } from "lucide-react";

export default function MarcheSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="marche" className="py-28 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-[#87856C]/15 flex items-center justify-center shrink-0">
            <Footprints size={26} className="text-[#87856C]" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3">
              Une modalité d'accompagnement
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-[#2C2C2C] mb-4">
              Au cabinet ou en marchant
            </h2>
            <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
              Certaines rencontres ont besoin d'une table et de silence. D'autres trouvent leur mouvement dehors. Lorsque cela fait sens, l'accompagnement peut se poursuivre en marchant dans la nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}