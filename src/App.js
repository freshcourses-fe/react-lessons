import './App.css';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import StopWatch from './components/Stopwatch';

function App() {
  return (
    <>
      <Header />
      <LoginForm />
      <StopWatch />
    </>
  );
}

export default App;
