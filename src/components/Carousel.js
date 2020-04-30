import React from 'react';
import './Carousel.css';
import achievementsData from '../data/achievements.json';
import CarouselItem from './CarouselItem';

// ---------
// Component
// ---------

function Carousel() {
  return (
    <div className="carousel">
      { achievementsData.map(item => <CarouselItem key={item['Unique Entry ID']} />) }
    </div>
  );
}

export default Carousel;
