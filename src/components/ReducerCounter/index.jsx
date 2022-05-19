import React, { useReducer } from 'react';
import ACTION_TYPES from './actionTypes';
import reducer from './reducer';

const ReducerCounter = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  const addHandler = () => {
    dispatch({ type: ACTION_TYPES.ADD });
  };
  const subtractHandler = () => {
    dispatch({ type: ACTION_TYPES.SUBTRACT });
  };

  const changeStep = ({ target: { value } }) => {
    dispatch({ type: ACTION_TYPES.CHANGE_STEP, value });
  };

  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={addHandler}>add</button>
      <button onClick={subtractHandler}>subtract</button>
      <input type="number" value={state.step} onChange={changeStep} />
    </div>
  );
};

export default ReducerCounter;
