import './App.css';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import PhoneDashboard from './components/PhoneDasboard';
import Phone from './components/Phone';
import FancyList from './components/FancyList';

function App() {
  const elem = React.createElement('p', {title: 'test'}, 'Текст', 'test1 12 ');
  // const tempalte = <p title="test" >Текст</p>;

  // console.log(elem);
  // console.log(tempalte);

  return (
    <FancyList title="tekst">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </FancyList>
  );
}

export default App;
