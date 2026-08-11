import React from "react";
import LegalLayout from "@/components/site/LegalLayout";

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" subtitle="Informations légales">
      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>Nuray C. Posse</strong>, coach de vie indépendante,
          exerçant à Sion, dans le canton du Valais (Suisse).
        </p>
        <p className="mt-3">
          Adresse professionnelle : Sion, Valais, Suisse.<br />
          Téléphone : +41 79 444 69 77<br />
          E-mail : nuray.posse@gmail.com
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Hébergement</h2>
        <p>
          Le site est hébergé par Base44, prestataire d'hébergement web. Les coordonnées de
          l'hébergeur peuvent être obtenues sur simple demande à l'éditeur.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, logo, mises en page) est la
          propriété de Nuray C. Posse, sauf mention contraire. Toute reproduction, représentation,
          modification ou diffusion, totale ou partielle, est interdite sans autorisation écrite
          préalable.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Secret professionnel</h2>
        <p>
          Nuray C. Posse exerce dans le respect du secret professionnel. Toute personne qui la
          consulte bénéficie d'une confidentialité absolue : rien de ce qui est partagé au sujet de
          sa vie, de son histoire ou de sa situation ne sera divulgué à un tiers, en quelque forme
          que ce soit. La coach est tenue au secret professionnel et s'engage à protéger l'intimité
          et la vie privée de chaque personne accompagnée.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site sont fournies à titre indicatif. L'éditeur ne saurait
          être tenu responsable des erreurs, d'une indisponibilité du site ou de la présence de liens
          vers des sites externes dont elle ne contrôle pas le contenu. Le coaching proposé ne se
          substitue en aucun cas à un suivi médical, psychologique ou thérapeutique.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Droit applicable et for juridique</h2>
        <p>
          Le présent site et les présentes mentions légales sont soumis au droit suisse. En cas de
          litige, et après toute tentative de résolution amiable, le for juridique compétent est
          celui du Valais — Sion.
        </p>
      </section>
    </LegalLayout>
  );
}