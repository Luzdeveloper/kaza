import React, { useState, useEffect } from "react";

export function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //utilisation de useEffect pour gerer le changement de diapositive

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    //Affichez une diapo specifique
    const showSlide = (index) => {
      //Parcourir les diapo et les masquer et afficher seulement celle qui correspond
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
      setCurrentSlide(index);
    };
    //Affichez diapo prececdente
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };
    //Affichez diapo suivante
    const NextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    };
    // diapo initial affiché
    showSlide(currentSlide);
    //Ajout des ecouteurs d'évenment
    document?.querySelector(".prev")?.addEventListener("click", prevSlide);
    document?.querySelector(".next")?.addEventListener("click", NextSlide);

    // Fonction pour supprimer les écouteurs d'événements lorsque le composant n'est plus utilisé
    return () => {
      if (slides.length > 1) {
        document
          ?.querySelector(".prev")
          ?.removeEventListener("click", prevSlide);

        document
          ?.querySelector(".next")
          ?.removeEventListener("click", NextSlide);
      }
    };
  }, [currentSlide]);

  // Rendu du conteneur de diapositives
  return (
    <div className="slide-container">
      {/* Si il y a plus d'une photo, afficher les flèches de navigation */}
      {pictures.length > 1 && (
        <div className="arrow">
          <button className="prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
      {/* Parcourir les photos et afficher chacune d'elles en tant que diapositive */}
      {pictures.map((picture, index) => (
        <div key={index} className="slide">
          <img src={picture} alt="Diaporama" />
        </div>
      ))}
      {/* Si il y a plus d'une photo, afficher le compteur de diapositives */}
      {pictures.length > 1 && (
        <div className="counter">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}
