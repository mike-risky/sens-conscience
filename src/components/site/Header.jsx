import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

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
    }, 320);
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center h-16 md:h-20">
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
        className="fixed top-5 right-5 md:top-6 md:right-6 z-[100] w-12 h-12 rounded-full bg-[#F8F6F1]/85 backdrop-blur-md border border-[#DED8CE] shadow-lg shadow-[#292824]/15 flex items-center justify-center text-[#292824] hover:bg-[#F8F6F1] hover:scale-105 transition-all duration-300"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#292824]/45 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* Book */}
            <div className="relative w-full max-w-md" style={{ perspective: 1400 }}>
              {/* Menu (revealed beneath the cover) */}
              <motion.div
                className="relative rounded-lg border border-[#DED8CE] bg-[#F8F6F1] p-8 md:p-10 shadow-2xl shadow-[#292824]/40"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              >
                <nav className="flex flex-col">
                  {chapters.map((c, i) => (
                    <motion.button
                      key={c.href}
                      onClick={() => go(c.href)}
                      className="group flex items-baseline gap-4 py-3 border-b border-[#DED8CE]/40 last:border-b-0 text-left"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    >
                      <span className="font-heading text-sm text-[#B49A78] w-8 shrink-0">
                        {c.num}
                      </span>
                      <span className="font-heading text-2xl md:text-3xl text-[#292824] group-hover:text-[#7C8873] group-hover:translate-x-1.5 transition-all duration-300">
                        {c.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </motion.div>

              {/* Cover that flips open like a book page */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-[#DED8CE] bg-[#EEE9E0] flex items-center justify-center shadow-2xl shadow-[#292824]/40"
                style={{
                  transformOrigin: "left",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -165 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="w-10 h-px bg-[#B49A78]" />
                  <Leaf size={26} className="text-[#7C8873]" />
                  <span className="w-10 h-px bg-[#B49A78]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}