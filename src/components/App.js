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
    carouselActive: false,
    carouselIndex: 0
  }

  toggleCarousel = (index) => {
    this.setState({ carouselActive: (this.state.carouselActive) ? false : true });
  }

  setCarouselIndex = (index) => {
    this.setState({ carouselIndex: index }, this.toggleCarousel);
  }

  render() {
    return (
      <>
        { this.state.carouselActive && <Carousel toggleCarousel={this.toggleCarousel} carouselIndex={this.state.carouselIndex} /> }
        <Header />
        <Achievements toggleCarousel={this.toggleCarousel} setCarouselIndex={this.setCarouselIndex} />
      </>
    );
  }
}

export default App;
