import React from 'react';
import SimpleBar from 'simplebar-react'; // https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react
import achievementsData from '../data/achievements.json';
import AchievementsItem from './AchievementsItem';
import './Achievements.css';
import '../css/simplebar.css';

// ---------
// Component
// ---------

function Achievements() {
  return (
    <>
      <div class="mimic-scroll">
        <div class="mimic-scroll__content"></div>
      </div>

      <div class="achievements-wrapper">
        <div class="achievements">
          { achievementsData.map(item => <AchievementsItem />) }
        </div>
      </div>
    </>
  );
}

export default Achievements;
