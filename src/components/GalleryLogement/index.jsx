import React from 'react';
import '../../styles/styles.scss';
import logementData from '../../data/logements.json';
import Card from './../Card'



function GalleryLogement() {
  return (
    <div className='gallery-logement'>
     {logementData.map(logement => (
        <Card key={logement.id} logement={logement} />
      ))}
     
  </div>  
  );
}

export default GalleryLogement ;