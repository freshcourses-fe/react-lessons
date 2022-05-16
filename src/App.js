import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './contexts';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import './App.css';

/*
  реализовать на контексте и хуках смену темы
*/

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'John',
    lastName: 'Doe',
  });
  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
