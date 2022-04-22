import './App.css';
import React from 'react';
import Message from './components/Message';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Message id="first" author="Jerry" message="Hello there" />
        <Message id="second" author="Tom" message="Hello to you too" />
        <Message id="third" author="Jerry" message="Bye" />
        <Message />
      </main>
    </>
  );
}

export default App;
