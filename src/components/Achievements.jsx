import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react'; // https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react
import achievementsData from '../data/achievements.json';
import AchievementsItem from './AchievementsItem';
import './Achievements.css';
import '../css/simplebar.css';

// ---------
// Component
// ---------

function Achievements({
  stamps,
  version,
  setCarouselIndex,
}) {
  const scrollbarAchievements = useRef();
  const scrollbarMimic = useRef();
  const mimicScrollContentElement = useRef();
  const achievementsElement = useRef();

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

      if (!/Edge/.test(navigator.userAgent)) {
        clearTimeout(diableHoversTimeout);
        document.body.classList.add('disable-hover');

        diableHoversTimeout = setTimeout(() => {
          document.body.classList.remove('disable-hover');
        }, 100);
      }

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

  // ------------------------------------------
  // Component did mount & Component did update
  // ------------------------------------------

  useEffect(() => {
    mimicScrollContentElement.current.style.height = `${achievementsElement.current.clientHeight}px`;
    scrollbarMimic.current.recalculate();

    setupScrollbar();
  });

  // ------
  // Render
  // ------

  return (
    <>
      <SimpleBar ref={scrollbarMimic} autoHide={false} className="mimic-scroll">
        <div className="mimic-scroll__content" ref={mimicScrollContentElement} />
      </SimpleBar>

      <SimpleBar ref={scrollbarAchievements} autoHide={false} className="achievements-wrapper">
        <div className="achievements" ref={achievementsElement}>
          { achievementsData.map((item, index) => (
            <AchievementsItem
              key={item['Unique Entry ID']}
              data={item}
              index={index}
              stamps={(stamps) ? stamps[item['Internal ID']] : null}
              setCarouselIndex={setCarouselIndex}
              version={version}
            />
          ))}
        </div>
      </SimpleBar>
    </>
  );
}

// ----------
// Prop Types
// ----------

Achievements.propTypes = {
  stamps: PropTypes.shape({}).isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
  version: PropTypes.string.isRequired,
};

export default Achievements;
