import React from 'react';
import { stampImages, customStampsMap } from '../helpers/stampImages';
import './Stamp.css';
import DateSVG from './DateSVG';



class Stamp extends React.Component {
  render () {
    return (
      <div className={`stamp-wrapper stamp-wrapper--${this.props.i + 1}`} key={`${this.props.achievement['Unique Entry ID']}-${this.props.i}`}>
        <div className={`stamp  stamp--${this.props.i + 1}`}>
          {
          customStampsMap.hasOwnProperty(this.props.achievement['Internal ID']) ?
          <>
            <img
            src={customStampsMap[`${this.props.achievement['Internal ID']}`].stamps[this.props.i]}
            alt=""
            className="stamp__image" />
  
            <DateSVG
            category={customStampsMap[`${this.props.achievement['Internal ID']}`].curve}
            dateColor={customStampsMap[`${this.props.achievement['Internal ID']}`].dateColor}
            achievement={this.props.achievement}
            badgeIndex={this.props.i} />
          </>
          :
          <>
            <img
            src={stampImages[`${this.props.achievement['Internal Category'].toLowerCase()}`]}
            alt=""
            className="stamp__image" />
  
            <DateSVG
            category={this.props.achievement['Internal Category'].toLowerCase()}
            dateColor={null}
            achievement={this.props.achievement}
            badgeIndex={this.props.i} />
          </>
          }
        </div>
        {
        this.props.achievement['Num of Tiers'] === 1 &&
        Number(this.props.achievement['Tier 1']) > 1 &&
          <div className={`stamp-wrapper__tier stamp-wrapper__tier--1 stamp-wrapper__tier--${this.props.achievement['Internal Category'].toLowerCase()}`}>{Number(this.props.achievement[`Tier ${this.props.i + 1}`]).toLocaleString('EN-US')}</div>
        }
        {
        this.props.achievement['Num of Tiers'] > 1 &&
        Number(this.props.achievement[`Tier ${this.props.i + 1}`]) > 0 &&
          <div className={`stamp-wrapper__tier stamp-wrapper__tier--${this.props.achievement['Internal Category'].toLowerCase()}`}>{Number(this.props.achievement[`Tier ${this.props.i + 1}`]).toLocaleString('EN-US')}</div>
        }
      </div>
    );
  }
}

export default Stamp;