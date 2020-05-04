import React from 'react';
import Carousel from './Carousel';
import NookMiles from './NookMiles';
import Header from './Header';
import Buttons from './Buttons';
import Achievements from './Achievements';
import generateStamps from '../helpers/generateStamps';
import achievementsData from '../data/achievements.json';
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
    this.checkURL();
  }

  checkURL = () => {
    const slideId = Number(window.location.search.slice(1).split('=')[1]);

    if (slideId && typeof slideId === 'number' && slideId >= 0 && slideId < achievementsData.length) {
      this.setCarouselIndex(slideId, this.toggleCarousel);
    }
  }

  toggleCarousel = (index) => {
    if (this.state.carouselActive) {
      window.history.replaceState({}, '', window.location.pathname)
    }

    this.setState({ carouselActive: (this.state.carouselActive) ? false : true });
  }

  setCarouselIndex = (index, cb) => {
    this.setState(
      { carouselIndex: index },
      this.toggleCarousel, () => { if (cb) cb(); }
    );
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
