import React from 'react';
import './CarouselItem.css';
import getTitleIcon from '../helpers/titleIcons';
import achievementDescriptions from '../data/achievementDescriptions.json';

// -------------
// Awards tracks
// -------------

import track1 from '../img/track-straight-1.svg';
import track2 from '../img/track-straight-2.svg';
import track2Connected from '../img/track-straight-2-connected.svg';
import track3 from '../img/track-straight-3.svg';
import track3Connected from '../img/track-straight-3-connected.svg';
import track4 from '../img/track-straight-4.svg';
import track4Connected from '../img/track-straight-4-connected.svg';
import track5 from '../img/track-straight-5.svg';
import track5Connected from '../img/track-straight-5-connected.svg';
import track6 from '../img/track-straight-6.svg';
import track6Connected from '../img/track-straight-6-connected.svg';

// -----------------------------------------------------
// Map the images to labels we can reference in our code
// -----------------------------------------------------

const tracks = {
  1: { sequential: track1, nonSequential: track1 },
  2: { sequential: track2Connected, nonSequential: track2 },
  3: { sequential: track3Connected, nonSequential: track3 },
  4: { sequential: track4Connected, nonSequential: track4 },
  5: { sequential: track5Connected, nonSequential: track5 },
  6: { sequential: track6Connected, nonSequential: track6 },
}

// ---------
// Component
// ---------

class CarouselItem extends React.Component {

  // Component never changes, prevent React from re-rendering it every time
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const isSequential = (this.props.data['Sequential'] === 'Yes') ? 'sequential' : 'nonSequential';
    const trackImage = tracks[this.props.data['Num of Tiers']][isSequential];

    // ------
    // Render
    // ------

    return (
      <div className="card-wrapper">
        <div className={`card card--${this.props.data['Internal Category'].toLowerCase()}`}>
          { this.props.data['Version'] === this.props.version && <div className="achievement__new">New!</div> }
          <div className="card__title">{ getTitleIcon(this.props.data.Name) || this.props.data.Name }</div>
          <div className="card__description">
            <div dangerouslySetInnerHTML={{ __html: achievementDescriptions[this.props.data['Internal ID']].description }}></div>
            <div className="card__description__nook"></div>
          </div>
          <div className={`card-badges card-badges--${this.props.data['Num of Tiers']}`}>
            {this.props.stamps}
            <img src={trackImage} alt="" className="card-badges__track" />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselItem;
