import './App.css';
import React from 'react';
import Header from './components/Header';
import PhoneDashboard from './components/PhoneDasboard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <PhoneDashboard />
        </main>
      </>
    );
  }
}

export default App;
