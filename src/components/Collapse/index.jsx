import React, { useState } from 'react';
import '../../styles/styles.scss';
import arrowUpIcon from '../../assets/arrow_back_ios-24px 2.png';
import arrowDownIcon from '../../assets/arrow_back_ios-24px 3.png';

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
    <div>
      {data.map((item, index) => (
        <div key={index} className="collapse">
          <div className="collapse-header" onClick={() => toggleCollapse(index)}>
            {collapsedItems[index] ? (
              <img src={arrowDownIcon} alt="Collapse" />
            ) : (
              <img src={arrowUpIcon} alt="Expand" />
            )}
            <h2>{item.title}</h2>
          </div>
          {!collapsedItems[index] && (
            <div className="collapse-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
