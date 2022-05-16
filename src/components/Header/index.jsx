import { useContext, useState } from 'react';
import { ThemeContext, UserContext } from '../../contexts';
import './Header.scss';

function Header(props) {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [user, setUser] = useContext(UserContext);

  return (
    <header className={theme}>
      <h1>
        {user.name} {user.lastName}
      </h1>
      <button onClick={toggleTheme}>theme</button>
    </header>
  );
}

export default Header;
