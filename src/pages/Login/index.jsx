import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LoginPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>Login</h2>
        <form>
          <input name="login" type="text" placeholder="login" />
          <input name="password" type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
