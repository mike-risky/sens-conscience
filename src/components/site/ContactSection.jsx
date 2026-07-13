import React, { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Phone, Mail, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) return;
    setSending(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
  };

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
            Premier échange
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-[#292824] mb-6">
            Contacter votre coach de vie à Sion
          </h2>
          <p className="font-body text-[#6E6A62] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Vous traversez une période difficile ou une transition ? Écrivez à Nuray pour lui présenter brièvement votre situation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
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
                Appeler Nuray
              </a>
              <a
                href="mailto:nuray.posse@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#DED8CE] text-[#292824] font-body text-sm hover:bg-[#EEE9E0] transition-all duration-300"
              >
                <Mail size={15} />
                Envoyer un e-mail
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-white rounded-lg p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#7C8873]/10 flex items-center justify-center mx-auto mb-5">
                  <Check size={28} className="text-[#7C8873]" />
                </div>
                <h3 className="font-heading text-xl text-[#292824] mb-3">
                  Votre message a été envoyé
                </h3>
                <p className="font-body text-sm text-[#6E6A62]">
                  Nuray reviendra vers vous dans les meilleurs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 space-y-5">
                <div>
                  <label className="font-body text-xs text-[#6E6A62] mb-1.5 block">Prénom et nom</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#DED8CE] pb-2 font-body text-[#292824] text-sm focus:outline-none focus:border-[#7C8873] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-[#6E6A62] mb-1.5 block">Adresse e-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#DED8CE] pb-2 font-body text-[#292824] text-sm focus:outline-none focus:border-[#7C8873] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-[#6E6A62] mb-1.5 block">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#DED8CE] pb-2 font-body text-[#292824] text-sm focus:outline-none focus:border-[#7C8873] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-[#6E6A62] mb-1.5 block">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#DED8CE] pb-2 font-body text-[#292824] text-sm focus:outline-none focus:border-[#7C8873] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-[#6E6A62] mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#DED8CE] pb-2 font-body text-[#292824] text-sm focus:outline-none focus:border-[#7C8873] transition-colors resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 accent-[#7C8873]"
                  />
                  <span className="font-body text-xs text-[#6E6A62] leading-relaxed">
                    J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la politique de confidentialité.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!form.consent || sending}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7C8873] text-white font-body font-medium text-sm hover:bg-[#6b7763] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}