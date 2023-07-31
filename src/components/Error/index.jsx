import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import ErrorImg from '../../assets/404.png'

function Error() {
  return (
    <div className='main error-page'>
      <div className='error'>
        <div className='error__div'>
          <img src={ErrorImg} alt="Error" className="error__div-img" />
          <p className='error__div-msg'>Oups ! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="error-link" to="/">Retourner à la page d’accueil</Link>
      </div>
    </div>
  );
}

export default Error;
