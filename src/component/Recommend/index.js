import React, { Component } from "react";
import "./index.less";
import AwesomeSwiper from "react-awesome-swiper";
import Img1 from "../../assets/images/timg.jpg";
import Img2 from "../../assets/images/timg1.jpg";
import Img3 from "../../assets/images/timg3.jpg";

const config = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  },
  // // Disable preloading of all images
  // preloadImages: false,
  // // Enable lazy loading
  // lazy: true,
  // speed: 500
};
export default class WheelPlanting extends Component {
  render() {
    return (
      <div className="recommend-area">
        <div className="recommend-title">今日推荐</div>
        <AwesomeSwiper
          ref={ref => (this.swiperRef = ref)}
          config={config}
          className="recommend-imgs"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={Img1} />
            </div>
            <div className="swiper-slide">
              <img src={Img2} />
            </div>
            <div className="swiper-slide">
              <img src={Img3} />
            </div>
          </div>

          {/* <div className="swiper-pagination"></div> */}
        </AwesomeSwiper>

        {/* <div className='position-left'>

        </div>
        <div className='position-right'>

</div> */}
      </div>
    );
  }
}
