import React from 'react';
import achievementsData from '../data/achievements.json';
import Stamp from '../components/Stamp';

function generateStamps(section) {
  const stamps = {}
  
  achievementsData.forEach(achievement => {
    
    // ----------------------------------------------------------------
    // Generate the amount of stamp images we need for this achievement
    // ----------------------------------------------------------------

    stamps[achievement['Internal ID']] = [];

    for (let i = 0; i < achievement['Num of Tiers']; i++) {
      stamps[achievement['Internal ID']].push(
        <Stamp achievement={achievement} i={i} key={`${achievement['Internal ID']}-${i}`} />
      );
    }
  });

  return stamps;
}

export default generateStamps;