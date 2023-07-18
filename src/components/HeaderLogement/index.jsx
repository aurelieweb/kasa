import React from 'react';
import '../../styles/styles.scss';
import Tags from './../Tags';
import Rate from'./../Rate';

function HeaderLogement(props) {
  const { logement } = props;
  const { name, picture } = logement.host; // Extraction du nom et de l'image de la propriété host

  return (
    <div className="logement__header">
      <div className="logement__header-details">
        <h2 className="logement__header-title">{logement.title}</h2>
        <div className="logement__header-location">{logement.location}</div>
        <Tags logement={logement} />
      </div>
      <div className="logement__header-profil">
        <div className="logement__header-content">
          <div className="logement__header-name">{name}</div> {/* Affichage du nom de l'hôte */}
          <span className="logement__header-photo">
            <img src={picture} alt="Hôte" /> {/* Affichage de l'image de l'hôte */}
          </span>
        </div>
        <Rate logement={logement} />
      </div>
    </div>
  );
}

export default HeaderLogement;
