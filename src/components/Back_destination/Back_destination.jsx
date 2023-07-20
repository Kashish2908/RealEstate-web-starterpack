import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "./Back_destination.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

import img1 from "../../Assets/Back_destinations_images/slide_image_1.jpg";
import img2 from "../../Assets/Back_destinations_images/slide_image_2.jpg";
import img3 from "../../Assets/Back_destinations_images/slide_image_3.jpg";
import img4 from "../../Assets/Back_destinations_images/slide_image_4.jpg";
import img5 from "../../Assets/Back_destinations_images/slide_image_5.jpg";
import img6 from "../../Assets/Back_destinations_images/slide_image_6.jpg";

const Back_destination = () => {
  return (
    <div className="container mt-5">
      <h1 className="container text-center font-coffee">
        Backpack Destinations
      </h1>
      <Swiper 
      
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 10,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper_web"
      >
        <SwiperSlide className="mb-3">
          <img src={img1} />
          <h5 className="text-center">Paris</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        
      </Swiper>
      <Swiper 
      
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper_mobile"
      >
        <SwiperSlide className="mb-3">
          <img src={img1} />
          <h5 className="text-center">Paris</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
          <h5 className="text-center">Paris</h5>

        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Back_destination;
