import React, { Component, useEffect, useState, useRef } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import AwesomeSwiper from "react-awesome-swiper";

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
  }
  // // Disable preloading of all images
  // preloadImages: false,
  // // Enable lazy loading
  // lazy: true,
  // speed: 500
};
const WheelPlanting = () => {
  const [imgUrlArr, setImgUrlArr] = useState([]);

  const swiperRef = useRef(null);
  useEffect(() => {
    AxiosData.get("showRecommend.htm")
      .then(res => {
        // console.log(res);
        setImgUrlArr(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="recommend-area">
      <div className="recommend-title">今日推荐</div>
      <AwesomeSwiper
        // ref={ref => (this.swiperRef = ref)}

        ref={swiperRef}
        config={config}
        className="recommend-imgs"
      >
        <div className="swiper-wrapper">
          {imgUrlArr.map((item, index) => {
            return (
              <div className="swiper-slide">
                <img src={item.imgURL} />
              </div>
            );
          })}
        </div>
      </AwesomeSwiper>
    </div>
  );
};

export default WheelPlanting;
