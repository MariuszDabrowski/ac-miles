import React from 'react';
import './AchievementsItem.css';
import getTitleIcon from '../helpers/titleIcons';

// -------------
// Awards tracks
// -------------

import awardsTrack1 from '../img/awards-1-blank.svg';
import awardsTrack2 from '../img/awards-2-blank.svg';
import awardsTrack2Connected from '../img/awards-2-blank-connected.svg';
import awardsTrack3 from '../img/awards-3-blank.svg';
import awardsTrack3Connected from '../img/awards-3-blank-connected.svg';
import awardsTrack4 from '../img/awards-4-blank.svg';
import awardsTrack4Connected from '../img/awards-4-blank-connected.svg';
import awardsTrack5 from '../img/awards-5-blank.svg';
import awardsTrack5Connected from '../img/awards-5-blank-connected.svg';
import awardsTrack6 from '../img/awards-6-blank.svg';
import awardsTrack6Connected from '../img/awards-6-blank-connected.svg';

// -----------------------------------------------------
// Map the images to labels we can reference in our code
// -----------------------------------------------------

const awardTracks = {
  1: { sequential: awardsTrack1, nonSequential: awardsTrack1 },
  2: { sequential: awardsTrack2Connected, nonSequential: awardsTrack2 },
  3: { sequential: awardsTrack3Connected, nonSequential: awardsTrack3 },
  4: { sequential: awardsTrack4Connected, nonSequential: awardsTrack4 },
  5: { sequential: awardsTrack5Connected, nonSequential: awardsTrack5 },
  6: { sequential: awardsTrack6Connected, nonSequential: awardsTrack6 },
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
    const isSequential = (this.props.data['Sequential'] === 'Yes') ? 'sequential' : 'nonSequential';

    // ------
    // Return
    // ------

    return (
      <div
      className={`achievement achievement--${this.props.data['Internal Category'].toLowerCase()}`}
      onClick={() => this.props.setCarouselIndex(this.props.index)}
      tabIndex="0">
        { this.props.data['Version'] === this.props.version && <div className="achievement__new">New!</div> }
        <div className="achievement__title">{ getTitleIcon(this.props.data.Name) || this.props.data.Name }</div>
        <div className={`achievement__spaces achievement__spaces--${this.props.data['Num of Tiers']}`}>
          {this.props.stamps}
          <img
          className="achievement__spaces-svg"
          alt=""
          src={awardTracks[this.props.data['Num of Tiers']][isSequential]} />
        </div>
      </div>
    );
  }
}

export default AchievementsItem;
