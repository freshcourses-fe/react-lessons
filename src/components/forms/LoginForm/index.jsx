import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'tests',
      password: '',
    };
  }

  handleFormSubmit = (e) => {
    // const {email} = this.state;
    const {
      email: { value },
    } = e.target.elements;
    e.preventDefault();
    console.log(value);
    // console.log(email);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleEmailChange}
          value={email}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handleEmailChange}
          value={password}
          type="password"
          name="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    );
  }
}

export default LoginForm;
