import './App.css';
import React from 'react';
import Message from './components/Message';
import Header from './components/Header';

function App() {
  const messages = [
    {
      author: 'Jerry',
      message: 'Hello there',
      isImportant: true,
    },
    {
      author: 'Tom',
      message: 'Hello to you too',
      isImportant: false,
    },
    {
      author: 'Jerry',
      message: 'Hello there 2',
      isImportant: false,
    },
    {
      isImportant: false,
    },
  ];

  const messagesElems = messages.map(({author, message, isImportant}, index) => (
    <Message
      key={`${author}-${isImportant}-${message}`}
      author={author}
      message={message}
      isImportant={isImportant}
    />
  ));
  return (
    <>
      <Header />
      <main>
        {messagesElems}
      </main>
    </>
  );
}

export default App;
