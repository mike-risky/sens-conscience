import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-32 md:py-48 bg-gradient-to-b from-[#FBF1E2] to-[#F7E9D4]/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#D2691E] uppercase mb-4">
            Un premier pas
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-6">
            Contactez-moi
          </h2>
          <p className="font-body text-[#7A6952] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Vous traversez une transition, vous vous posez des questions ? Écrivez-moi quelques mots, à votre rythme. Je vous réponds personnellement.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E76F51]/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#E76F51]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[#7A6952] mb-0.5">Téléphone</p>
                  <a href="tel:+41794446977" className="font-body text-[#2C2C2C] hover:text-[#E76F51] transition-colors">
                    +41 79 444 69 77
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E76F51]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#E76F51]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[#7A6952] mb-0.5">E-mail</p>
                  <a href="mailto:nuray.posse@gmail.com" className="font-body text-[#2C2C2C] hover:text-[#E76F51] transition-colors">
                    nuray.posse@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E76F51]/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E76F51]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-[#7A6952] mb-0.5">Instagram</p>
                  <a href="https://www.instagram.com/nuraycposse" target="_blank" rel="noopener noreferrer" className="font-body text-[#2C2C2C] hover:text-[#E76F51] transition-colors">
                    Nuray C. Posse
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:+41794446977"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E8D5BA] text-[#2C2C2C] font-body text-sm hover:bg-[#F7E9D4] transition-all duration-300"
              >
                <Phone size={15} />
                M'appeler
              </a>
              <a
                href="mailto:nuray.posse@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E8D5BA] text-[#2C2C2C] font-body text-sm hover:bg-[#F7E9D4] transition-all duration-300"
              >
                <Mail size={15} />
                M'écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}