import React from 'react';
import './Loader.css';
import nooki from '../img/nooki.svg';

// ---------
// Component
// ---------

window.addEventListener('load', function () {
  setTimeout(() => {
    document.body.classList.add('site-loaded');
  }, 0);
})

function Loader() {
  return (
    <div className="loader">
      <img className="nooki" src={nooki} alt=""/>
    </div>
  );
}

export default Loader;
