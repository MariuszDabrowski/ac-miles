import React from 'react';
import './AchievementsItem.css';

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

import awardsTrack1 from '../img/awards-1-blank.svg';
import awardsTrack2 from '../img/awards-2-blank.svg';
import awardsTrack3 from '../img/awards-3-blank.svg';
import awardsTrack4 from '../img/awards-4-blank.svg';
import awardsTrack5 from '../img/awards-5-blank.svg';
import awardsTrack6 from '../img/awards-6-blank.svg';

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

const awardTracks = {
  1: awardsTrack1,
  2: awardsTrack2,
  3: awardsTrack3,
  4: awardsTrack4,
  5: awardsTrack5,
  6: awardsTrack6
}

// ---------
// Component
// ---------

function AchievementsItem(props) {

  // ------------------------------------------------------------------------
  // Generate the amount of stamp images we need for the specific award track
  // ------------------------------------------------------------------------

  const stamps = [];

  for (let i = 0; i < props.data['Num of Tiers']; i++) {
    stamps.push(
      <img
      key={`${props.data['Unique Entry ID']}-${i}`}
      src={stampImages[`${props.data['Internal Category'].toLowerCase()}`]}
      alt=""
      className="achivement__spaces__stamp" />
    );
  }

  // ------
  // Render
  // ------
  
  return (
    <div
    className={`achievement achievement--${props.data['Internal Category'].toLowerCase()}`}
    onClick={() => props.setCarouselIndex(props.index)}>
      <div className="achievement__title">{ props.data.Name }</div>
      <div className={`achivement__spaces achivement__spaces--${props.data['Num of Tiers']}`}>
        {stamps}
        <img
        className="achivement__spaces-svg"
        alt=""
        src={awardTracks[props.data['Num of Tiers']]} />
      </div>
    </div>
  );
}

export default AchievementsItem;
