import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chat from 'components/Chat';
const MainPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>This is main page</h2>
        <Chat />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
