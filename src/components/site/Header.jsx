import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F8F6F1]/95 backdrop-blur-md shadow-[0_1px_0_#DED8CE]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => go("#accueil")} className="text-left">
            <span className="font-heading text-lg md:text-xl font-medium text-[#292824] tracking-wide">
              Sens & Conscience
            </span>
            <span className="hidden md:inline text-xs text-[#6E6A62] ml-2 font-body">
              par Nuray C. Posse
            </span>
          </button>

          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-[#292824]"
            aria-label="Ouvrir le menu"
          >
            <span className="font-body text-sm tracking-[0.2em] uppercase">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-4" />
              <span className="block w-6 h-px bg-current" />
              <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-4" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#292824]/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Book */}
            <div className="relative w-full max-w-3xl" style={{ perspective: 1600 }}>
              <motion.div
                className="relative bg-[#F8F6F1] rounded-lg shadow-2xl shadow-[#292824]/40 border border-[#DED8CE] overflow-hidden flex flex-col md:flex-row"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.92, rotateY: 32 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                {/* Spine (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#DED8CE] to-transparent" />

                {/* Left page — title page */}
                <div className="flex-1 p-10 md:p-14 flex flex-col justify-center text-center md:text-left border-b md:border-b-0 md:border-r border-[#DED8CE]/40">
                  <p className="font-body text-[10px] tracking-[0.3em] text-[#B49A78] uppercase mb-6">
                    Sens &amp; Conscience
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl font-light text-[#292824] leading-tight mb-6">
                    Le livre<br className="md:hidden" /> de votre vie
                  </h2>
                  <p className="font-heading italic text-[#6E6A62] text-lg leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
                    «&nbsp;Osons renaître une seconde fois, en conscience.&nbsp;»
                  </p>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="w-8 h-px bg-[#B49A78]" />
                    <span className="font-body text-xs tracking-[0.15em] text-[#6E6A62] uppercase">
                      Nuray C. Posse
                    </span>
                  </div>
                </div>

                {/* Right page — table of contents */}
                <div className="flex-1 p-10 md:p-14 flex flex-col">
                  <p className="font-body text-[10px] tracking-[0.3em] text-[#6E6A62] uppercase mb-8 md:mb-10">
                    Sommaire
                  </p>
                  <nav className="flex flex-col flex-1">
                    {chapters.map((c, i) => (
                      <motion.button
                        key={c.href}
                        onClick={() => go(c.href)}
                        className="group flex items-baseline gap-4 py-3.5 border-b border-[#DED8CE]/40 text-left last:border-b-0"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.32 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                      >
                        <span className="font-heading text-sm text-[#B49A78] w-8 shrink-0">
                          {c.num}
                        </span>
                        <span className="font-heading text-lg md:text-xl text-[#292824] group-hover:text-[#7C8873] group-hover:translate-x-1.5 transition-all duration-300">
                          {c.label}
                        </span>
                      </motion.button>
                    ))}
                  </nav>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-8 inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-[#6E6A62] hover:text-[#292824] transition-colors self-center md:self-start"
                  >
                    <X size={14} /> Fermer le livre
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}