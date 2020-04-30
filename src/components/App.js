import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import Achievements from './Achievements';
import './App.css';

// ---------
// Component
// ---------

function App() {
  return (
    <>

      <div className="cursor"></div>
      <Carousel />
      <Header />
      <Achievements />

    </>
  );
}

export default App;
