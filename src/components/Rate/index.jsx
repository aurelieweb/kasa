import React from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rate(props) {
  const { logement } = props;
  const rating = parseInt(logement.rating);//conversion en nombre entier pr itérer

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? 'star-selected' : ''; // Si index est inférieur ou égal à la note, la classe 'star-selected' sera appliquée, sinon, la classe  vide.
      stars.push(<FontAwesomeIcon icon={faStar} className={starClassName} key={i} />); // On ajoute icône étoile à l'array des étoiles en fonction de la note.
    }
    return stars; // On renvoie l'array des étoiles.
  };

  return <div className="rate">{renderStars()}</div>; // Génération des étoiles
}

export default Rate;
