import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext, UserContext } from './contexts';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import './App.css';
import CONSTANTS from './constants';

/*
  реализовать на контексте и хуках смену темы
*/

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'John',
    lastName: 'Doe',
  });
  const [theme, setTheme] = useState(CONSTANTS.THEME.DARK);

  function toggleTheme () {
    setTheme(theme === CONSTANTS.THEME.DARK ? CONSTANTS.THEME.WHITE : CONSTANTS.THEME.DARK)
  }

  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
        <ThemeContext.Provider value={[theme, toggleTheme]}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
