import React from "react";
import { Link } from "react-router-dom";
import "../style/announcecard.scss";
export function AnnounceCard({ cover, titre, id }) {
  // Vérifie si les props sont définis
  if (!cover || !titre || !id) {
    return null;
  }

  return (
    <Link to={`/logement/${id}`} className="announce-card">
      <div className="filter"></div>

      <img src={cover} alt={`photo de l'annonce ${titre}`} />

      <p>{titre}</p>
    </Link>
  );
}
