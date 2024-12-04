import React from 'react';

const Slide = ({ title, content, img }) => {
  return (
    <div className="slide">
      <h2>{title}</h2>
      {img && <img src={img} alt={title} />}
      <p>{content}</p>
    </div>
  );
};

export default Slide;
