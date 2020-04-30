import React, { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react'; // https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react
import achievementsData from '../data/achievements.json';
import AchievementsItem from './AchievementsItem';
import './Achievements.css';
import '../css/simplebar.css';

// ---------
// Component
// ---------

function Achievements() {
  const scrollbarAchievements = useRef();
  const scrollbarMimic = useRef();
  const mimicScrollContentElement = useRef();
  const achievementsElement = useRef();

  // ------------------------------------------
  // Component did mount & Component did update
  // ------------------------------------------

  useEffect(() => {
    mimicScrollContentElement.current.style.height = `${achievementsElement.current.clientHeight}px`;

    setupScrollbar();
  });

  // ----------------------------------
  // Initialize scrollbar functionality
  // ----------------------------------
  
  function setupScrollbar() {
    let scrollingMimic = false;
    let scrollingAchievements = false;
    let achievementScrollTimeout = null;
    let mimicScrollTimeout = null;

    // -----------------------------------
    // Achievement scrolling functionality
    // -----------------------------------

    scrollbarAchievements.current.contentWrapperEl.addEventListener('scroll', (e) => {
      if (scrollingMimic) return;

      const scrollPercentage = e.target.scrollTop / (achievementsElement.current.clientHeight - document.body.clientHeight);
      const newScrollPos = (mimicScrollContentElement.current.clientHeight - scrollbarMimic.current.el.clientHeight) * scrollPercentage;

      scrollingAchievements = true;

      window.clearTimeout( achievementScrollTimeout );

      // Set a timeout to run after scrolling ends
      achievementScrollTimeout = setTimeout( () => { scrollingAchievements = false }, 66 );
      scrollbarMimic.current.contentWrapperEl.scrollTop = newScrollPos;
    });

    // -----------------------------
    // Mimic scrolling functionality
    // -----------------------------

    scrollbarMimic.current.contentWrapperEl.addEventListener('scroll', (e) => {
      if (scrollingAchievements) return;

      const scrollPercentage = e.target.scrollTop / (mimicScrollContentElement.current.clientHeight - scrollbarMimic.current.el.clientHeight);
      const newScrollPos = (achievementsElement.current.clientHeight - document.body.clientHeight) * scrollPercentage;

      scrollingMimic = true;

      window.clearTimeout( mimicScrollTimeout );

      // Set a timeout to run after scrolling ends
      mimicScrollTimeout = setTimeout( () => { scrollingMimic = false }, 66 );
    
      scrollbarAchievements.current.contentWrapperEl.scrollTop = newScrollPos;
    });
  }

  // ------
  // Render
  // ------

  return (
    <>
      <SimpleBar ref={scrollbarMimic} autoHide={false} className="mimic-scroll">
          <div className="mimic-scroll__content" ref={mimicScrollContentElement}></div>
      </SimpleBar>

      <SimpleBar ref={scrollbarAchievements} autoHide={false} className="achievements-wrapper">
          <div className="achievements" ref={achievementsElement}>
            { achievementsData.map(item => <AchievementsItem key={item['Unique Entry ID']} data={item} />) }
          </div>
      </SimpleBar>
    </>
  );
}

export default Achievements;
