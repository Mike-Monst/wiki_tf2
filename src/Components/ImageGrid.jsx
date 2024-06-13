/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../index.css'; // Asegúrate de importar el archivo CSS

const ImageGrid = ({ classes, setSelectedClass }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index, cls) => {
    setClickedIndex(index);
    setSelectedClass(cls);
  };

  return (
    <div className="flex-container">
      {classes.map((cls, index) => (
        <div
          key={index}
          className={`image-container ${hoveredIndex === index || clickedIndex === index ? 'hover' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index, cls)}
        >
          <img
            src={cls.image}
            alt={`image-${index}`}
            className={`grid-image ${clickedIndex === index ? 'clicked' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

