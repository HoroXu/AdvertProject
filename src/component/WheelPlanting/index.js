import React, { Component } from "react";
import "./index.less";
import AwesomeSwiper from "react-awesome-swiper";

const config = {
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  speed: 500
};
export default class WheelPlanting extends Component {
  render() {
    return (
      <div className="wheel-planting-area">
        <div className='wheel-planting-title'>本馆风采</div>
        <AwesomeSwiper
          ref={ref => (this.swiperRef = ref)}
          config={config}
          className="wheel-planting-imgs"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">slider1</div>
            <div className="swiper-slide">slider2</div>
            <div className="swiper-slide">slider3</div>
          </div>

          {/* <div className="swiper-pagination"></div> */}
        </AwesomeSwiper>
      </div>
    );
  }
}
