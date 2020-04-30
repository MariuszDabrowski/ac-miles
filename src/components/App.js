import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import Achievements from './Achievements';
import './App.css';

// ---------
// Component
// ---------

class App extends React.Component {
  state = {
    carouselActive: true
  }

  toggleCarousel = () => {
    this.setState({ carouselActive: (this.state.carouselActive) ? false : true });
  }

  render() {
    return (
      <>
        { this.state.carouselActive && <Carousel toggleCarousel={this.toggleCarousel} /> }
        <Header />
        <Achievements toggleCarousel={this.toggleCarousel} />
      </>
    );
  }
}

export default App;
