import React from 'react';
import '../../styles/styles.scss';

function Tags(props) {
  const { logement } = props;

  return (
    <div className="logement__header-tags">
      {logement.tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
