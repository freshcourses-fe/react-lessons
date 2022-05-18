import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, UserContext } from '../../contexts';
import './Header.scss';

function Header(props) {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [user, setUser] = useContext(UserContext);

  return (
    <header className={theme}>
      <div className="headerContainer">
        <h1>
          Hello {user.name} {user.lastName}
        </h1>
        <button onClick={toggleTheme}>theme</button>
      </div>
      <nav>
        <ul className='navList'>
          <li>
            <Link className='navLink' to="/">Home</Link>
          </li>
          <li>
            <Link className='navLink' to="/signin">Sign-in</Link>
          </li>
          <li>
            <Link className='navLink' to="/signup">Sign-up</Link>
          </li>
          <li>
            <Link className='navLink' to="/laptops">Laptops</Link>
          </li>
          <li>
            <Link className='navLink' to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
