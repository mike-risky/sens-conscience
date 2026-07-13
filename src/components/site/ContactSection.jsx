import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-32 md:py-48 bg-[#EEE9E0]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.2em] text-[#B49A78] uppercase mb-4">
            Un premier pas
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Contactez-moi
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Vous traversez une transition, vous vous posez des questions ? Écrivez-moi quelques mots, à votre rythme. Je vous réponds personnellement.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7C8873]/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#7C8873]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[#6E6A62] mb-0.5">Téléphone</p>
                  <a href="tel:+41794446977" className="font-body text-[#292824] hover:text-[#7C8873] transition-colors">
                    +41 79 444 69 77
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7C8873]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#7C8873]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[#6E6A62] mb-0.5">E-mail</p>
                  <a href="mailto:nuray.posse@gmail.com" className="font-body text-[#292824] hover:text-[#7C8873] transition-colors">
                    nuray.posse@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7C8873]/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7C8873]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-[#6E6A62] mb-0.5">Instagram</p>
                  <a href="https://www.instagram.com/nuraycposse" target="_blank" rel="noopener noreferrer" className="font-body text-[#292824] hover:text-[#7C8873] transition-colors">
                    Nuray C. Posse
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:+41794446977"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#DED8CE] text-[#292824] font-body text-sm hover:bg-[#EEE9E0] transition-all duration-300"
              >
                <Phone size={15} />
                M'appeler
              </a>
              <a
                href="mailto:nuray.posse@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#DED8CE] text-[#292824] font-body text-sm hover:bg-[#EEE9E0] transition-all duration-300"
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