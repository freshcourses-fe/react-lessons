import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    console.log('mount');
    if (!this.intervalId) {
      this.start();
    }
  }

  componentDidUpdate() {
    console.log('update');
  }

  componentWillUnmount() {
    console.log('unmount');

    this.stop();
  }

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
  };

  reset = () => {
    this.stop();
    this.setState({ time: 0 });
    this.intervalId = null;
  };

  render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
