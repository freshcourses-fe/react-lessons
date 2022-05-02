import './App.css';
import React from 'react';
import ImageWrapper from './components/ImageWrapper';
import Clicker from './components/Clicker';

function App() {
  return (
    // <ImageWrapper
    //   height="400px"
    //   width="400px"
    //   onClick={() => alert('you clicked on picture')}
    //   title="Picture"
    //   id="picture"
    //   style={{border: '20px solid black'}}
    // >
    //   <img
    //     alt="alt text"
    //     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    //   />
    // </ImageWrapper>
    <Clicker />
  );
}

export default App;
