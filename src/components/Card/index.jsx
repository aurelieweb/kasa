import React from 'react';
import '../../styles/styles.scss';
import { Link } from 'react-router-dom';


function Card(props) {
  const { logement } = props;

  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
      <div className="card">
        <img className="card__image" src={logement.cover} alt="logement" />
        <div className="card__content">
          <h2 className="card__content-text">{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
}


export default Card;
