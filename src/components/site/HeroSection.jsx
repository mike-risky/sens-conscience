import React from "react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/7c4b832d5_generated_image.png";

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
          alt="Lever de soleil sur les Alpes valaisannes près de Sion, symbole d'un nouveau départ"
          fetchpriority="high"
          loading="eager"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E22]/25 via-[#3A2E22]/10 to-[#FDF6EC]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-36 pb-48">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-sm tracking-[0.2em] text-white/85 uppercase mb-8"
        >
          Sens & Conscience — par Nuray C. Posse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-tight mb-12"
        >
          Coach de vie à Sion pour retrouver du sens et reprendre les rênes de votre vie
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading italic text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-14 max-w-2xl mx-auto bg-[#3A2E22]/45 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg shadow-black/20"
        >
          «&nbsp;Nous naissons une première fois dans les circonstances. Osons renaître une seconde fois, en conscience.&nbsp;»
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-[#C4522E] text-white font-body font-medium text-sm hover:bg-[#B04728] transition-all duration-300 shadow-lg shadow-[#C4522E]/25"
          >
            Prendre rendez-vous
          </button>
          <button
            onClick={() => scrollTo("#approche")}
            className="px-8 py-3.5 rounded-full border border-white/50 text-white font-body font-medium text-sm hover:bg-white/15 transition-all duration-300"
          >
            Découvrir mon approche
          </button>
        </motion.div>
      </div>
    </section>
  );
}