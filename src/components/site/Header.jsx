import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Accompagnements", href: "#accompagnements" },
  { label: "Mon approche", href: "#approche" },
  { label: "À propos", href: "#a-propos" },
  { label: "Livre", href: "#livre" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F8F6F1]/95 backdrop-blur-md shadow-[0_1px_0_#DED8CE]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo("#accueil")} className="text-left">
            <span className="font-heading text-lg md:text-xl font-medium text-[#292824] tracking-wide">
              Sens & Conscience
            </span>
            <span className="hidden md:inline text-xs text-[#6E6A62] ml-2 font-body">
              par Nuray C. Posse
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body text-[#6E6A62] hover:text-[#292824] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm font-body font-medium px-5 py-2.5 rounded-full bg-[#7C8873] text-white hover:bg-[#6b7763] transition-all duration-300"
            >
              Prendre contact
            </button>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-[#292824]"
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#F8F6F1]" />
        <div className="relative flex flex-col items-center justify-center h-full">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 p-2 text-[#292824]"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-heading text-2xl text-[#292824] hover:text-[#7C8873] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-4 font-body font-medium px-8 py-3 rounded-full bg-[#7C8873] text-white hover:bg-[#6b7763] transition-all duration-300"
            >
              Prendre contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}