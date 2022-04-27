import React from 'react';
import styles from './LoginForm.module.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'tests',
      password: '',
    };
  }

  handleFormSubmit = (e) => {
    const {
      email: { value },
    } = e.target.elements;
    e.preventDefault();
    console.log(value);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.container}>
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
