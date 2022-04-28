import './App.css';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import StopWatch from './components/Stopwatch';
import PhoneDashboard from './components/PhoneDasboard';

function App() {
  return (
    <>
      <Header />
      <LoginForm />
      <PhoneDashboard />
    </>
  );
}

export default App;
