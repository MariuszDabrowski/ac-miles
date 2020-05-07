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
        <button className="button button--b" onClick={props.toggleCarousel}>
          <span className="button__icon">
            <span className="button__icon__text">B</span>
          </span>
          <span className="button__text">Back</span>
          <img className="button__bg" src={buttonBg} alt=""/>
        </button>
      }

      <a href="http://github.com" target="_blank" rel="noopener noreferrer" className="button button--g">
        <span className="button__icon">
          <span className="button__icon__text">G</span>
        </span>
        <span className="button__text">GitHub</span>
        <img className="button__bg" src={buttonBg} alt=""/>
      </a>

    </div>
  );
}

export default Buttons;
