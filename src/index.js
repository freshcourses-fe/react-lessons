import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Message1(props) {
  return (
    <article>
      <h2>Tom</h2>
      <p>Toms message 1</p>
    </article>
  );
}

class Message extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article
        id={this.props.id}
        style={{
          padding: '10px',
          backgroundColor: 'green',
          width: '300px',
          color: 'white',
          margin: '10px',
        }}
      >
        <h2>{this.props.author}</h2>
        <p>Toms message 1</p>
      </article>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <h1 id="test" className="test123">
        Messages
      </h1>
    </header>
    <main>
      <Message id="first" author="Jerry" message="Hello there" />
      <Message id="second" author="Tom" />
      <Message id="third" author="Jerry" />
    </main>
  </React.StrictMode>
);
