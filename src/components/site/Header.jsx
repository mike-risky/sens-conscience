import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    }, 300);
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
        </div>
      </header>

      {/* Floating trigger — always available, top right */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="fixed top-5 right-5 md:top-6 md:right-6 z-[90] w-12 h-12 rounded-full bg-[#F8F6F1]/85 backdrop-blur-md border border-[#DED8CE] shadow-lg shadow-[#292824]/15 flex items-center justify-center text-[#292824] hover:bg-[#F8F6F1] hover:scale-105 transition-all duration-300"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Click catcher */}
            <div className="absolute inset-0" onClick={() => setOpen(false)} />

            {/* Menu bubble */}
            <motion.div
              className="absolute top-20 right-4 md:right-6 w-[270px] max-w-[calc(100vw-2rem)] relative"
              style={{ perspective: 1200 }}
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Content (revealed) */}
              <motion.div
                className="relative rounded-lg border border-[#DED8CE] bg-[#F8F6F1] p-5 shadow-2xl shadow-[#292824]/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.35 }}
              >
                <nav className="flex flex-col">
                  {chapters.map((c) => (
                    <button
                      key={c.href}
                      onClick={() => go(c.href)}
                      className="group flex items-baseline gap-3 py-2.5 border-b border-[#DED8CE]/40 last:border-b-0 text-left"
                    >
                      <span className="font-heading text-xs text-[#B49A78] w-5 shrink-0">
                        {c.num}
                      </span>
                      <span className="font-heading text-lg text-[#292824] group-hover:text-[#7C8873] group-hover:translate-x-1 transition-all duration-300">
                        {c.label}
                      </span>
                    </button>
                  ))}
                </nav>
              </motion.div>

              {/* Left cover half — opens outward */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 rounded-l-lg bg-[#EEE9E0] border border-[#DED8CE] border-r-[#B49A78]/50"
                style={{ transformOrigin: "right", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -115 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Right cover half — opens outward */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 rounded-r-lg bg-[#EEE9E0] border border-[#DED8CE] border-l-0"
                style={{ transformOrigin: "left", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 115 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}