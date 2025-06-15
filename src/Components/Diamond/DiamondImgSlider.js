import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import DiamondDetail1 from '../../Assets/Images/diamond-detail1.jpg';
import DiamondDetail2 from '../../Assets/Images/diamond-detail2.jpg';
import DiamondDetail3 from '../../Assets/Images/diamond-detail3.jpg';
import DiamondDetail4 from '../../Assets/Images/diamond-detail4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function DiamondImgSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="diamond_detail_img_wrapper">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="diamond_detail_slider"
      >
        <SwiperSlide>
          <img src={DiamondDetail1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail4} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="diamond_thumn_slider"
      >
        <SwiperSlide>
          <img src={DiamondDetail1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DiamondDetail4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
