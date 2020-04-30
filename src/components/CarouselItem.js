import React from 'react';
import './CarouselItem.css';

// ---------
// Component
// ---------

function CarouselItem() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card__title">Roehampton Miles!</div>
        <div className="card__description">
          <div className="card__description__nook"></div>
        </div>
        <div className="card__badges"></div>
      </div>
    </div>
  );
}

export default CarouselItem;
