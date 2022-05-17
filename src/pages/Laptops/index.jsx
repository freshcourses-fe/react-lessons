import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LaptopList from '../../components/LaptopList';

const LaptopsPage = () => {
  return (
    <>
      <Header />
      <main>
        <LaptopList />
      </main>
      <Footer />
    </>
  );
}

export default LaptopsPage;
