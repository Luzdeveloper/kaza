import { Banner } from "../component/Banner";
import { Collapse } from "../component/Collapse";
import "../style/apropos.scss";

export function Apropos() {
  return (
    <div className="apropos">
      <Banner image="src/assets/banner1.png" />
      <Collapse
        label="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logement, et toutes les informations sont régulièrement
            vérifiées par nos équipes"
      />

      <Collapse
        label="Respect"
        content="La bienveillance fait parti des valeurs fondatrice de Kasa. Tout comportement 
      discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
      />

      <Collapse
        label="Service"
        content="La bienveillance fait parti des valeurs fondatrice de Kasa. Tout comportement 
      discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
      />

      <Collapse
        label="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
        chaque logement correspond aux critères de sécurité établis par nos services.
        En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes 
        de vérifier que les standarts sont bien respectés.Nous organisons également des ateliers
        sur la sécurité domestique pour nos hôtes"
      />
    </div>
  );
}
