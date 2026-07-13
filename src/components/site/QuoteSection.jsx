import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const QUOTE_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/16c2dc9e8_generated_9781bba1.png";

export default function QuoteSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={QUOTE_IMG}
          alt="Paysage alpin serein près de Sion, évoquant la paix intérieure et la reconnexion à soi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#292824]/50" />
      </div>
      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-1500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <p className="font-heading italic text-2xl md:text-3xl lg:text-4xl text-white leading-snug mb-6">
          «&nbsp;L'art de vivre en conscience commence lorsque nous cessons de nous trahir.&nbsp;»
        </p>
        <p className="font-body text-sm text-white/60 tracking-[0.15em] uppercase">
          Nuray C. Posse
        </p>
      </div>
    </section>
  );
}