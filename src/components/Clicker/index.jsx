import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }

    this.isRendered = true;

    // const { count } = this.state;
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000)
  }

  clickHandler = () => {
    const { count } = this.state;
    if (count < 5) {
      this.setState({
        count: count + 1,
      });
    } else {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default Index;
