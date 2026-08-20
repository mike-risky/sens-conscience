import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const images = [
  {
    src: "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/f94fd638f_converted_image.jpeg",
    alt: "Nuray C. Posse, coach de vie à Sion, de profil en lumière dorée — portrait en extérieur",
  },
  {
    src: "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/659da3e81_converted_image1.jpeg",
    alt: "Nuray C. Posse sur un chemin de montagne près de Sion — accompagnement de vie en marchant dans la nature",
  },
];

export default function PortraitGallery() {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (d) => setI((p) => (p + d + n) % n);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg shadow-[#3A2E22]/10">
        <Image
          key={images[i].src}
          src={images[i].src}
          alt={images[i].alt}
          fittingType="fill"
          className="w-full h-full"
        />
        <button
          onClick={() => go(-1)}
          aria-label="Photo précédente"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4a4838] flex items-center justify-center shadow transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Photo suivante"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4a4838] flex items-center justify-center shadow transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Photo ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === i ? "w-8 bg-[#C07847]" : "w-1.5 bg-[#D6CDC0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}