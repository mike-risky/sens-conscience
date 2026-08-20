import React from "react";
import { Link } from "react-router-dom";

const DREAM = "'Dream Avenue', 'Cormorant Garamond', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";
const RALEWAY = "'Raleway', system-ui, sans-serif";

const HERO_IMG = "https://media.base44.com/images/public/6a545a283c8f895ced7a3979/7c4b832d5_generated_image.png";

function Sample({ hFont, hWeight, bFont, bWeight }) {
  return (
    <div>
      <p
        style={{ fontFamily: bFont, fontWeight: bWeight }}
        className="text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3"
      >
        Coach de vie à Sion
      </p>
      <h1
        style={{ fontFamily: hFont, fontWeight: hWeight }}
        className="text-3xl md:text-4xl leading-tight mb-4 text-[#2C2C2C]"
      >
        À quel endroit de votre vie avez-vous cessé d'habiter votre propre existence&nbsp;?
      </h1>
      <h2
        style={{ fontFamily: hFont, fontWeight: hWeight }}
        className="text-xl md:text-2xl mb-3 text-[#2C2C2C]"
      >
        Un accompagnement de vie profondément humain
      </h2>
      <h3
        style={{ fontFamily: hFont, fontWeight: hWeight }}
        className="text-lg md:text-xl mb-4 text-[#4a4838]"
      >
        Observer
      </h3>
      <p
        style={{ fontFamily: bFont, fontWeight: bWeight }}
        className="text-base md:text-lg leading-relaxed mb-4 text-[#4a4838]"
      >
        Je m'appelle Nuray C. Posse. Depuis plus de vingt ans, j'accompagne des êtres humains dans des moments où quelque chose ne fonctionne plus comme avant.
      </p>
      <blockquote
        style={{ fontFamily: bFont, fontWeight: bWeight }}
        className="italic text-sm leading-relaxed mb-5 text-[#7A6952] border-l-2 border-[#C07847] pl-4"
      >
        «&nbsp;Nous naissons une première fois dans les circonstances. Osons renaître une seconde fois, en conscience.&nbsp;»
      </blockquote>
      <span className="inline-block px-6 py-3 rounded-full bg-[#C07847] text-white text-sm">
        Prendre rendez-vous
      </span>
    </div>
  );
}

function OptionPanel({ index, label, desc, bg, ...sampleProps }) {
  return (
    <article className={`${bg} px-6 md:px-12 py-12 md:py-16`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-heading text-2xl text-[#C07847]">{index}</span>
          <h2 className="font-heading text-2xl md:text-3xl text-[#2C2C2C]">{label}</h2>
        </div>
        <p className="font-body text-sm text-[#7A6952] mb-8 max-w-xl">{desc}</p>
        <Sample {...sampleProps} />
      </div>
    </article>
  );
}

export default function TypographyShowcase() {
  return (
    <div className="bg-[#F2EEE4] min-h-screen">
      <header className="px-6 md:px-12 pt-16 pb-10 text-center border-b border-[#D6CDC0]">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3">
            Comparaison typographique
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] mb-4">
            Sobre et élégante, mais pas fragile
          </h1>
          <p className="font-body text-sm md:text-base text-[#7A6952] leading-relaxed">
            Trois pistes pour équilibrer élégance, présence et confort de lecture. Le logo et les éléments très identitaires gardent <em>Dream Avenue</em>. Dites-moi laquelle vous parle le plus — je l'applique sur tout le site.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 font-body text-sm text-[#C07847] hover:underline"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </header>

      <OptionPanel
        index="01"
        label="Actuelle (référence)"
        desc="Dream Avenue pour les titres, Raleway 400 pour le corps. Élégante, mais fine à l'écran — surtout sur téléphone."
        bg="bg-[#F2EEE4]"
        hFont={DREAM}
        hWeight={400}
        bFont={RALEWAY}
        bWeight={400}
      />

      <OptionPanel
        index="02"
        label="Cormorant Garamond — 500"
        desc="Cormorant Garamond pour les titres (serif élégant, plus de corps que Dream Avenue), Raleway 400 pour le corps. Sobre, présente, immédiatement lisible."
        bg="bg-white"
        hFont={CORMORANT}
        hWeight={500}
        bFont={RALEWAY}
        bWeight={400}
      />
      <OptionPanel
        index="03"
        label="Cormorant Garamond — 600"
        desc="Cormorant Garamond en graisse 600 pour les titres (présence affirmée), Raleway 400 pour le corps. Caractère plus marqué, très lisible."
        bg="bg-[#EDE7DA]"
        hFont={CORMORANT}
        hWeight={600}
        bFont={RALEWAY}
        bWeight={400}
      />

      <section className="px-6 md:px-12 py-12 md:py-16 bg-[#D6CDC0]/40 border-t border-[#D6CDC0]">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.2em] text-[#87856C] uppercase mb-3 text-center">
            Contraste sur photographie
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-[#2C2C2C] mb-3 text-center">
            Quand le texte vit sur une image
          </h2>
          <p className="font-body text-sm text-[#7A6952] mb-8 text-center max-w-xl mx-auto">
            Le même texte, deux traitements. À gauche l'état actuel (fin, peu contrasté). À droite : graisse renforcée et ombre portée pour garder l'élégance sans fatiguer l'œil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E22]/10 to-[#3A2E22]/30" />
              <div className="relative h-full flex items-center justify-center px-6 text-center">
                <p style={{ fontFamily: DREAM, fontWeight: 300 }} className="text-white/75 text-xl leading-tight">
                  À quel endroit de votre vie avez-vous cessé d'habiter votre propre existence&nbsp;?
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E22]/25 to-[#3A2E22]/45" />
              <div className="relative h-full flex items-center justify-center px-6 text-center">
                <p
                  style={{ fontFamily: CORMORANT, fontWeight: 600 }}
                  className="text-white text-xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                >
                  À quel endroit de votre vie avez-vous cessé d'habiter votre propre existence&nbsp;?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center border-t border-[#D6CDC0]">
        <p className="font-body text-xs text-[#87856C]">
          Page de comparaison — aucun changement appliqué au site tant que vous n'avez pas choisi.
        </p>
      </footer>
    </div>
  );
}