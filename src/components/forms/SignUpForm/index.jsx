import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  const { value, name } = action;
  const newState = {
    ...state,
    [name]: value
  };
  return newState;
}

const initialState = {
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
};

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { value, name } }) => {
    const action = { value, name };
    dispatch(action);
  };

  return (
    <form
      style={{
        display: 'flex',
        maxWidth: '300px',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <input
        placeholder="Login"
        name="login"
        value={state.login}
        onChange={handleChange}
      />
      <input
        placeholder="First name"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        placeholder="Last name"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <input
        placeholder="Gender"
        name="gender"
        value={state.gender}
        onChange={handleChange}
      />
      <button type="submit">Sign Up!</button>
    </form>
  );
};

export default SignUpForm;
