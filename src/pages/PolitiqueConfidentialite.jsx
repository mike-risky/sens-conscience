import React from "react";
import LegalLayout from "@/components/site/LegalLayout";

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" subtitle="Protection des données">
      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est <strong>Nuray C. Posse</strong>, coach de vie
          indépendante, Sion, Valais (Suisse). Elle peut être jointe aux coordonnées suivantes :
          +41 79 444 69 77 — nuray.posse@gmail.com.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Données traitées</h2>
        <p>
          Dans le cadre de son activité, Nuray C. Posse est susceptible de traiter les données
          suivantes : nom, coordonnées (téléphone, e-mail) et toute information que vous choisissez
          de lui communiquer spontanément lors d'un échange ou d'un accompagnement.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Finalités</h2>
        <p>
          Les données sont collectées uniquement pour répondre à vos demandes, organiser les
          rendez-vous et assurer le suivi de l'accompagnement. Aucune donnée n'est utilisée à des fins
          commerciales, publicitaires ou de prospection.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Secret professionnel et confidentialité</h2>
        <p>
          Nuray C. Posse est tenue au secret professionnel. Toute personne qui la consulte bénéficie
          d'une confidentialité absolue : rien de ce qui est partagé au sujet de sa vie, de son
          histoire ou de sa situation ne sera divulgué à un tiers. Les éléments personnels recueillis
          dans le cadre de l'accompagnement restent strictement confidentiels et ne font l'objet d'aucune
          communication, d'aucun partage et d'aucune revente.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Conservation</h2>
        <p>
          Les données ne sont conservées que pour la durée strictement nécessaire à l'accomplissement
          des finalités décrites, et au plus tard jusqu'à la fin de l'accompagnement. Elles peuvent
          être supprimées à tout moment à votre demande.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Vos droits</h2>
        <p>
          Vous disposez d'un droit d'accès, de rectification et de suppression des données vous
          concernant. Pour exercer ces droits, il suffit d'adresser une demande à Nuray C. Posse par
          téléphone ou par e-mail. Votre demande sera traitée sans retard.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Sécurité</h2>
        <p>
          Des mesures raisonnables sont mises en œuvre pour protéger vos données contre la perte, l'accès
          non autorisé ou la divulgation. Compte tenu de la confidentialité inhérente à l'activité, un
          soin particulier est apporté à la protection de votre vie privée.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-[#2C2C2C] mb-3">Droit applicable et for juridique</h2>
        <p>
          La présente politique de confidentialité est soumise au droit suisse. En cas de litige, et
          après toute tentative de résolution amiable, le for juridique compétent est celui du
          Valais — Sion.
        </p>
      </section>
    </LegalLayout>
  );
}