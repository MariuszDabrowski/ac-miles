import React from 'react';
import PropTypes from 'prop-types';
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
};

// ---------
// Component
// ---------

class CarouselItem extends React.Component {
  // Component never changes, prevent React from re-rendering it every time
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { data, version, stamps } = this.props;
    const isSequential = (data.Sequential === 'Yes') ? 'sequential' : 'nonSequential';
    const trackImage = tracks[data['Num of Tiers']][isSequential];

    // ------
    // Render
    // ------

    return (
      <div className="card-wrapper">
        <div className={`card card--${data['Internal Category'].toLowerCase()}`}>
          { data.Version === version && <div className="achievement__new">New!</div> }
          <div className="card__title">{ getTitleIcon(data.Name) || data.Name }</div>
          <div className="card__description">
            <div dangerouslySetInnerHTML={{ __html: achievementDescriptions[data['Internal ID']].description }} />
            <div className="card__description__nook" />
          </div>
          <div className={`card-badges card-badges--${data['Num of Tiers']}`}>
            {stamps}
            <img src={trackImage} alt={`${data.Name} achievements path`} className="card-badges__track" />
          </div>
        </div>
      </div>
    );
  }
}

// ----------
// Prop types
// ----------

CarouselItem.propTypes = {
  data: PropTypes.shape({
    Version: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    'Internal ID': PropTypes.number.isRequired,
    'Internal Category': PropTypes.string.isRequired,
    'Num of Tiers': PropTypes.number.isRequired,
    Sequential: PropTypes.string.isRequired,
  }).isRequired,
  version: PropTypes.string.isRequired,
  stamps: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default CarouselItem;
