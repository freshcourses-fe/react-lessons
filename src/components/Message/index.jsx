import React from 'react';
import './style.css';
class Message extends React.Component {
  render() {
    const {
      id,
      author = 'Author',
      message = 'message',
      isImportant = false,
    } = this.props;
    const styles = {
      padding: '10px',
      backgroundColor: isImportant ? 'violet' : 'green',
      width: '300px',
      color: 'white',
      margin: '10px',
    };

    return (
      <article id={id} style={styles}>
        {isImportant && <strong>IMPORTANT MESSAGE</strong>}
        <h2>{author}</h2>
        <p>{message}</p>
      </article>
    );
  }
}

export default Message;
