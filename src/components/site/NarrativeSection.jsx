import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function NarrativeSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-28 md:py-40 bg-[#F2EEE4]">
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-heading text-2xl md:text-3xl text-[#2C2C2C] leading-snug mb-10">
            Et si vous ne vous étiez pas perdu…
          </p>
          <p className="font-heading text-2xl md:text-3xl text-[#C07847] leading-snug mb-14">
            Et si vous vous étiez simplement abandonné quelque part en chemin&nbsp;?
          </p>

          <div className="space-y-6 font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
            <p>
              Nous naissons. Nous grandissons. Nous traversons des joies, des blessures, des ruptures, des épreuves. Puis un jour, sans même nous en rendre compte, nous cessons peu à peu d'habiter notre propre vie. Nous faisons ce qu'il faut. Nous assumons nos responsabilités. Nous tenons bon. Nous nous adaptons. Nous survivons. Et cette survie finit par ressembler à une vie.
            </p>
            <p>
              Pourtant, quelque chose en nous continue de murmurer qu'il existe un autre chemin.
            </p>
            <p>
              Je ne crois pas que nous soyons brisés. Je crois qu'à un moment précis de notre histoire, nous avons cessé d'être profondément nous-mêmes. Par peur. Par loyauté. Pour protéger quelqu'un. Pour être aimé. Pour répondre aux attentes. Parce que nous n'avions tout simplement pas d'autre choix.
            </p>
            <p>
              Cet endroit existe. Et tant qu'il demeure invisible, nous répétons les mêmes schémas, les mêmes relations, les mêmes épuisements, avec l'impression de tourner en rond malgré tous nos efforts.
            </p>
          </div>

          <p className="font-heading text-xl md:text-2xl text-[#2C2C2C] mt-14 mb-10">
            Mon accompagnement commence ici.
          </p>

          <div className="space-y-6 font-body text-[#4a4838] text-base md:text-lg leading-relaxed">
            <p>
              Ensemble, nous faisons l'état des lieux de votre existence. Nous remontons le fil de votre histoire jusqu'à l'endroit où vous vous êtes quitté. Nous identifions ce qui vous appartient réellement, ce qui relève des circonstances, des autres ou de votre histoire.
            </p>
            <p>
              Puis, pas à pas, nous vous ramenons vers vous-même. Non pas pour devenir quelqu'un d'autre. Mais pour retrouver celui ou celle que vous n'avez jamais cessé d'être.
            </p>
            <p>
              Je ne vous dirai pas comment vivre votre vie. Je marcherai à vos côtés jusqu'à ce que vous retrouviez votre propre axe, votre lucidité et la liberté de reprendre les rênes de votre existence avec dignité.
            </p>
          </div>

          <p className="font-body italic text-[#7A6952] text-base md:text-lg leading-relaxed mt-12">
            Si, en lisant ces lignes, vous avez le sentiment qu'elles parlent de vous, alors notre rencontre n'est peut-être pas un hasard.
          </p>

          <p className="font-heading text-xl md:text-2xl text-[#C07847] mt-14 text-center">
            Retrouver du sens. Revenir à soi. Reprendre les rênes de sa vie.
          </p>
        </div>
      </div>
    </section>
  );
}