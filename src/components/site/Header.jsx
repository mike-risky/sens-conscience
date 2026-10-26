import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const LOGO_GREEN = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/b2ce41929_sensconscience_logotype_SC_logo_vert.svg";
const LOGO_WHITE = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/6c95c1201_sensconscience_logotype_SC_logo_blanc.svg";
const LOGO_ORANGE = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/424ca3d23_sensconscience_logotype_SC_logo_orange.svg";

const chapters = [
  { num: "I", label: "Accueil", href: "#accueil" },
  { num: "II", label: "Mon approche", href: "#approche" },
  { num: "III", label: "Accompagnements", href: "#accompagnements", children: [
    { label: "La marche", href: "#marche" },
    { label: "Mes outils", href: "#outils" },
  ]},
  { num: "IV", label: "À propos", href: "#a-propos" },
  { num: "V", label: "Le livre", href: "#livre" },
  { num: "VI", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 280);
  };

  return (
    <>
      {/* Mobile/tablet hamburger — hidden on desktop */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="fixed top-3 md:top-5 right-4 md:right-6 z-[110] w-14 h-14 rounded-full bg-[#FBF5EC]/90 backdrop-blur-md border border-[#EAD9C7] shadow-lg shadow-black/10 flex items-center justify-center text-[#2D4A3A] hover:bg-[#FBF5EC] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer lg:hidden"
        data-export-hide
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop top bar — always visible */}
      <header
        className="hidden lg:block fixed top-0 inset-x-0 z-50 bg-[#FBF5EC]/90 backdrop-blur-md border-b border-[#EAD9C7]"
        data-export-hide
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => go("#accueil")} className="flex items-center shrink-0">
            <img src={LOGO_GREEN} alt="Sens & Conscience" className="h-12 w-auto" />
          </button>
          <nav className="flex items-center gap-0.5">
            {chapters.map((c) => (
              <button
                key={c.href}
                onClick={() => go(c.href)}
                className="px-2.5 py-2 rounded-full font-body text-base text-[#22332B] hover:text-[#A34D20] hover:bg-[#EAD9C7]/40 transition-all duration-300 whitespace-nowrap"
              >
                {c.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile/tablet menu overlay — hidden on desktop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[80] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-export-hide
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute top-20 md:top-24 right-5 md:right-6 w-[90vw] sm:w-1/3 max-w-md max-h-[calc(100vh-7rem)]"
              initial={{ opacity: 0, y: -14, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-[#FBF5EC] border border-[#EAD9C7] rounded-lg shadow-2xl shadow-black/20 p-5 md:p-8 max-h-full overflow-y-auto overscroll-contain">
                <div className="flex items-center gap-4 mb-4 md:mb-6 pb-4 md:pb-5 border-b border-[#EAD9C7]">
                  <img src={LOGO_GREEN} alt="Sens & Conscience" className="h-20 md:h-40 w-auto max-w-full" />
                </div>
                <nav className="flex flex-col">
                  {chapters.map((c, i) => (
                    <div key={c.href} className="border-b border-[#EAD9C7]/60 last:border-b-0">
                      <motion.button
                        onClick={() => go(c.href)}
                        className="group w-full flex items-baseline gap-3 py-2 md:py-2.5 text-left min-w-0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                      >
                        <span className="font-heading text-sm text-[#A34D20] w-6 shrink-0">
                          {c.num}
                        </span>
                        <span className="font-heading text-xl md:text-3xl text-[#22332B] group-hover:text-[#A34D20] group-hover:translate-x-1 transition-all duration-300 min-w-0 break-words leading-tight">
                          {c.label}
                        </span>
                      </motion.button>
                      {c.children && (
                        <div className="ml-9 mb-2 flex flex-col gap-1">
                          {c.children.map((ch) => (
                            <button
                              key={ch.href}
                              onClick={() => go(ch.href)}
                              className="group flex items-baseline gap-2 py-1.5 text-left"
                            >
                              <span className="text-[#A34D20]/50 text-sm">—</span>
                              <span className="font-body text-base text-[#2D4A3A] group-hover:text-[#A34D20] transition-colors duration-300">
                                {ch.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}