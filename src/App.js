import './App.css';
import React from 'react';
import Header from './components/Header';
import PhoneDashboard from './components/PhoneDasboard';
import StopWatch from './components/Stopwatch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <>
        <Header />
        <button
          onClick={() => {
            this.setState({
              isVisible: !this.state.isVisible,
            });
          }}
        >Toggle</button>
        <main>{this.state.isVisible && <StopWatch />}</main>
      </>
    );
  }
}

export default App;
