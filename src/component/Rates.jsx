import { useParams } from "react-router-dom";
import annonces from "../data/logement.json";
import React, { useState, useEffect } from "react";
import "../style/rates.css";

// Définition du composant Rating
export function Rating() {
  // Récupération de l'identifiant de l'annonce à partir de l'URL à l'aide du hook useParams
  const { id } = useParams();

  // Création d'un état local pour stocker la valeur de l'évaluation
  const [rating, setRating] = useState(0);

  // Utilisation du hook useEffect pour mettre à jour la valeur de l'évaluation lorsque l'identifiant de l'annonce change
  useEffect(() => {
    // Recherche de l'annonce correspondant à l'identifiant
    const annonce = annonces.find((annonce) => annonce.id === id);

    // Si l'annonce existe, mise à jour de la valeur de l'évaluation
    if (annonce) {
      setRating(annonce.rating);
    }
  }, [id]);

  // Génération d'un tableau d'étoiles en fonction de la valeur de l'évaluation
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa-solid fa-star active-star"></i>);
    } else {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
  }

  // Retour du JSX pour afficher les étoiles
  return <div className="ratings-star">{stars}</div>;
}

export default Rating;
