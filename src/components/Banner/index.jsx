import React from 'react';
import '../../styles/styles.scss';

function Banner({image}) {
  return (
    <div className="banner">
      <img className="banner-image" src={image} alt="Banner" />
      <div className="banner-content">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;