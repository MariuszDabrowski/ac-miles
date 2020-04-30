import React, { useEffect } from 'react';
import Flickity from 'flickity';
import './Carousel.css';
import '../css/flickity.css';
import achievementsData from '../data/achievements.json';
import CarouselItem from './CarouselItem';

// ---------
// Component
// ---------

function Carousel(props) {
  useEffect(() => {
    new Flickity('.carousel', {
      cellSelector: '.card-wrapper',
      pageDots: false,
      initialIndex: props.carouselIndex,
      on: {
        ready: function() {
          const carousel = document.querySelector('.carousel');
          carousel.classList.remove('carousel--hidden');
        }
      }
    });
  }, [props.carouselIndex]);

  return (
    <div className="carousel carousel--hidden">
      { achievementsData.map(item => <CarouselItem key={item['Unique Entry ID']} data={item} />) }
      
      <div className="button" onClick={props.toggleCarousel}>
        <div className="button__icon">B</div>
        <div className="button__text">Back</div>
      </div>
    </div>
  );
}

export default Carousel;
