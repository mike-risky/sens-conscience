import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const BOOK_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/7dbad9317_generated_f005c7a8.png";

export default function BookSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="livre" className="py-32 md:py-48 bg-[#F7E9D4]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <img
              src={BOOK_IMG}
              alt="L'art de ne pas se trahir, livre de Nuray C. Posse sur la conscience de soi et le développement personnel"
              className="w-full max-w-sm mx-auto rounded-lg object-cover shadow-xl shadow-[#3A2E22]/10"
            />
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] text-[#D2691E] uppercase mb-4">
              Le livre
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-2">
              L'art de ne pas se trahir
            </h2>
            <p className="font-heading italic text-lg text-[#7A6952] mb-8">
              Habiter sa vie avec lucidité
            </p>

            <div className="mb-10">
              <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
                Une invitation à mieux reconnaître vos besoins et les choix qui vous éloignent parfois de vous-même — pour habiter votre vie avec davantage de lucidité et de fidélité à soi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E76F51] text-white font-body font-medium text-sm hover:bg-[#D85B3D] transition-all duration-300"
              >
                Découvrir le livre sur Amazon
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E8D5BA] text-[#2C2C2C] font-body font-medium text-sm hover:bg-[#F7E9D4] transition-all duration-300"
              >
                Disponible à La Liseuse à Sion
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}