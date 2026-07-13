import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const BAND_IMG =
  "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/74c9fdf0a_generated_image.png";

export default function ImageBand() {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`relative h-64 md:h-[28rem] overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={BAND_IMG}
        alt="Prairie brumeuse à l'aube près de Sion, dans le Valais — une invitation à la pause"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#292824]/10" />
    </section>
  );
}