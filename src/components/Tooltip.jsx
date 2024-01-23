import React from 'react';

const Tooltip = ({ content }) => {
  const tooltipStyle = {
    position: 'absolute',
    backgroundColor: '#2471a3',
    color: '#ffff',
    padding: '5px',
    borderRadius: '5px',
    zIndex: 1
  };

  return (
    <div style={tooltipStyle}>
      <span>{content}</span>
    </div>
  );
};

export default Tooltip;