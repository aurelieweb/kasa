import React, { useState } from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Composant Collapse
function Collapse({ data }) {
  // Utilisation du hook useState pour gérer l'état de plié/déplié des éléments
  const [collapsedItems, setCollapsedItems] = useState(data.map(() => true));

  // Fonction pour basculer l'état de plié/déplié lors du clic sur le titre
  const toggleCollapse = (index) => {
    setCollapsedItems((prevItems) => {
      // Création d'un nouveau tableau pour ne pas muter directement l'état
      const newItems = [...prevItems];
      // Inversion de l'état pour l'élément à l'index donné
      newItems[index] = !newItems[index];
      // Retour du nouveau tableau mis à jour
      return newItems;
    });
  };

  return (
    <div className='collapse'>
      {/* Boucle map pour afficher chaque élément pliable */}
      {data.map((item, index) => (
        <div key={index} className="collapse__container">
          {/* Div du titre cliquable */}
          <div className="collapse__container-header" onClick={() => toggleCollapse(index)}>
            <p>{item.title}</p>
            {/* Affichage de l'icône vers le bas ou vers le haut en fonction de l'état */}
            {collapsedItems[index] ? (
              <FontAwesomeIcon icon={faAngleDown} alt="Collapse" />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} alt="Expand" />
            )}
          </div>
          {/* Contenu de l'élément affiché si non plié */}
          {!collapsedItems[index] && (
            <div className="collapse__container-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;

