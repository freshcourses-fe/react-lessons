import './App.css';
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import PhoneDashboard from './components/PhoneDasboard';
import Phone from './components/Phone';
import FancyList from './components/FancyList';
import FlexContainer from './components/FlexContainer';

function App() {
  /*
  создать компонент FlexContainer
  вы его можете настравать пропсами
  ему также можно передавать детей, 
  которых он будет отрисовывать

  <FlexContainer someProp="something" >
    <Phone />
    <Phone />
    <Phone />
    <Phone />
  </FlexContainer/>
*/
  return (
    <FlexContainer
      jc="space-between"
      ai="center"
      fd="row"
      wrap="nowrap"
    >
      <Phone />
      <Phone />
      <Phone />
      <Phone />
    </FlexContainer>
  );
}

export default App;
