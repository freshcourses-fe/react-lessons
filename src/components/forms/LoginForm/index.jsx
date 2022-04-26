import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "tests",
      password: "",
    };
  }

  handleFormSubmit = (e) => {
    // const {email} = this.state;
    const {
      //email: { value },
      password: { value },
    } = e.target.elements;
    e.preventDefault();
    console.log(value);
    // console.log(email);
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleInputChange}
          value={email}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handleInputChange}
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
