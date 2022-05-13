import React, { useState, useEffect } from 'react';

const Tracker = (props) => {
  const [clicks, setClicks] = useState(0);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // useEffect(function componentDidMountAndUpdate() {
  //   console.log('render');
  //   document.body.addEventListener('mousemove', handleMouseMove);

  //   return function componentWillUnmount() {
  //     console.log('unmount');
  //     document.body.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  const handleClick = () => {
    setClicks((prevClick) => prevClick + 1);
  };
  useEffect(() => {
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  // не правильно
  // if(clicks > 10) {
  //   useEffect(()=> {

  //   })
  // }

  // правильно
  useEffect(() => {
    if (clicks > 10) {
    }
  });

  console.log('render');

  return (
    <div style={{ background: 'gray', minHeight: '100vh' }}>
      <p>clicks: {clicks}</p>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
    </div>
  );
};

//не надо использовать хуки в обычных функция
// function test () {
//   const [value, setValue] = useState();
// }

export default Tracker;
