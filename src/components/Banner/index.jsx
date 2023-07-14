import React from 'react';
import '../../styles/styles.scss';
import imgBanner from '../../assets/imgBanner.png';

function Banner() {
  return (
    <div className="banner">
      <img className="banner-image" src={imgBanner} alt="Banner" />
      <div className="banner-content">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;