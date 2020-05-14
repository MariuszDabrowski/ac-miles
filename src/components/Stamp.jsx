import React from 'react';
import PropTypes from 'prop-types';
import { stampImages, customStampsMap } from '../helpers/stampImages';
import './Stamp.css';
import DateSVG from './DateSVG';

function Stamp({ achievement, i }) {
  const rewardValue = achievement[`Reward Tier ${i + 1}`];

  return (
    <div className={`stamp-wrapper stamp-wrapper--${i + 1}`} key={`${achievement['Unique Entry ID']}-${i}`}>
      { rewardValue && (
        <div className={`stamp-reward stamp-reward--${achievement['Internal Category'].toLowerCase()}`}>
          <span className="stamp-reward__value">{ rewardValue.toLocaleString('US-EN') }</span>
          Miles
        </div>
      )}
      <div className={`stamp  stamp--${i + 1}`}>
        {(
          customStampsMap.hasOwnProperty(achievement['Internal ID'])
            ? (
              <>
                <img
                  src={customStampsMap[`${achievement['Internal ID']}`].stamps[i]}
                  alt={`${achievement.Name} stamp`}
                  className="stamp__image"
                />

                <DateSVG
                  category={customStampsMap[`${achievement['Internal ID']}`].curve}
                  dateColor={customStampsMap[`${achievement['Internal ID']}`].dateColor}
                  achievement={achievement}
                  badgeIndex={i}
                />
              </>
            )
            : (
              <>
                <img
                  src={stampImages[`${achievement['Internal Category'].toLowerCase()}`]}
                  alt={`${achievement.Name} stamp`}
                  className="stamp__image"
                />

                <DateSVG
                  category={achievement['Internal Category'].toLowerCase()}
                  dateColor={null}
                  achievement={achievement}
                  badgeIndex={i}
                />
              </>
            )
        )}
      </div>
      {
      achievement['Num of Tiers'] === 1
      && Number(achievement['Tier 1']) > 1
      && (
        <div className={`stamp-wrapper__tier stamp-wrapper__tier--1 stamp-wrapper__tier--${achievement['Internal Category'].toLowerCase()}`}>
          {Number(achievement[`Tier ${i + 1}`]).toLocaleString('EN-US')}
        </div>
      )
      }
      {
      achievement['Num of Tiers'] > 1
      && Number(achievement[`Tier ${i + 1}`]) > 0
      && (
        <div className={`stamp-wrapper__tier stamp-wrapper__tier--${achievement['Internal Category'].toLowerCase()}`}>
          {Number(achievement[`Tier ${i + 1}`]).toLocaleString('EN-US')}
        </div>
      )
      }
    </div>
  );
}

// ----------
// Prop types
// ----------

Stamp.propTypes = {
  achievement: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    'Internal ID': PropTypes.number.isRequired,
    'Internal Category': PropTypes.string.isRequired,
    'Unique Entry ID': PropTypes.string.isRequired,
    'Num of Tiers': PropTypes.number.isRequired,
    'Tier 1': PropTypes.number.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
};

export default Stamp;
