import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Armchair, Footprints } from "lucide-react";

export default function MarcheSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const clipInset = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const dividerLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="marche" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-28 md:pt-40 text-center">
        <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3">
          Une modalité d'accompagnement
        </p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-4">
          Au cabinet ou en marchant
        </h2>
      </div>

      <div ref={targetRef} style={{ height: "220vh" }} className="relative">
        <div className="sticky top-0 h-screen relative overflow-hidden">
          {/* Base — Au cabinet (sable) */}
          <div className="absolute inset-0 bg-[#D6CDC0] flex items-center">
            <div className="w-1/2 ml-auto pr-10 md:pr-24 text-right">
              <div className="inline-flex w-14 h-14 rounded-full bg-white/60 items-center justify-center mb-5">
                <Armchair size={24} className="text-[#87856C]" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#4a4838] mb-3">Au cabinet</h3>
              <p className="font-body text-sm md:text-base text-[#5a5848] leading-relaxed max-w-xs ml-auto">
                Certaines rencontres ont besoin d'une table et de silence.
              </p>
            </div>
          </div>

          {/* Overlay — En marchant (olive), révélé de gauche à droite */}
          <motion.div
            style={{ clipPath: clipInset }}
            className="absolute inset-0 bg-[#87856C]"
          >
            <div className="w-screen h-full flex items-center">
              <div className="w-1/2 pl-10 md:pl-24 text-left">
                <div className="inline-flex w-14 h-14 rounded-full bg-white/15 items-center justify-center mb-5">
                  <Footprints size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">En marchant</h3>
                <p className="font-body text-sm md:text-base text-white/85 leading-relaxed max-w-xs">
                  D'autres trouvent leur mouvement dehors.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ligne de séparation coulissante */}
          <motion.div
            style={{ left: dividerLeft }}
            className="absolute top-0 bottom-0 w-px bg-white/70"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-10 pb-28 md:pb-40 text-center">
        <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
          Lorsque cela fait sens, l'accompagnement peut se poursuivre en marchant dans la nature.
        </p>
      </div>
    </section>
  );
}