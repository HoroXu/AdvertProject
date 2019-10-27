import React, { Component, useEffect, useState, useRef } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import AwesomeSwiper from "react-awesome-swiper";
import Img1 from "../../assets/images/timg.jpg";
import Img2 from "../../assets/images/timg1.jpg";
import Img3 from "../../assets/images/timg3.jpg";

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
const WheelPlanting = () => {
  const [imgUrlArr, setImgUrlArr] = useState([]);

  const swiperRef = useRef(null);
  useEffect(() => {
    AxiosData.get("showPresence.htm")
      .then(res => {
        // console.log(res);
        setImgUrlArr(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wheel-planting-area">
      <div className="wheel-planting-title">本馆风采</div>
      <AwesomeSwiper
        // ref={ref => (this.swiperRef = ref)}

        ref={swiperRef}
        config={config}
        className="wheel-planting-imgs"
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

        {/* <div className="swiper-pagination"></div> */}
      </AwesomeSwiper>
    </div>
  );
};

export default WheelPlanting;
