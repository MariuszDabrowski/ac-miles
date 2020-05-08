import React from 'react';
import './Buttons.css';
import buttonBg from '../img/btn-bg.png';

// ---------
// Component
// ---------

function Buttons(props) {
  return (
    <div className="buttons">

      {props.carouselActive &&        
        <button className="button button--b" onClick={props.toggleCarousel} aria-label="Close achievement popup">
          <span className="button__icon">
            <span className="button__icon__text">B</span>
          </span>
          <span className="button__text">Back</span>
          <img className="button__bg" src={buttonBg} alt="B"/>
        </button>
      }

      <a href="https://github.com/MariuszDabrowski/ac-miles" target="_blank" rel="noopener noreferrer" className="button button--g">
        <span className="button__icon">
          <span className="button__icon__text">G</span>
        </span>
        <span className="button__text">GitHub</span>
        <img className="button__bg" src={buttonBg} alt="G"/>
      </a>

    </div>
  );
}

export default Buttons;
