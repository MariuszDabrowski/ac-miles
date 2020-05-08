import React from 'react';
import './NookMiles.css';
import nookIcon from '../img/icon-nook-mile.png';
import achievementsData from '../data/achievements.json';

// ---------
// Component
// ---------

class NookMiles extends React.Component {
  state = {
    miles: 0
  }

  componentDidMount() {
    this.getMilesCount();
  }

  getMilesCount = () => {
    let miles = 0;

    achievementsData.forEach(item => {
      const tiers = item['Num of Tiers'];

      for (let i = 0; i < tiers; i++) {
        miles += Number(item[`Reward Tier ${i + 1}`]);
      }
    });

    this.setState({ miles: miles.toLocaleString('EN-US') });
  }

  // Component never changes, prevent React from re-rendering it every time
  shouldComponentUpdate(nextProps) {
    if (!this.state.miles) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="nook-miles">
        <div className="nook-miles__icon">
          <img src={nookIcon} alt="Nook miles icon"/>
        </div>
        <div className="nook-miles__count">{this.state.miles}</div>
      </div>
    );
  }
}

export default NookMiles;
