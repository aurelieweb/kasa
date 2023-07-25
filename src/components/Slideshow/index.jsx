import React, { useState } from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ logement }) {
  const { pictures } = logement;
  console.log(pictures);

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
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

      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide}`} />

      <div className="slideshow-numbers">
        {`${currentSlide + 1}/${pictures.length}`}
      </div>
    </div>
  );
}

export default Slideshow;
