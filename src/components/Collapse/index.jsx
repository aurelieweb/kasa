import React, { useState } from 'react';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ data }) {
  const [collapsedItems, setCollapsedItems] = useState([]);

  const toggleCollapse = (index) => {
    setCollapsedItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = !newItems[index];
      return newItems;
    });
  };

  return (
    <div className='collapse'>
      {data.map((item, index) => (
        <div key={index} className="collapse__container">
          <div className="collapse__container-header" onClick={() => toggleCollapse(index)}>
            <p>{item.title}</p>
            {collapsedItems[index] ? (
              <FontAwesomeIcon icon={faAngleDown} alt="Collapse" />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} alt="Expand" />
            )}
          </div>
          {!collapsedItems[index] && (
            <div className="collapse__container-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;