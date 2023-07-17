import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import ErrorImg from '../../assets/404.png'

function Error() {
  return (
    <div className='main'>
      <div className='error'>
        <img src={ErrorImg} alt="Error" className="error-img" />
        <p className='error-msg'>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner à la page d’accueil</Link>
      </div>
    </div>
  );
}

export default Error;
