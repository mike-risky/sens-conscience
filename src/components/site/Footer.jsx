import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#3A2E22] text-white/80 py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-heading text-xl text-white mb-1">Sens & Conscience</p>
            <p className="font-body text-xs text-white/50 mb-3">par Nuray C. Posse</p>
            <p className="font-body text-sm text-white/60">Coach de vie à Sion</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.15em] text-white/70 uppercase mb-4">Contact</p>
            <div className="space-y-2">
              <a href="tel:+41794446977" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                +41 79 444 69 77
              </a>
              <a href="mailto:nuray.posse@gmail.com" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                nuray.posse@gmail.com
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.15em] text-white/70 uppercase mb-4">Liens</p>
            <div className="space-y-2">
              <a href="https://www.instagram.com/nuraycposse" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#mentions-legales" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#politique-de-confidentialite" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-xs text-white/70">
            © 2026 Sens & Conscience — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}