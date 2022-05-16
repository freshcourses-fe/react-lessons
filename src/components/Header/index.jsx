import React, { useContext } from 'react';
import { UserContext } from './../../contexts';

function Header(props) {
  const [user, setUser] = useContext(UserContext);
  return (
    <header>
      <h1>
        Hello {user.name} {user.lastName}
      </h1>
    </header>
  );
}

export default Header;
