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
      <div className="mimic-scroll">
        <div className="mimic-scroll__content"></div>
      </div>

      <div className="achievements-wrapper">
        <div className="achievements">
          { achievementsData.map(item => <AchievementsItem key={item['Unique Entry ID']} data={item} />) }
        </div>
      </div>
    </>
  );
}

export default Achievements;
