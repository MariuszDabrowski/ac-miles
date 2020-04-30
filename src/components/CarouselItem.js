import React from 'react';
import './CarouselItem.css';
import achievementDescriptions from '../data/achievementDescriptions.json';

// ------
// Stamps
// ------

import stampCommunication from '../img/stamp-communication.png';
import stampDIY from '../img/stamp-diy.png';
import stampEvent from '../img/stamp-event.png';
import stampFish from '../img/stamp-fish.png';
import stampHHA from '../img/stamp-hha.png';
import stampInsect from '../img/stamp-insect.png';
import stampLandMaking from '../img/stamp-landmaking.png';
import stampMoney from '../img/stamp-money.png';
import stampMyDesign from '../img/stamp-mydesign.png';
import stampNegative from '../img/stamp-negative.png';
import stampPlant from '../img/stamp-plant.png';
import stampSmartPhone from '../img/stamp-smartphone.png';

// -------------
// Awards tracks
// -------------

import track1 from '../img/track-straight-1.svg';
import track2 from '../img/track-straight-2.svg';
import track3 from '../img/track-straight-3.svg';
import track3Connected from '../img/track-straight-3-connected.svg';
import track4 from '../img/track-straight-4.svg';
import track5 from '../img/track-straight-5.svg';
import track5Connected from '../img/track-straight-5-connected.svg';
import track6 from '../img/track-straight-6.svg';

// -----------------------------------------------------
// Map the images to labels we can reference in our code
// -----------------------------------------------------

const stampImages = {
  'communication': stampCommunication,
  'diy': stampDIY,
  'event': stampEvent,
  'fish': stampFish,
  'hha': stampHHA,
  'insect': stampInsect,
  'landmaking': stampLandMaking,
  'money': stampMoney,
  'mydesign': stampMyDesign,
  'negative': stampNegative,
  'plant': stampPlant,
  'smartphone': stampSmartPhone,
}

const tracks = {
  1: { sequential: null, nonSequential: track1 },
  2: { sequential: null, nonSequential: track2 },
  3: { sequential: track3Connected, nonSequential: track3 },
  4: { sequential: null, nonSequential: track4 },
  5: { sequential: track5Connected, nonSequential: track5 },
  6: { sequential: null, nonSequential: track6 },
}

// ---------
// Component
// ---------

function CarouselItem(props) {
  const isSequential = (props.data.sequential === 'Yes') ? 'sequential' : 'nonSequential';
  const trackImage = tracks[props.data['Num of Tiers']][isSequential];

  // ---------------
  // Generate stamps
  // ---------------

  const stamps = [];

  for (let i = 0; i < props.data['Num of Tiers']; i++) {
    stamps.push(
      <img
      key={`${props.data['Unique Entry ID']}-${i}`}
      src={stampImages[`${props.data['Internal Category'].toLowerCase()}`]}
      alt=""
      className={`card-badges__stamp card-badges__stamp--${i + 1}`} />
    );
  }

  // ------
  // Render
  // ------

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card__title">{props.data.Name}</div>
        <div className="card__description">
          {achievementDescriptions[props.data['Internal ID']].description}
          <div className="card__description__nook"></div>
        </div>
        <div className={`card-badges card-badges--${props.data['Num of Tiers']}`}>
          {stamps}
          <img src={trackImage} alt="" className="card-badges__track" />
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
