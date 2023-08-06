import React from 'react';
import '../../styles/styles.scss';

function Tags(props) {
  const { logement } = props; // Extraction objet logement de la prop passée au composant

  return (
    <div className="logement__header-tags">
      {logement.tags.map((tag, index) => ( // On parcourt le tableau de tags du logement et on affiche chaque tag dans un élément <span>
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}

export default Tags;

