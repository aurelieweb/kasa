import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import AproposBannerImg from '../../assets/imgBanner2.png';
import collapseData from '../../data/collapseData.json';

function APropos() {
  return (
    <div className='main a-propos-page'>
      <Banner image={AproposBannerImg} />
      <Collapse data={collapseData} />
    </div>
  );
}

export default APropos;

