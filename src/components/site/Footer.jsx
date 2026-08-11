import React from "react";
import { Link } from "react-router-dom";

const LOGO_WHITE = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/6c95c1201_sensconscience_logotype_SC_logo_blanc.svg";

export default function Footer() {
  return (
    <footer className="bg-[#87856C] text-white py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={LOGO_WHITE} alt="Sens & Conscience" className="h-40 md:h-48 w-auto mb-4" />
            <p className="font-body text-sm text-white/80">Coach de vie à Sion</p>
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
              <Link to="/mentions-legales" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-de-confidentialite" className="block font-body text-sm text-white/70 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
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