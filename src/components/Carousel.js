import React from 'react';
import Flickity from 'flickity';
import './Carousel.css';
import '../css/flickity.css';
import achievementsData from '../data/achievements.json';
import CarouselItem from './CarouselItem';


class Carousel extends React.Component {

  // -----
  // State
  // -----

  state = {
    flickity: null
  }

  // -------------------
  // Component Did Mount
  // -------------------

  componentDidMount = () => {
    const flickity = new Flickity('.carousel', {
      cellSelector: '.card-wrapper',
      pageDots: false,
      initialIndex: this.props.carouselIndex,
      prevNextButtons: false,
      setGallerySize: false,
    });

    flickity.on('select', (index) => {
      if (this.props.visibility) {
        this.arrowClasses(index, flickity.slides.length - 1);
        window.history.replaceState({}, '', `?achievement=${index}`)
      }
    });

    this.setState({ flickity: flickity });
  }

  // --------------------
  // Component Did Update
  // --------------------

  componentDidUpdate = () => {
    const carousel = document.querySelector('.carousel');

    if (this.props.visibility === true) {
      carousel.focus();
  
      this.state.flickity.select(this.props.carouselIndex, false, true);

      carousel.classList.remove('carousel--hidden');
      this.arrowClasses(this.state.flickity.selectedIndex, this.state.flickity.slides.length - 1);
    } else {
      carousel.classList.add('carousel--hidden');
    }
  }

  // -----------------------------------------------
  // Hide carousel arrows when on first or last tile
  // -----------------------------------------------

  arrowClasses = (index, lastIndex) => {
    const carousel = document.querySelector('.carousel');

    if (index === 0) {
      carousel.classList.add('carousel--first-slide');
      carousel.classList.remove('carousel--last-slide');
    }
    else if (index === lastIndex) {
      carousel.classList.add('carousel--last-slide');
      carousel.classList.remove('carousel--first-slide');
    }
    else {
      carousel.classList.remove('carousel--first-slide');
      carousel.classList.remove('carousel--last-slide');
    }
  }

  // ------
  // Render
  // ------

  render = () => {
    return (
      <div className={`carousel carousel--hidden`}>
        {/* // stamps={this.props.stamps[item['Internal ID']]}  */}
        { achievementsData.map(item => {
          return (
            <CarouselItem
            key={item['Unique Entry ID']}
            stamps={this.props.stamps[item['Internal ID']]}
            data={item}
            version={this.props.version} />
          );
        })}
        <div
        className={`carousel__button carousel__button--prev`}
        onClick={() => (this.state.flickity) ? this.state.flickity.previous() : null}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 214.3" style={{ enableBackground: 'new 0 0 74.8 214.3' }} xmlSpace="preserve">
            <path d="M0.1,101.5C0.6,95.1,3.7,89.9,7.3,85C16.1,72.9,25,60.8,33.9,48.8C43,36.4,52.2,23.9,61.3,11.5c2.3-3.2,4.5-6.5,6.8-9.6 c1.6-2.1,2.9-2.3,4.5-1.1c1.5,1.2,1.8,2.1,0.7,3.8c-1.5,2.5-3.1,5-4.9,7.4c-13,17.8-26,35.5-39,53.2c-6,8.2-12.1,16.4-18.2,24.6 c-3.5,4.7-5.8,10.1-6,15.9c-0.3,6.4,2.2,12.2,6,17.4c8.8,12.1,17.6,24.1,26.5,36.2c10.1,13.8,20.3,27.6,30.5,41.3 c1.3,1.8,3.3,4.8,4.6,6.6c2.8,3.8,2.8,3.8-1.1,6.6c-0.9,0.5-1,0.8-1.8,0c-6.9-9.6-13.8-19.2-20.7-28.7 c-7.7-10.6-15.5-21.2-23.2-31.8c-6-8.2-11.9-16.5-18-24.6c-4-5.3-7.3-10.9-7.9-17.7l0.1-5.1L0.1,101.5z"/>
          </svg>
        </div>
  
        <div
        className={`carousel__button carousel__button--next`}
        onClick={() => (this.state.flickity) ? this.state.flickity.next() : null}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 214.3" style={{ enableBackground: 'new 0 0 74.8 214.3' }} xmlSpace="preserve">
            <path d="M0.1,101.5C0.6,95.1,3.7,89.9,7.3,85C16.1,72.9,25,60.8,33.9,48.8C43,36.4,52.2,23.9,61.3,11.5c2.3-3.2,4.5-6.5,6.8-9.6 c1.6-2.1,2.9-2.3,4.5-1.1c1.5,1.2,1.8,2.1,0.7,3.8c-1.5,2.5-3.1,5-4.9,7.4c-13,17.8-26,35.5-39,53.2c-6,8.2-12.1,16.4-18.2,24.6 c-3.5,4.7-5.8,10.1-6,15.9c-0.3,6.4,2.2,12.2,6,17.4c8.8,12.1,17.6,24.1,26.5,36.2c10.1,13.8,20.3,27.6,30.5,41.3 c1.3,1.8,3.3,4.8,4.6,6.6c2.8,3.8,2.8,3.8-1.1,6.6c-0.9,0.5-1,0.8-1.8,0c-6.9-9.6-13.8-19.2-20.7-28.7 c-7.7-10.6-15.5-21.2-23.2-31.8c-6-8.2-11.9-16.5-18-24.6c-4-5.3-7.3-10.9-7.9-17.7l0.1-5.1L0.1,101.5z"/>
          </svg>      
        </div>
        
      </div>
    );
  }
}

export default Carousel;
