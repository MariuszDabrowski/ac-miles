import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';
import buttonBg from '../img/btn-bg.png';

// ---------
// Component
// ---------

function Buttons({ carouselActive, toggleCarousel }) {
  return (
    <div className="buttons">

      {carouselActive && (
        <button type="button" className="button button--b" onClick={toggleCarousel} aria-label="Close achievement popup">
          <span className="button__icon">
            <span className="button__icon__text">B</span>
          </span>
          <span className="button__text">Back</span>
          <img className="button__bg" src={buttonBg} alt="B" />
        </button>
      )}

      <a href="https://github.com/MariuszDabrowski/ac-miles" target="_blank" rel="noopener noreferrer" className="button button--g">
        <span className="button__icon">
          <span className="button__icon__text">G</span>
        </span>
        <span className="button__text">GitHub</span>
        <img className="button__bg" src={buttonBg} alt="G" />
      </a>

    </div>
  );
}

// ----------
// Prop types
// ----------

Buttons.propTypes = {
  carouselActive: PropTypes.bool.isRequired,
  toggleCarousel: PropTypes.func.isRequired,
};

export default Buttons;
