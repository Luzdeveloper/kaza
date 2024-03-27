import React from "react";
import "../style/cards.css";
import { AnnounceCard } from "./Announcecard";

export function Card({ annonceData }) {
  console.log("Annonce data dans Card :", annonceData);

  if (Array.isArray(annonceData) && annonceData.length > 0) {
    const announcecards = annonceData.map((annonce) => (
      <AnnounceCard
        key={annonce.id}
        cover={annonce.cover}
        titre={annonce.title}
        id={annonce.id}
      />
    ));

    return (
      <section className="card-container">
        {/* Vérifier si la liste des annonces est vide avant de l'afficher */}
        {annonceData.length > 0 ? (
          announcecards
        ) : (
          <p>Aucune annonce est disponible</p>
        )}
      </section>
    );
  }
}

export default Card;
