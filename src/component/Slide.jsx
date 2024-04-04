import React, { useState } from "react";
import "../style/slide.css";

// Définition du composant Slide qui prend un tableau de photos en paramètre
export function Slide({ pictures }) {
  // Déclaration d'un état local pour stocker l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Définition d'une fonction pour gérer le clic sur le bouton précédent
  const handlePrevClick = () => {
    // Mise à jour de l'état currentSlide en boucle pour afficher la diapositive précédente
    setCurrentSlide((currentSlide - 1 + pictures.length) % pictures.length);
  };

  // Définition d'une fonction pour gérer le clic sur le bouton suivant
  const handleNextClick = () => {
    // Mise à jour de l'état currentSlide en boucle pour afficher la diapositive suivante
    setCurrentSlide((currentSlide + 1) % pictures.length);
  };

  // Rendu du composant
  return (
    <div className="slide-container">
      {/* Affichage des boutons précédent et suivant uniquement si il y a plus d'une photo */}
      {pictures.length > 1 && (
        <div className="arrow">
          <button className="prev" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      {/* Affichage des diapositives */}
      {pictures.map((picture, index) => (
        <div
          key={index}
          className="slide"
          style={{ display: index === currentSlide ? "block" : "none" }}
        >
          <img src={picture} alt="Diaporama" />
        </div>
      ))}

      {/* Affichage du compteur de diapositives uniquement si il y a plus d'une photo */}
      {pictures.length > 1 && (
        <div className="counter">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}
