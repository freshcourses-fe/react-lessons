import { useContext, useEffect, useState, useCallback } from 'react';
import { ThemeContext, UserContext } from '../../contexts';
import './Header.scss';

function Header(props) {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [user, setUser] = useContext(UserContext);
  const [inputValue, setValue] = useState('');

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const logUser = useCallback(() => {
    console.log(`${user.name} ${user.lastName}`);
  }, [user]);

  useEffect(() => {
    console.log('render');
  }, [logUser]);

  return (
    <header className={theme}>
      <h1>
        {user.name} {user.lastName}
      </h1>
      <button onClick={toggleTheme}>theme</button>
      <button onClick={logUser}>Click me</button>
      <input value={inputValue} onChange={handleChange} />
    </header>
  );
}

export default Header;
