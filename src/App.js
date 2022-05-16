import './App.css';
import React, { useState } from 'react';
import Tracker from './components/Tracker';
import Message from './components/Message';
import StopWatch from './components/Stopwatch';

function App() {
  const [isMessagesVisible, setIsMessagesVisible] = useState(true);

  const toggleMessageVisibility = () => {
    setIsMessagesVisible(!isMessagesVisible);
  };

  return (
    <>
      <button onClick={toggleMessageVisibility}>Toggle Messages</button>
      {isMessagesVisible && (
        <div>
          <Message isImportant />
          <Message />
          <StopWatch />
        </div>
      )}
    </>
  );
}

export default App;
