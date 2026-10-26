import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LOGO_GREEN = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/b2ce41929_sensconscience_logotype_SC_logo_vert.svg";

export default function LegalLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#FBF5EC]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-[#4C6355] hover:text-[#2F5240] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <img src={LOGO_GREEN} alt="Sens & Conscience" className="h-16 md:h-20 w-auto mb-8" />

        <p className="font-body text-xs tracking-[0.2em] text-[#4C6355] uppercase mb-3">{subtitle}</p>
        <h1 className="font-heading text-3xl md:text-4xl font-light text-[#241F1B] mb-10">{title}</h1>

        <div className="space-y-8 font-body text-[#2A342C] text-base md:text-lg leading-relaxed">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-[#EAD9C7]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-[#4C6355] hover:text-[#2F5240] transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}