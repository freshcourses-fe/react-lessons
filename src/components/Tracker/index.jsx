import React, { useState } from 'react';

const Tracker = (props) => {
  const [clicks, setClicks] = useState(0);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      style={{ background: 'gray', minHeight: '100vh' }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <p>clicks: {clicks}</p>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
    </div>
  );
};

export default Tracker;
