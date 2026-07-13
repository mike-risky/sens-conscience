import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const chapters = [
  { num: "I", label: "Accueil", href: "#accueil" },
  { num: "II", label: "Accompagnements", href: "#accompagnements" },
  { num: "III", label: "Mon approche", href: "#approche" },
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
      {/* Floating brand bubble — a third of the page, fades out on first scroll */}
      <motion.div
        initial={false}
        animate={{
          opacity: scrolled ? 0 : 1,
          y: scrolled ? -12 : 0,
          scale: scrolled ? 0.95 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-3 md:top-4 left-4 md:left-6 z-50 w-fit sm:w-1/3 max-w-[58vw] sm:max-w-md"
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <button
          onClick={() => go("#accueil")}
          className="w-full flex items-baseline justify-start md:justify-between gap-3 px-5 py-2.5 rounded-full bg-[#F8F6F1]/85 backdrop-blur-md border border-[#DED8CE] shadow-lg shadow-[#292824]/15 hover:bg-[#F8F6F1] transition-all duration-300"
        >
          <span className="font-heading text-base md:text-lg font-medium text-[#292824] tracking-wide whitespace-nowrap">
            Sens & Conscience
          </span>
          <span className="hidden md:inline text-xs text-[#6E6A62] font-body truncate">
            par Nuray C. Posse
          </span>
        </button>
      </motion.div>

      {/* Floating trigger — aligned with the brand, stays clear of the header line */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="fixed top-2 md:top-4 right-5 md:right-6 z-[100] w-12 h-12 rounded-full bg-[#F8F6F1]/85 backdrop-blur-md border border-[#DED8CE] shadow-lg shadow-[#292824]/15 flex items-center justify-center text-[#292824] hover:bg-[#F8F6F1] hover:scale-105 transition-all duration-300"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#292824]/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Floating panel — roughly a third of the screen */}
            <motion.div
              className="absolute top-20 md:top-24 right-5 md:right-6 w-[90vw] sm:w-1/3 max-w-md"
              initial={{ opacity: 0, y: -14, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-[#F8F6F1] border border-[#DED8CE] rounded-lg shadow-2xl shadow-[#292824]/30 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#DED8CE]">
                  <BookOpen size={18} className="text-[#7C8873]" />
                  <span className="font-body text-xs tracking-[0.2em] text-[#6E6A62] uppercase">
                    Sommaire
                  </span>
                </div>
                <nav className="flex flex-col">
                  {chapters.map((c, i) => (
                    <motion.button
                      key={c.href}
                      onClick={() => go(c.href)}
                      className="group flex items-baseline gap-3 py-2.5 border-b border-[#DED8CE]/40 last:border-b-0 text-left"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                    >
                      <span className="font-heading text-sm text-[#B49A78] w-6 shrink-0">
                        {c.num}
                      </span>
                      <span className="font-heading text-xl md:text-2xl text-[#292824] group-hover:text-[#7C8873] group-hover:translate-x-1 transition-all duration-300">
                        {c.label}
                      </span>
                    </motion.button>
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