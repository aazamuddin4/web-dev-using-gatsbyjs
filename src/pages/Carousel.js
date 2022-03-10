import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';

const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    emulateTouch: true,
    transitionTime: 400,
    showArrows: false,
    showIndicators: true,
    renderArrowPrev: (clickHandler) => {
      return (
        <span className="arrow-left" onClick={clickHandler}>
        </span>
      )
    },
    renderArrowNext: (clickHandler) => {
      return (
        <span className="arrow-right" onClick={clickHandler}>
        </span>
      )
    },
  }

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel {...carouselProp} renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = { margin: '0 8px', cursor: "pointer" , display: 'inline-block', width: 20, height: 20, position: 'relative', right: '590px', bottom: '1px'};
              const style = isSelected
                ? { ...defStyle, background: "white", borderColor: 'black'}
                : { ...defStyle, background: "black", borderColor: 'white'};
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  role="button"
                  tabIndex={0}
                  aria-label={`${index + 1}`}
                >
                </span>
              );
            }}>
          <div className='ads-banner-image'/>
          <div className='ads-banner-image2'/>
          <div className='ads-banner-image3'/>
          </Carousel>
          
        );
        
    }
};

export default DemoCarousel;