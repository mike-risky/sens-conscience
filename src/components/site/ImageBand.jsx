import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const BAND_IMG =
  "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/1ec78b23c_generated_image.png";

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
        alt="Prairie de fleurs sauvages baignée de soleil matinal près de Sion, dans le Valais"
        className="w-full h-full object-cover"
      />
    </section>
  );
}