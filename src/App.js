import './App.css';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import StopWatch from './components/Stopwatch';
import PhoneDashboard from './components/PhoneDasboard';
import Phone from './components/Phone';

function App() {
  return (
    <>
      <Header />
      <LoginForm />
      <PhoneDashboard />
      <Phone />
    </>
  );
}

export default App;
