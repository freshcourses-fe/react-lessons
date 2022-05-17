import React, { useState, useEffect } from 'react';
/*
  создать пользовательский хук счетчика кликов
  клики вешайте на window
*/
const Tracker = (props) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prevClick) => prevClick + 1);
  };
  useEffect(() => {
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div style={{ background: 'gray', minHeight: '100vh' }}>
      <p>clicks: {clicks}</p>
    </div>
  );
};

export default Tracker;
