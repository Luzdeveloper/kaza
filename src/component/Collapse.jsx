import React, { useState } from "react";
import "../style/collapse.scss";

export const Collapse = ({ label, content, initialOpen = false }) => {
  // Définir l'état ouvert du composant à l'aide du hook useState
  const [open, setOpen] = useState(initialOpen);

  // Fonction appelée lorsque le bouton est cliqué pour changer l'état ouvert
  const handleClick = () => {
    setOpen((prevOpen) => {
      // Enregistrer le changement d'état dans la console
      console.log(
        `Bouton "${label}": changement d'état de ${
          prevOpen ? "ouvert" : "fermé"
        } à ${!prevOpen ? "ouvert" : "fermé"}`
      );
      return !prevOpen;
    });
  };

  // Enregistrer l'état initial dans la console
  console.log(
    `Bouton "${label}": état initial est ${open ? "ouvert" : "fermé"}`
  );

  // Définir le style de la flèche en fonction de l'état ouvert
  const returnChevron = {
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(180deg)" : "rotate(0)",
  };

  return (
    <div className="collapse" role="region" aria-expanded={open}>
      {/* Bouton pour changer l'état ouvert */}
      <button
        className="button"
        onClick={handleClick}
        aria-controls={`content-${label}`}
      >
        <span className="collapse-label">{label}</span>
        <i className="fa-solid fa-angle-up" style={returnChevron}></i>
      </button>
      {/* Contenu affiché lorsque le bouton est ouvert */}
      {open && (
        <div className="content" id={`content-${label}`}>
          {content}
        </div>
      )}
    </div>
  );
};
