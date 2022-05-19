import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chat from 'components/Chat';
import ReducerCounter from 'components/ReducerCounter';
import ToDo from 'components/ToDo';
const MainPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>This is main page</h2>
        <ToDo />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
