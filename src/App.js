import './App.css';
import React from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import messagesDb from './data';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: messagesDb,
      isReversed: false,
    };
  }

  sortMessages = () => {
    const { messages, isReversed } = this.state;

    const messagesCopy = JSON.parse(JSON.stringify(messages));

    this.setState({
      isReversed: !isReversed,
      messages: messagesCopy.sort((a, b) => {
        if (isReversed) {
          return a.id - b.id;
        }

        return b.id - a.id;
      }),
    });
  };

  render() {
    const { messages, isReversed } = this.state;
    return (
      <>
        <Header />
        <main>
          <p>
            Сейчас сообщения находятся в порядке{' '}
            {isReversed ? 'убывания' : 'возрастания'}
          </p>
          <button onClick={this.sortMessages}>Пересортировать сообщения</button>
          <MessageList messages={messages} />
        </main>
      </>
    );
  }
}

export default App;
