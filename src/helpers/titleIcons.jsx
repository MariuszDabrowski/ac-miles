import React from 'react';
import fishIcon from '../img/icon-fish.svg';
import '../css/title-icons.css';

function getTitleIcon(title) {
  if (title === 'Fishing Tourney!') {
    return (
      <span className="title-with-icon">
        Fishing Tourney!
        <img src={fishIcon} alt="Icon of fish" className="title-icon" />
      </span>
    );
  }

  return false;
}

export default getTitleIcon;
