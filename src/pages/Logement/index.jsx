import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import HeaderLogement from '../../components/HeaderLogement';
import logementData from '../../data/logements.json';
import Collapse from '../../components/Collapse';

function Logement() {
  // Utilisation de la fonction useParams() pour récupérer le paramètre "id" de l'URL
  const { id } = useParams();

  // Recherche du logement dans le fichier logements.json en utilisant l'id récupéré de l'URL
  const logement = logementData.find((item) => item.id === id);

  // Vérification si le logement existe, sinon redirige vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" replace={true} />
  }

  // Affichage du composant Logement
  return (
    <div className="main logement-page">
      {/* Affichage du composant Slideshow avec les images du logement */}
      <Slideshow logement={logement} />

      {/* Affichage du composant HeaderLogement avec les détails du logement */}
      <HeaderLogement logement={logement} />

      {/* Affichage du composant Collapse avec les informations du logement */}
      <Collapse className='collapse-row'
        data={[
          { title: 'Description', content: logement.description },
          {
            title: 'Équipements',
            content: (
              // Affichage de la liste des équipements du logement
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Logement;

