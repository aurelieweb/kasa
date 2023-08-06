import React from 'react';
import '../../styles/styles.scss';
import logementData from '../../data/logements.json';
import Card from './../Card'



function GalleryLogement() {
  return (
    <div className='gallery-logement'>
 {/* Utilisation de la méthode map pour parcourir chaque logement dans logementData */}
     {logementData.map(logement => (
      // Rendu du composant Card avec les propriétés logement passées en tant que prop
        <Card key={logement.id} logement={logement} />
      ))}
     
  </div>  
  );
}

export default GalleryLogement ;