import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserList from '../../components/UserList';

const UsersPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h2>Users</h2>
        <UserList />
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
