import './App.css';
import React from 'react';
import Tracker from './components/Tracker';
import Message from './components/Message';

function App() {
  return (
    <>
      <Message isImportant />
      <Message />
    </>
  );
}

export default App;
