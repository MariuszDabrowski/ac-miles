import React from 'react';
import Carousel from './Carousel';
import NookMiles from './NookMiles';
import Header from './Header';
import Loader from './Loader';
import Buttons from './Buttons';
import Achievements from './Achievements';
import generateStamps from '../helpers/generateStamps';
import achievementsData from '../data/achievements.json';
import './App.css';

// ---------
// Component
// ---------

class App extends React.Component {
  
  // -----
  // State
  // -----

  state = {
    carouselActive: false,
    carouselIndex: 0,
    stamps: null,
    version: '1.2.0'
  }

  // -------------------
  // Component did mount
  // -------------------

  componentDidMount() {
    this.setState({ stamps: generateStamps() });
    this.checkURL();
    this.setupKeyboardShortcuts();
  }

  // ------------------------
  // Setup keyboard shortcuts
  // ------------------------

  setupKeyboardShortcuts = () => {
    // 71 G, 27 Esc, 66 B

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 71) {
        window.open('https://github.com/MariuszDabrowski/ac-miles');
      }

      if ((e.keyCode === 27 || e.keyCode === 66) && this.state.carouselActive) {
        this.toggleCarousel();
      }

      // When in the carousel prevent the user from tabbing, they can use arrows + esc to navigate around
      if (e.keyCode === 9 && this.state.carouselActive) {
        e.preventDefault();
      }
    });
  }

  // ---------
  // Check URL
  // ---------

  checkURL = () => {
    const slideId = Number(window.location.search.slice(1).split('=')[1]);

    if ((slideId || slideId === 0) && typeof slideId === 'number' && slideId >= 0 && slideId < achievementsData.length) {
      this.setCarouselIndex(slideId, this.toggleCarousel);
    }
  }

  // ---------------
  // Toggle carousel
  // ---------------
  
  toggleCarousel = () => {
    const hadFocus = document.querySelector('.had-focus-before-carousel');
    const achievements = document.querySelector('.achievements');

    if (this.state.carouselActive) window.history.replaceState({}, '', window.location.pathname);
    this.setState({ carouselActive: (this.state.carouselActive) ? false : true }, () => {
      // If the user was using the keyboard to navigate, put the focus back to where it was before the carousel opened
      if (hadFocus) {
        hadFocus.focus();
      } else {
        achievements.focus();
      }
    });
  }

  // ------------------
  // Set carousel index
  // ------------------

  setCarouselIndex = (index, cb) => {
    this.setState(
      { carouselIndex: index },
      this.toggleCarousel, () => { if (cb) cb(); }
    );
  }

  // ------
  // Render
  // ------

  render() {
    return (
      <>
        <Loader />

        {this.state.stamps &&
          <Carousel
          carouselIndex={this.state.carouselIndex}
          visibility={this.state.carouselActive}
          stamps={this.state.stamps}
          version={this.state.version} />
        }
        
        <NookMiles />
        <Header />
        
        {this.state.stamps &&
          <Achievements
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
