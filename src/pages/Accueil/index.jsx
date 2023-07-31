import React from 'react';
import Banner from '../../components/Banner';
import GalleryLogement from '../../components/GalleryLogement';
import homeBannerImg from '../../assets/imgBanner.png';

function Accueil () {
  return (
    <div className='main'>
      <Banner image={homeBannerImg} />
      <GalleryLogement />
    </div>
  );
};

export default Accueil;
  