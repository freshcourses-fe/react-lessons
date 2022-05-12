import React, { useState } from 'react';
import './style.css';

function Message({ id, author = 'Author', message = 'message', isImportant }) {
  const [isRead, setIsRead] = useState(false);

  const toggleIsRead = () => {
    setIsRead(!isRead);
  };

  const styles = {
    padding: '10px',
    backgroundColor: isImportant ? 'violet' : 'green',
    width: '300px',
    color: 'white',
    margin: '10px',
  };

  return (
    <article style={styles} onClick={toggleIsRead}>
      {isImportant && <strong>IMPORTANT MESSAGE</strong>}
      <h2>{author}</h2>
      <p>{message}</p>
      {isRead && <small>ПРОЧИТАНО</small>}
    </article>
  );
}

export default Message;
