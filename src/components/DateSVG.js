import React from 'react';
import randomDate from '../helpers/randomDate.js';
import './DateSVG.css';

// Number of days each badge date is incremented from initial badge
const dateIncrement = [
  [0, 1, 3, 7, 10, 20],
  [0, 3, 7, 10, 20, 30],
  [0, 5, 10, 15, 20, 25]
];

// --------------------
// Hard dates and cache
// --------------------

const customDates = {
  0: [[3, 20, 2020]], // - angling for perfection
  1: [[3, 20, 2020]], // - you've got the bug
  10: [[3, 30, 2020]], // - cornering the stalk market
  11: [[3, 20, 2020]], // - bell ringer
  13: [[3, 20, 2020]], // - seller of unwanted stuff
  16: [[3, 20, 2020]], // - shop to it
  21: [[3, 23, 2020], [4, 9, 2020], [5, 9, 2020], [6, 28, 2020], [1, 14, 2021]], // active island resident
  26: [[4, 1, 2020]], // flea flicker
  33: [[3, 20, 2020]], // - moving fees paid
  37: [[3, 20, 2020]], // - greedy weeder
  39: [[10, 16, 2020], [12, 1, 2020], [5, 1, 2020], [4, 12, 2020], [5, 31, 2020], [12, 2, 2020]], // - golden milestone
  41: [[4, 11, 2020], [7, 11, 2020], [10, 10, 2020], [1, 9, 2021]], // fishing tourney
  42: [[6, 27, 2020], [7, 25, 2020], [8, 22, 2020], [9, 26, 2020]], // bug-off
  49: [[3, 20, 2020]], // - trashed tools
  53: [[3, 20, 2020]], // (island name) miles
  55: [[3, 20, 2020]], // - have a nice DIY
  57: [[3, 20, 2020]], // - rock splitting champ
  58: [[3, 20, 2020]], // - nook miles for miles
  60: [[3, 21, 2020]], // - paydirt
  67: [[3, 20, 2020]], // - rough hewn
  68: [[3, 20, 2020], [3, 29, 2020], [4, 8, 2020], [4, 18, 2020], [5, 8, 2020]], // island togetherness
  70: [[3, 20, 2020]], // - pick of the bunch
  72: [[3, 20, 2020]], // - DIY tools
  75: [[3, 20, 2020]], // - island shutterbug
  76: [[3, 20, 2020]], // - nook phone life
  79: [[3, 20, 2020]], // - shady shakedown
  90: [[4, 27, 2020]],// faked out
  91: [[4, 26, 2020], [9, 11, 2020], [3, 13, 2021]], // true patron of the arts
  92: [[4, 23, 2020], [4, 23, 2020], [4, 23, 2020]], // shrubbery hubbubberry
};

const sessionDates = {};

// -----------
// Format date
// -----------

function getDate(date, achievement, badgeIndex) {
  let internalID = achievement['Internal ID'];
  let month = null;
  let day = null;
  let year = null;

  // If the first item in our date parameter is an array we know we're dealing with a custom date (as opposed to a random date)
  if (Array.isArray(date[0])) {
    // If the array length is greater than 1, we want to use those static dates to populate our badges
    if (date.length > 1) {
      month = ('0' + date[badgeIndex][0]).slice(-2);
      day = ('0' + date[badgeIndex][1]).slice(-2);
      year = String(date[badgeIndex][2]).slice(-2);
      
      return `${month}/${day}/${year}`;
    } else {
      // If the array length is 1, we start at that date and do what we normally would do
      date = date[0];
    }
  }

  if (sessionDates.hasOwnProperty(internalID)) {
    // Increment date from previous step
    const [ lastBadgeMonth, lastBadgeDay, lastBadgeYear ] = sessionDates[internalID];
    const nextDate = new Date(lastBadgeYear, lastBadgeMonth - 1, lastBadgeDay);

    nextDate.setDate(nextDate.getDate() + dateIncrement[achievement['Internal ID'] % 3][badgeIndex]);
    const updatedDate = [
      nextDate.getMonth() + 1,
      nextDate.getDate(),
      nextDate.getFullYear()
    ]

    month = ('0' + updatedDate[0]).slice(-2);
    day = ('0' + updatedDate[1]).slice(-2);
    year = String(updatedDate[2]).slice(-2);

    sessionDates[internalID] = updatedDate;
  } else {
    // Return date passed
    month = ('0' + date[0]).slice(-2);
    day = ('0' + date[1]).slice(-2);
    year = String(date[2]).slice(-2);

    sessionDates[internalID] = date;
  }

  return `${month}/${day}/${year}`;
}

// ---------
// Component
// ---------

function DateSVG(props) {
  let internalID = props.achievement['Internal ID'];
  let path = null;
  let id = `curve-${props.achievement['Internal ID']}-${props.badgeIndex}-${Math.ceil(Math.random() * 100000)}`;
  
  // Create a unique id for each element

  if (props.category === 'event') {
    path = <path id={id} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (props.category === 'fish') {
    path = <path id={id} d="M26,117.4h92.1"/>;
  } else if (props.category === 'insect') {
    path = <path id={id} d="M26,114.4h92.1"/>;
  } else if (props.category === 'communication') {
    path = <path id={id} d="M36.8,81.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (props.category === 'diy') {
    path = <path id={id} d="M26,120.4h92.1"/>;
  } else if (props.category === 'hha') {
    path = <path id={id} d="M26,118.4h92.1"/>;
  } else if (props.category === 'plant') {
    path = <path id={id} d="M36.8,74.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (props.category === 'smartphone') {
    path = <path id={id} d="M26,122.4h92.1"/>;
  } else if (props.category === 'money') {
    path = <path id={id} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (props.category === 'negative') {
    path = <path id={id} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (props.category === 'landmaking') {
    path = <path id={id} d="M26,123.4h92.1"/>;
  } else if (props.category === 'mydesign') {
    path = <path id={id} d="M24,118.4h92.1"/>;
  }

  return (
    <svg className={`date-svg date-svg--${props.category}`} style={Object.assign({}, {enableBackground: 'new 0 0 144 144'}, (props.dateColor) ? {fill: props.dateColor} : {})} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 144 144" xmlSpace="preserve">
      <rect width="144" height="144"/>
      {path}
      <text>
        <textPath
        href={`#${id}`}
        startOffset="50%">
          {
            (customDates.hasOwnProperty(internalID)) ?
            getDate(customDates[internalID], props.achievement, props.badgeIndex) :
            getDate(randomDate(), props.achievement, props.badgeIndex)
          }
        </textPath>
      </text>
    </svg>
  );
}

export default DateSVG;
