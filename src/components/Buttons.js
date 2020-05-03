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
          <span className="button__icon">B</span>
          <span className="button__text">Back</span>
          <img className="button__bg" src={buttonBg} alt=""/>
        </button>
      }

      <a href="#" className="button button--g" onClick={props.toggleCarousel}>
        <span className="button__icon">G</span>
        <span className="button__text">Github</span>
        <img className="button__bg" src={buttonBg} alt=""/>
      </a>

    </div>
  );
}

export default Buttons;
