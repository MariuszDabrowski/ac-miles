import React from 'react';
import './Loader.css';

// ---------
// Component
// ---------

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('site-loaded');
    const loader = document.querySelector('.loader');

    loader.addEventListener('transitionend', () => {
      loader.classList.add('loader--hidden');
    });
  }, 500);
});

function Loader() {
  return (
    <div className="loader">
      <div className="nooki-wrapper">
        <div className="nooki">
          <svg className="nooki__tail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.1 27" style={{ enableBackground: 'new 0 0 23.1 27' }} xmlSpace="preserve">
            <path className="nooki__tail__base" d="M16,13c0.3,1.6,0.4,3.3,0.9,4.8c0.9,2.4,3,3.6,5.5,4c0.1,0.2,0.2,0.3,0.2,0.4c1.1,4.4,0.8,4.8-3.8,4.8 C9.3,27,3.1,22.4,0.6,13.6c-0.1-0.4-0.1-0.8-0.1-1.2C2.9,11.3,5,12.2,7,13.5C10,15.2,13.1,15.3,16,13z" />
            <path className="nooki__tail__highlight" d="M16,13c-2.9,2.3-5.9,2.2-9,0.4c-2.1-1.2-4.1-2.1-6.5-1.1c-1.1-3.6-0.3-6.8,2.3-9.5c2.5-2.6,5.6-3.4,9-2.3 c2.8,0.9,4.7,3.3,4.7,6.3C16.5,9,16.2,11,16,13z" />
          </svg>
          <svg className="nooki__body" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 79.1 55.8" style={{ enableBackground: 'new 0 0 79.1 55.8' }} xmlSpace="preserve">
            <path className="nooki__body__body" d="M58.5,51.2c5.1-1.1,9.9-5.4,13.6-9.1c0.9-0.9,1.8-1.9,2.6-2.9c1.5-2,2.9-4.2,3.9-6.5c1.1-2.5,0.5-3.1-2.2-3.6 c-1.6-0.2-3.2-0.8-4.9-1.2c-1.1,1.3-2.2,2.5-3.1,3.9c-2.5,3.9-6.4,5.8-10.7,5.6c-2.6-0.1-5.5-1.9-6.3-5c-1.4-5.7,0.1-10,6.5-11.7 c3.2-0.8,6.7-0.7,10-1c-1.1-4.9-4.2-7.9-8.7-9.5c-2.1-0.8-3.3-1.4-2.7-4.2c0.3-1.4-0.3-3.6-1.3-4.6c-2.1-2.1-4.9-1.5-7.5-0.7 c-2.3,0.7-3,2.3-2.6,4.6c0.3,1.6-0.6,1.7-1.9,1.5c-0.6-0.1-1.2-0.2-1.8-0.3c-9.1-0.6-18,0-26.7,3c-6.8,2.4-12,6.9-13.8,14.3 c-1.7,7.5-1.2,14.7,3.5,21.1c0,0,4.8,6.8,18.2,9.8c6.9,1.6,18.2,1.2,25-0.7C52.6,52.6,56.1,51.7,58.5,51.2z" />
            <path className="nooki__body__mask" d="M71.6,27.9c-1.1,1.3-2.2,2.5-3.1,3.9c-2.5,3.9-6.4,5.8-10.7,5.6c-2.6-0.1-5.5-1.9-6.3-5 c-1.4-5.7,0.1-10,6.5-11.7c3.2-0.8,6.7-0.7,10-1C69.2,22.4,70.4,25.2,71.6,27.9z" />
            <circle className="nooki__body__body" cx="61.8" cy="29" r="2.9" />
            <ellipse className="nooki__body__inner-ear" cx="53.2" cy="4.3" rx="1.6" ry="2.5" />
          </svg>
          <svg className="nooki__foot-back" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.2 26.2" style={{ enableBackground: 'new 0 0 30.2 26.2' }} xmlSpace="preserve">
            <path d="M30.2,11.2L10.3,0L4.5,11.1C4,12,3.5,12.8,2.9,13.6C2,15,1.3,16.4,0.4,17.9c-0.7,1.2-0.5,2.4,0.4,3.6 c3.4,4.8,8.8,6.3,13.5,3L30.2,11.2z" />
          </svg>
          <svg className="nooki__foot-front" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28.3 25.5" style={{ enableBackground: 'new 0 0 28.3 25.5' }} xmlSpace="preserve">
            <path d="M15.9,23.4c4.7,3.3,8.1,2.9,11.5-1.9c0.9-1.2,1.1-2.4,0.4-3.6c-0.8-1.4-1.6-2.9-2.5-4.2 c-0.6-0.8-1.1-1.7-1.5-2.6L18,0L0,10.1L15.9,23.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loader;
