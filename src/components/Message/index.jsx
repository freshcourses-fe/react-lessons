import React from 'react';

class Message extends React.Component {
  render() {
    const { id, author = 'Author', message = 'message' } = this.props;
    return (
      <article
        id={id}
        style={{
          padding: '10px',
          backgroundColor: 'green',
          width: '300px',
          color: 'white',
          margin: '10px',
        }}
      >
        <h2>{author}</h2>
        <p>{message}</p>
      </article>
    );
  }
}

export default Message;
