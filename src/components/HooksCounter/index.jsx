import React, { useState } from 'react';


const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandler = () => {
    setCount(count + step);
  };

  const handleChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  console.log('run')


  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={clickHandler}>Click</button>
      <input type="number" value={step} onChange={handleChange} />
    </div>
  );
};

export default Counter;
