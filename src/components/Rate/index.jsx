import React from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Rate(props) {
  const { logement } = props;
  const rating = parseInt(logement.rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? 'star-selected' : '';
      stars.push(<FontAwesomeIcon icon={faStar} className={starClassName} key={i} />);
    }
    return stars;
  };

  return <div className="rate">{renderStars()}</div>;
}

export default Rate;

