import React from 'react';
import { stampImages, customStampsMap } from '../helpers/stampImages';
import './Stamp.css';
import DateSVG from './DateSVG';

function Stamp(props) {
  return (
    <div className={`stamp-wrapper stamp-wrapper--${props.i + 1}`} key={`${props.achievement['Unique Entry ID']}-${props.i}`}>
      <div className={`stamp  stamp--${props.i + 1}`}>
        {
        customStampsMap.hasOwnProperty(props.achievement['Internal ID']) ?
        <>
          <img
          src={customStampsMap[`${props.achievement['Internal ID']}`].stamps[props.i]}
          alt=""
          className="stamp__image" />

          <DateSVG
          category={customStampsMap[`${props.achievement['Internal ID']}`].curve}
          dateColor={customStampsMap[`${props.achievement['Internal ID']}`].dateColor}
          achievement={props.achievement}
          badgeIndex={props.i} />
        </>
        :
        <>
          <img
          src={stampImages[`${props.achievement['Internal Category'].toLowerCase()}`]}
          alt=""
          className="stamp__image" />

          <DateSVG
          category={props.achievement['Internal Category'].toLowerCase()}
          dateColor={null}
          achievement={props.achievement}
          badgeIndex={props.i} />
        </>
        }
      </div>
      {
      props.achievement['Num of Tiers'] === 1 &&
      Number(props.achievement['Tier 1']) > 1 &&
        <div className={`stamp-wrapper__tier stamp-wrapper__tier--1 stamp-wrapper__tier--${props.achievement['Internal Category'].toLowerCase()}`}>{Number(props.achievement[`Tier ${props.i + 1}`]).toLocaleString('EN-US')}</div>
      }
      {
      props.achievement['Num of Tiers'] > 1 &&
      Number(props.achievement[`Tier ${props.i + 1}`]) > 0 &&
        <div className={`stamp-wrapper__tier stamp-wrapper__tier--${props.achievement['Internal Category'].toLowerCase()}`}>{Number(props.achievement[`Tier ${props.i + 1}`]).toLocaleString('EN-US')}</div>
      }
    </div>
  );
}

export default Stamp;