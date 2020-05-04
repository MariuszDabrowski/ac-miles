import React from 'react';
import achievementsData from '../data/achievements.json';
import getDateSVG from '../helpers/getDateSVG';

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

function generateStamps() {
  const stamps = {}
  
  achievementsData.forEach(achievement => {

    // ----------------------------------------------------------------
    // Generate the amount of stamp images we need for this achievement
    // ----------------------------------------------------------------

    stamps[achievement['Internal ID']] = [];

    for (let i = 0; i < achievement['Num of Tiers']; i++) {
      stamps[achievement['Internal ID']].push(
        <div className={`stamp-wrapper stamp-wrapper--${i + 1}`} key={`${achievement['Unique Entry ID']}-${i}`}>
          <div className={`stamp  stamp--${i + 1}`}>
            <img
            src={stampImages[`${achievement['Internal Category'].toLowerCase()}`]}
            alt=""
            className="stamp__image" />
            {getDateSVG(achievement['Internal Category'].toLowerCase())}
          </div>
          {
          achievement['Num of Tiers'] === 1 &&
          Number(achievement['Tier 1']) > 1 &&
            <div className={`stamp-wrapper__tier stamp-wrapper__tier--${achievement['Internal Category'].toLowerCase()}`}>{Number(achievement[`Tier ${i + 1}`]).toLocaleString('EN-US')}</div>
          }
          {
          achievement['Num of Tiers'] > 1 &&
          Number(achievement[`Tier ${i + 1}`]) > 0 &&
            <div className={`stamp-wrapper__tier stamp-wrapper__tier--${achievement['Internal Category'].toLowerCase()}`}>{Number(achievement[`Tier ${i + 1}`]).toLocaleString('EN-US')}</div>
          }
        </div>
      );
    }
  });

  return stamps;
}

export default generateStamps;