import './App.css';
import React, { useState } from 'react';
import Tracker from './components/Tracker';
import Message from './components/Message';
import StopWatch from './components/Stopwatch';
import { UserContext } from './contexts';
import Header from './components/Header';

/*
  реализовать на контексте и хуках смену темы
*/

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'John',
    lastName: 'Doe',
  });
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Header />
        <Message isImportant />
        <Message />
        <StopWatch />
      </UserContext.Provider>
    </>
  );
}

export default App;
