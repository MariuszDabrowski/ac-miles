import React from 'react';
import PropTypes from 'prop-types';
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
};

// ---------
// Component
// ---------

class AchievementsItem extends React.Component {
  // Component never changes, prevent React from re-rendering it every time
  shouldComponentUpdate() {
    return false;
  }

  // ------
  // Render
  // ------

  render() {
    const {
      data,
      setCarouselIndex,
      index,
      version,
      stamps,
    } = this.props;
    const isSequential = (data.Sequential === 'Yes') ? 'sequential' : 'nonSequential';

    // ------
    // Return
    // ------

    return (
      <div
        role="button"
        className={`achievement achievement--${data['Internal Category'].toLowerCase()}`}
        onClick={() => {
          const previousFocusedDiv = document.querySelector('.had-focus-before-carousel');
          if (previousFocusedDiv) previousFocusedDiv.classList.remove('had-focus-before-carousel');
          setCarouselIndex(index);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const carousel = document.querySelector('.carousel');
            const previousFocusedDiv = document.querySelector('.had-focus-before-carousel');
            if (previousFocusedDiv) previousFocusedDiv.classList.remove('had-focus-before-carousel');
            e.target.classList.add('had-focus-before-carousel');
            setTimeout(() => carousel.focus(), 0);
            setCarouselIndex(index);
          }
        }}
        tabIndex="0"
      >
        { data.Version === version && <div className="achievement__new">New!</div> }
        <div className="achievement__title">{ getTitleIcon(data.Name) || data.Name }</div>
        <div className={`achievement__spaces achievement__spaces--${data['Num of Tiers']}`}>
          {stamps}
          <img
            className="achievement__spaces-svg"
            alt={`${data.Name} stamp`}
            src={awardTracks[data['Num of Tiers']][isSequential]}
          />
        </div>
      </div>
    );
  }
}

// ----------
// Prop types
// ----------

AchievementsItem.propTypes = {
  data: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    'Num of Tiers': PropTypes.number.isRequired,
    Version: PropTypes.string.isRequired,
    Sequential: PropTypes.string.isRequired,
    'Internal Category': PropTypes.string.isRequired,
  }).isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  version: PropTypes.string.isRequired,
  stamps: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default AchievementsItem;
