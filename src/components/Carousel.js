import React from 'react';
import './Carousel.css';
import achievementsData from '../data/achievements.json';
import CarouselItem from './CarouselItem';

// ---------
// Component
// ---------

function Carousel() {
  return (
    <>
      { achievementsData.map(item => <CarouselItem />) }
    </>
  );
}

export default Carousel;
