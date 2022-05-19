import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chat from 'components/Chat';
import ReducerCounter from 'components/ReducerCounter';
const MainPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>This is main page</h2>
        <ReducerCounter />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
