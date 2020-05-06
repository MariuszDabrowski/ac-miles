import React, { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react'; // https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react
import achievementsData from '../data/achievements.json';
import AchievementsItem from './AchievementsItem';
import './Achievements.css';
import '../css/simplebar.css';

// ---------
// Component
// ---------

function Achievements(props) {
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
    let diableHoversTimeout;
    const mimicScrollElement = document.querySelector('.mimic-scroll');

    // -----------------------------------
    // Achievement scrolling functionality
    // -----------------------------------

    scrollbarAchievements.current.contentWrapperEl.addEventListener('scroll', (e) => {

      // ---------------------------------------------------------------------------------
      // When scrolling the page add a class to allow us to disable hovers for performance
      // ---------------------------------------------------------------------------------

      clearTimeout(diableHoversTimeout);
      document.body.classList.add('disable-hover');

      diableHoversTimeout = setTimeout(function(){
          document.body.classList.remove('disable-hover');
      }, 100);

      // ----------------------------------------------------------------------------------
      // When scrolling the achievements panel, scroll our scrollbar to match it's position
      // ----------------------------------------------------------------------------------

      const scrollPercentage = e.target.scrollTop / (achievementsElement.current.clientHeight - document.body.clientHeight);
      const newScrollPos = (mimicScrollContentElement.current.clientHeight - scrollbarMimic.current.el.clientHeight) * scrollPercentage;

      scrollbarMimic.current.contentWrapperEl.scrollTop = newScrollPos;
    });

    // -----------------------------
    // Mimic scrolling functionality
    // -----------------------------

    scrollbarMimic.current.contentWrapperEl.addEventListener('scroll', (e) => {
      // Only have the achievements panel mimic scroll when we drag the scrollbar
      // Otherwise we'll run into situations where both scroll events are fighting against each other
      // There are tricks around this using timeout, but they cause more problems than they fix
      // The only downside to this solution is that if you use your scrollwheel over the scrollbar, the achievements panel won't scroll
      // Because the scrollbar is only 10px in width, this is not a big concern
      if (mimicScrollElement.classList.contains('simplebar-dragging')) {
        const scrollPercentage = e.target.scrollTop / (mimicScrollContentElement.current.clientHeight - scrollbarMimic.current.el.clientHeight);
        const newScrollPos = (achievementsElement.current.clientHeight - document.body.clientHeight) * scrollPercentage;
      
        scrollbarAchievements.current.contentWrapperEl.scrollTop = newScrollPos;
      }
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
            { achievementsData.map((item, index) => {
              return (
                <AchievementsItem
                key={item['Unique Entry ID']}
                data={item}
                index={index}
                stamps={(props.stamps) ? props.stamps[item['Internal ID']] : null}
                setCarouselIndex={props.setCarouselIndex}
                version={props.version} />
              )
            })}
          </div>
      </SimpleBar>
    </>
  );
}

export default Achievements;
