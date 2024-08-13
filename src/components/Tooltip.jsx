import React from 'react';
import { FrontSide } from 'three';

const Tooltip = ({ content }) => {
  const tooltipStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 140, 255, 0.9)',
    color: 'white',
    borderRadius: '5px',
    //border: '2px solid rgba(0, 100, 180, 0.9)',
    zIndex: 1
  };

  return (
    <div style={tooltipStyle}>
      <span>{content}</span>
    </div>
  );
};

export default Tooltip;