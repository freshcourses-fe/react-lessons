import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpForm from 'components/forms/SignUpForm';

const SignUpPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>Sign Up</h2>
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
}

export default SignUpPage;
