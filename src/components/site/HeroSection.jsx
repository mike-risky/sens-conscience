import React from "react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/30a5c1d97_generated_fb813ed2.png";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Chemin de montagne dans le Valais près de Sion, symbolisant le parcours d'un coaching de vie"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#292824]/30 via-[#292824]/20 to-[#F8F6F1]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-sm tracking-[0.2em] text-white/80 uppercase mb-8"
        >
          Sens & Conscience — par Nuray C. Posse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-tight mb-6"
        >
          Coach de vie à Sion pour retrouver du sens et reprendre les rênes de votre vie
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Un accompagnement humain et personnalisé pour traverser une période de changement, retrouver votre axe et avancer avec plus de clarté.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="font-heading italic text-lg md:text-xl text-white/75 mb-10 max-w-xl mx-auto"
        >
          «&nbsp;Nous naissons une première fois dans les circonstances. Osons renaître une seconde fois, en conscience.&nbsp;»
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#7C8873] text-white font-body font-medium text-sm hover:bg-[#6b7763] transition-all duration-300 shadow-lg shadow-[#7C8873]/20"
          >
            Prendre rendez-vous
          </button>
          <button
            onClick={() => scrollTo("#approche")}
            className="px-8 py-3.5 rounded-full border border-white/40 text-white font-body font-medium text-sm hover:bg-white/10 transition-all duration-300"
          >
            Découvrir mon approche
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-body text-xs text-white/60 tracking-wide"
        >
          Accompagnement individuel à Sion et à distance.
        </motion.p>
      </div>
    </section>
  );
}