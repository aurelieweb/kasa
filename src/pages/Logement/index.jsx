import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import logementData from '../../data/logements.json';

function Logement() {
  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  return (
    <div className="main">
      <Slideshow logement={logement} />
    </div>
  );
}

export default Logement;
