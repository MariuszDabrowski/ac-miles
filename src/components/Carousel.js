import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import './Carousel.css';
import '../css/flickity.css';
import achievementsData from '../data/achievements.json';
import CarouselItem from './CarouselItem';

// ---------
// Component
// ---------

function Carousel(props) {
  let carouselElement = useRef();

  useEffect(() => {
    new Flickity(carouselElement.current, {
      cellSelector: '.card-wrapper',
      pageDots: false
    });
  }, [])

  return (
    <div className="carousel" ref={carouselElement}>
      { achievementsData.map(item => <CarouselItem key={item['Unique Entry ID']} />) }
      
      <div className="button" onClick={props.toggleCarousel}>
        <div className="button__icon">B</div>
        <div className="button__text">Back</div>
      </div>
    </div>
  );
}

export default Carousel;
