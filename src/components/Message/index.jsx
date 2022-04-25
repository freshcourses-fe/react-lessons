import React from 'react';
import './style.css';
class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }
  toggleIsRead = () => {
    this.setState({
      isRead: !this.state.isRead,
    });
  };

  render() {
    const {
      id,
      author = 'Author',
      message = 'message',
      isImportant = false,
    } = this.props;

    const { isRead } = this.state;

    const styles = {
      padding: '10px',
      backgroundColor: isImportant ? 'violet' : 'green',
      width: '300px',
      color: 'white',
      margin: '10px',
    };

    return (
      <article style={styles} onClick={this.toggleIsRead}>
        {isImportant && <strong>IMPORTANT MESSAGE</strong>}
        <h2>{author}</h2>
        <p>{message}</p>
        {isRead && <small>ПРОЧИТАНО</small>}
        
      </article>
    );
  }
}

export default Message;
