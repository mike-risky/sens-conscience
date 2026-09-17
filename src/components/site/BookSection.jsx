import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const BOOK_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/24e022799_generated_image.png";

export default function BookSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="livre" className="py-32 md:py-48 bg-[#D6CDC0]/50">
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
              loading="lazy"
              width="384"
              height="576"
              className="w-full max-w-sm mx-auto rounded-lg object-cover aspect-[2/3] shadow-xl shadow-[#3A2E22]/10"
            />
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-4">
              Le livre
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-2">
              L'art de ne pas se trahir
            </h2>
            <p className="italic text-xs text-[#7A6952] mb-8">
              Habiter sa vie avec lucidité
            </p>

            <div className="mb-10">
              <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed">
                Une invitation à mieux reconnaître vos besoins et les choix qui vous éloignent parfois de vous-même — pour habiter votre vie avec davantage de lucidité et de fidélité à soi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://www.amazon.fr/Lart-pas-trahir-Habiter-lucidit%C3%A9/dp/B0GTRMNT34/ref=asc_df_B0GTRMNT34?mcid=bdc9516d10c4322cb4bc8882a205acab&tag=googshopfr-21&linkCode=df0&hvadid=784704994067&hvpos=&hvnetw=g&hvrand=8091067891497487443&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9187748&hvtargid=pla-2475842791378&psc=1&hvocijid=8091067891497487443-B0GTRMNT34-&hvexpln=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C07847] text-white font-body font-medium text-sm hover:bg-[#a8663a] transition-all duration-300"
              >
                Découvrir le livre sur Amazon
                <ExternalLink size={14} />
              </a>
            </div>

            <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3">
              Disponible également chez
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://www.laliseuse.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm text-[#4a4838] hover:text-[#C07847] transition-colors duration-300"
              >
                La Liseuse — Sion
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.fr.fnac.ch/Conthey/Fnac-Conthey/cl663"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm text-[#4a4838] hover:text-[#C07847] transition-colors duration-300"
              >
                FNAC — Conthey
                <ExternalLink size={12} />
              </a>
              <a
                href="https://payot.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm text-[#4a4838] hover:text-[#C07847] transition-colors duration-300"
              >
                Payot — Sion & Sierre
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}