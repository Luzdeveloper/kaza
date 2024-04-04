import { useParams } from "react-router-dom";
import { Error } from "../Pages/Erreur404.jsx";
import { Collapse } from "../component/Collapse.jsx";
import { Rating } from "../component/Rates.jsx";
import { Slide } from "../component/Slide.jsx";
import { Tags } from "../component/Tag.jsx";
import annoncesData from "../data/logement.json";
import "../style/announcementdetail.css";

export function FicheLogement() {
  const { id } = useParams();
  const annonce = annoncesData.find((annonce) => annonce.id === id); // On trouve l'annonce grâce a l'id

  if (!annonce) {
    return <Error />; // si annonce non trouver affiche erreur 404
  }

  const titre = annonce.title; // on recupere le titre de l'annonce
  const location = annonce.location; // on recupere la localisation
  const nameHost = annonce.host.name; // on récupère le nom de l'hôte
  const pictureHost = annonce.host.picture; // on récupère la photo de l'hôte
  const tags = annonce.tags; // on récupère les tags de l'annonce
  const equipment = annonce.equipments; // on recu^pre les equipement enumérés dans l'annonce
  const description = annonce.description; // on recupere la description de l'annonce

  return (
    <div className="annonce-details">
      <Slide pictures={annonce.pictures} />
      <section className="annonce-info">
        <div className="annonce-title">
          <h2>{titre}</h2>
          <p>{location}</p>
        </div>
        <Tags tags={tags} />
        <div className="host-info">
          <div className="host-name">
            <p>{nameHost}</p>
            <img src={pictureHost} alt="photo de l'hôte" />
          </div>
          <Rating />
        </div>
      </section>
      <section className="annonce-collapse">
        <Collapse label="Description" content={description} />
        <Collapse
          label="Equipements"
          content={
            <ul>
              {equipment.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </div>
  );
}
