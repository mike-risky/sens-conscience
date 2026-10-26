import React from "react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/7c4b832d5_generated_image.png";
const LOGO_GREEN = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/b2ce41929_sensconscience_logotype_SC_logo_vert.svg";

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
          alt="Chemin ensoleillé à travers un pré, symbole d'un nouveau départ"
          fetchpriority="high"
          loading="eager"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EC]/80 via-[#FBF5EC]/60 to-[#FBF5EC]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-2 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-0 flex justify-center"
        >
          <img
            src={LOGO_GREEN}
            alt="Sens & Conscience — par Nuray C. Posse"
            className="h-[24rem] md:h-[32rem] lg:h-[36rem] w-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-xs tracking-[0.25em] text-[#2D4A3A] uppercase mb-6"
        >
          Coach de vie à Sion
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-sm md:text-base text-[#22332B] leading-relaxed mb-8 max-w-xl mx-auto"
        >
          Vous traversez une période où votre vie ne vous ressemble plus&nbsp;? Je vous accompagne pour faire le point, retrouver de la clarté et reprendre votre capacité d'agir.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-[#1F2E26] leading-tight mb-10"
        >
          À quel endroit de votre vie avez-vous cessé d'habiter votre propre existence&nbsp;?
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="italic text-[#1F2E26] text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg shadow-[#2D4A3A]/10 border border-[#A34D20]/20"
        >
          «&nbsp;Nous naissons une première fois dans les circonstances. Osons renaître une seconde fois, en conscience.&nbsp;»
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-full bg-white text-[#1F2E26] border border-[#A34D20]/70 font-body font-medium text-sm shadow-md hover:bg-[#FBF5EC] hover:border-[#A34D20] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Échanger avec moi
          </button>
          <button
            onClick={() => scrollTo("#approche")}
            className="px-8 py-3.5 rounded-full bg-white text-[#1F2E26] border border-[#2D4A3A]/40 font-body font-medium text-sm shadow-md hover:bg-[#FBF5EC] hover:border-[#2D4A3A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Découvrir mon approche
          </button>
        </motion.div>
      </div>
    </section>
  );
}