import React from 'react';
import '../css/stamp-text.css';

function getRandomNumber(limit) {
  let randomNum = Math.ceil(Math.random() * limit);
  if (randomNum < 10) randomNum = `0${randomNum}`
  return randomNum;
}

function getDate(category, dateColor) {
  let path = null;
  let randomDate = `${getRandomNumber(12)}/${getRandomNumber(28)}/${20}`;
  // Create a unique id for each element


  if (category === 'event') {
    path = <path id={`curve-${category}`} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (category === 'fish') {
    path = <path id={`curve-${category}`} d="M26,117.4h92.1"/>;
  } else if (category === 'insect') {
    path = <path id={`curve-${category}`} d="M26,114.4h92.1"/>;
  } else if (category === 'communication') {
    path = <path id={`curve-${category}`} d="M36.8,81.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (category === 'diy') {
    path = <path id={`curve-${category}`} d="M26,120.4h92.1"/>;
  } else if (category === 'hha') {
    path = <path id={`curve-${category}`} d="M26,118.4h92.1"/>;
  } else if (category === 'plant') {
    path = <path id={`curve-${category}`} d="M36.8,74.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (category === 'smartphone') {
    path = <path id={`curve-${category}`} d="M26,122.4h92.1"/>;
  } else if (category === 'money') {
    path = <path id={`curve-${category}`} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (category === 'negative') {
    path = <path id={`curve-${category}`} d="M36.8,71.7c0-19.5,15.8-35.4,35.4-35.4s35.4,15.8,35.4,35.4"/>;
  } else if (category === 'landmaking') {
    path = <path id={`curve-${category}`} d="M26,123.4h92.1"/>;
  } else if (category === 'mydesign') {
    path = <path id={`curve-${category}`} d="M24,118.4h92.1"/>;
  }

  return (
    <svg className={`date-svg date-svg--${category}`} style={Object.assign({}, {enableBackground: 'new 0 0 144 144'}, (dateColor) ? {fill: dateColor} : {})} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 144 144" xmlSpace="preserve">
      <rect width="144" height="144"/>
      {path}
      <text width="500">
        <textPath alignmentBaseline="bottom" href={`#curve-${category}`} startOffset="50%">{randomDate}</textPath>
      </text>
    </svg>
  );
}

export default getDate;