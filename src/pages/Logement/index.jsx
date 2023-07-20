import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import HeaderLogement from '../../components/HeaderLogement';
import logementData from '../../data/logements.json';
import Collapse from '../../components/Collapse';

function Logement() {
  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace={true} />
  }

  return (
    <div className="main logement-page">
      <Slideshow logement={logement} />
      <HeaderLogement logement={logement} />
        <Collapse className='collapse-row'
          data={[
            { title: 'Description', content: logement.description },
            {
              title: 'Équipements',
              content: (
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
