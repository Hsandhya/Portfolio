import React from 'react'
import './Cube.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Html from '../../img/html.png'
import Css from '../../img/css.png'
import Js from '../../img/react1.png'
import React1 from '../../img/react.png'


import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

const Cube = () => {
  return (
    <div>
      <Swiper style={{width:"20%", height:"30vh"}}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Html} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Css} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Js} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={React1} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Cube
