import { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { ThemeContext, UserContext } from '../../contexts';
import './Header.scss';

function heavyCalcFunction(inputValue) {
  let x = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    x++;
  }

  return inputValue ** 9;
}

function Header(props) {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [user, setUser] = useContext(UserContext);
  const [inputValue, setValue] = useState('');

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);

  const logUser = useCallback(() => {
    console.log(`${user.name} ${user.lastName}`);
  }, [user]);

  useEffect(() => {
    console.log('render');
  }, [logUser]);

  const calculatedValue = useMemo(
    () => heavyCalcFunction(inputValue),
    [inputValue]
  );

  return (
    <header className={theme}>
      <h1>
        {user.name} {user.lastName}
      </h1>
      <h2>{calculatedValue}</h2>
      <button onClick={toggleTheme}>theme</button>
      <button onClick={logUser}>Click me</button>
      <input type="number" value={inputValue} onChange={handleChange} />
    </header>
  );
}

export default Header;
