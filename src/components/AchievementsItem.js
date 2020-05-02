import React from 'react';
import './AchievementsItem.css';

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

class AchievementsItem extends React.Component {

  // Component never changes, prevent React from re-rendering it every time
  shouldComponentUpdate(nextProps) {
    return false;
  }

  // ------
  // Render
  // ------
  
  render() {

    // ------
    // Return
    // ------

    return (
      <div
      className={`achievement achievement--${this.props.data['Internal Category'].toLowerCase()}`}
      onClick={() => this.props.setCarouselIndex(this.props.index)}>
        <div className="achievement__title">{ this.props.data.Name }</div>
        <div className={`achivement__spaces achivement__spaces--${this.props.data['Num of Tiers']}`}>
          {/* {stamps} */}
          {this.props.stamps}
          <img
          className="achivement__spaces-svg"
          alt=""
          src={awardTracks[this.props.data['Num of Tiers']]} />
        </div>
      </div>
    );
  }
}

export default AchievementsItem;
