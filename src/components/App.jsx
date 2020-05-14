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
    version: '1.2.0',
  }

  // -------------------
  // Component did mount
  // -------------------

  componentDidMount = () => {
    this.setState({ stamps: generateStamps() });
    this.checkURL();
    this.setupKeyboardShortcuts();
  }

  // ------------------------
  // Setup keyboard shortcuts
  // ------------------------

  setupKeyboardShortcuts = () => {
    window.addEventListener('keydown', (e) => {
      const { carouselActive } = this.state;

      // G
      if (e.keyCode === 71) {
        window.open('https://github.com/MariuszDabrowski/ac-miles');
      }

      // Esc and B
      if ((e.keyCode === 27 || e.keyCode === 66) && carouselActive) {
        this.toggleCarousel();
      }

      // When in the carousel prevent the user from tabbing, they can use arrows + esc to navigate around
      if (e.keyCode === 9 && carouselActive) {
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
    const { carouselActive } = this.state;
    const hadFocus = document.querySelector('.had-focus-before-carousel');
    const achievements = document.querySelector('.achievements');

    if (carouselActive) window.history.replaceState({}, '', window.location.pathname);
    this.setState({ carouselActive: !carouselActive }, () => {
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
      this.toggleCarousel, () => { if (cb) cb(); },
    );
  }

  // ------
  // Render
  // ------

  render() {
    const {
      stamps,
      carouselIndex,
      carouselActive,
      version,
    } = this.state;

    return (
      <>
        <Loader />

        {stamps && (
          <Carousel
            carouselIndex={carouselIndex}
            visibility={carouselActive}
            stamps={stamps}
            version={version}
          />
        )}

        <NookMiles />
        <Header />

        {stamps && (
          <Achievements
            setCarouselIndex={this.setCarouselIndex}
            stamps={stamps}
            version={version}
          />
        )}

        <Buttons
          carouselActive={carouselActive}
          toggleCarousel={this.toggleCarousel}
        />
      </>
    );
  }
}

export default App;
