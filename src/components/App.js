import React from 'react';
import Carousel from './Carousel';
import NookMiles from './NookMiles';
import Header from './Header';
import Buttons from './Buttons';
import Achievements from './Achievements';
import generateStamps from '../helpers/generateStamps';
import './App.css';

// ---------
// Component
// ---------

class App extends React.Component {
  state = {
    carouselActive: false,
    carouselIndex: 0,
    stamps: null,
    version: '1.2.0'
  }

  componentDidMount() {
    this.setState({ stamps: generateStamps() });
    this.loadingAnimation();
  }

  loadingAnimation = () => {
    const root = document.querySelector('.root');
    
    root.addEventListener('transitionend', () => {
      root.classList.add('root--loaded');
    });

    setTimeout(() => {
      root.classList.add('root--ready');
    }, 0);
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
        {this.state.stamps &&
          <Carousel
          carouselIndex={this.state.carouselIndex}
          visibility={this.state.carouselActive}
          stamps={this.state.stamps} />
        }
        
        <NookMiles />
        <Header />
        
        {this.state.stamps &&
          <Achievements
          toggleCarousel={this.toggleCarousel}
          setCarouselIndex={this.setCarouselIndex}
          stamps={this.state.stamps}
          version={this.state.version} />
        }

        <Buttons
        carouselActive={this.state.carouselActive}
        toggleCarousel={this.toggleCarousel} />
      </>
    );
  }
}

export default App;
