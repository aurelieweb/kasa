import React, { useState } from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ logement }) {
  const { pictures } = logement; // Extratction tableau d'images du logement

  const [currentSlide, setCurrentSlide] = useState(0); // hook d'état useState pour gérer l'index de l'image en cours d'affichage

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1)); // Mise à jour index de l'image en cours pour afficher l'image précédente. Si l'index est déjà à 0, on revient à la dernière image du tableau.
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1)); // Mise à jour index de l'image en cours pour afficher l'image suivante. Si l'index est déjà à la dernière image, on revient à la première image du tableau.
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <div className="slideshow-arrows">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="arrow left"
            onClick={goToPreviousSlide}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow right"
            onClick={goToNextSlide}
          />
        </div>
      )}

      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide}`} /> {/* Affichage image en cours en fonction de l'index actuel */}

      <div className="slideshow-numbers">
        {`${currentSlide + 1}/${pictures.length}`} {/* Affichage numéro de l'image en cours et le nombre total d'images */}
      </div>
    </div>
  );
}

export default Slideshow;
