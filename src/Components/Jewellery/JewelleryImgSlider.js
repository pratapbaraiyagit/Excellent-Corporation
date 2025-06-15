import React, { useState } from 'react';
import JewelleryDetail1 from '../../Assets/Images/Jewellery/jewellerydetail1.jpg';
import JewelleryDetail2 from '../../Assets/Images/Jewellery/jewellerydetail2.jpg';
import JewelleryDetail3 from '../../Assets/Images/Jewellery/jewellerydetail3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';

export default function JewelleryImgSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="jewellery_detail_img_wrapper">
      <Swiper
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="jewellery_detail_slider"
      >
        <SwiperSlide>
          <div className="jewellery_img">
            <img src={JewelleryDetail1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="jewellery_img">
            <img src={JewelleryDetail2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="jewellery_img">
            <img src={JewelleryDetail3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="jewellery_thumn_slider"
      >
        <SwiperSlide>
          <div className="jewellery_thumb_img">
            <img src={JewelleryDetail1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="jewellery_thumb_img">
            <img src={JewelleryDetail2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="jewellery_thumb_img">
            <img src={JewelleryDetail3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
