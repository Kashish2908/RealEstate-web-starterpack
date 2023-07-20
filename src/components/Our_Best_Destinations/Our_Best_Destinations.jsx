import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "./Our_Best_Destinations.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import img1 from "../../Assets/Back_destinations_images/slide_image_1.jpg";
import img2 from "../../Assets/Back_destinations_images/slide_image_2.jpg";
import img3 from "../../Assets/Back_destinations_images/slide_image_3.jpg";
import img4 from "../../Assets/Back_destinations_images/slide_image_4.jpg";
import img5 from "../../Assets/Back_destinations_images/slide_image_5.jpg";
import img6 from "../../Assets/Back_destinations_images/slide_image_6.jpg";

import profile1 from "../../Assets/Our_best_reviews_images/sad.png";

const Our_Best_Destinations = () => {
  return (
    <div className="container review-main">
      <h1 className="font-coffee text-center">Our Reviews</h1>
      <div className="review-wrapper">
        <div class="book">
          <div class="team-boxed">
            <div class="container">
              <div class="row people">
                <div class="col-md-12 col-lg-12 col-12 item">
                  <div class="box">
                    <img class="rounded-circle" src={profile1} />
                    <h3 class="name">Ben Johnson</h3>
                    <p class="title">Musician</p>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est, et interdum justo suscipit id. Etiam
                      dictum feugiat tellus, a semper massa.{" "}
                    </p>
                    <div class="social">
                      <a href="#">
                      <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                      <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cover">
            <img src={img1} alt="" />
          </div>
        </div>
        <div class="book">
          <div class="team-boxed">
            <div class="container">
              <div class="row people">
                <div class="col-md-12 col-lg-12 item">
                  <div class="box">
                    <img class="rounded-circle" src={profile1} />
                    <h3 class="name">Ben Johnson</h3>
                    <p class="title">Musician</p>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est, et interdum justo suscipit id. Etiam
                      dictum feugiat tellus, a semper massa.{" "}
                    </p>
                    <div class="social">
                      <a href="#">
                      <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                      <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cover">
            <img src={img4} alt="" />
          </div>
        </div>
        <div class="book">
          <div class="team-boxed">
            <div class="container">
              <div class="row people">
                <div class="col-md-12 col-lg-12 item">
                  <div class="box">
                    <img class="rounded-circle" src={profile1} />
                    <h3 class="name">Ben Johnson</h3>
                    <p class="title">Musician</p>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est, et interdum justo suscipit id. Etiam
                      dictum feugiat tellus, a semper massa.{" "}
                    </p>
                    <div class="social">
                      <a href="#">
                      <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                      <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cover">
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
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
          <div class="col-xl-3 col-sm-6 mb-5 card_new">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Manuella Nevoresky</h5>
              <span class="small text-uppercase text-muted card-founder">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                cupiditate corrupti sapiente aperiam voluptas facilis, illum quo
                qui adipisci, .
              </span>
              <ul class="social mb-0 list-inline mt-3 text-center">
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fas fa-user"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <h5 className="text-center">Paris</h5> */}
        </SwiperSlide>
        <SwiperSlide>
        <div class="col-xl-3 col-sm-6 mb-5 card_new">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Manuella Nevoresky</h5>
              <span class="small text-uppercase text-muted card-founder">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                cupiditate corrupti sapiente aperiam voluptas facilis, illum quo
                qui adipisci, .
              </span>
              <ul class="social mb-0 list-inline mt-3 text-center">
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fas fa-user"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="col-xl-3 col-sm-6 mb-5 card_new">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Manuella Nevoresky</h5>
              <span class="small text-uppercase text-muted card-founder">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                cupiditate corrupti sapiente aperiam voluptas facilis, illum quo
                qui adipisci, .
              </span>
              <ul class="social mb-0 list-inline mt-3 text-center">
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fas fa-user"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="col-xl-3 col-sm-6 mb-5 card_new">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Manuella Nevoresky</h5>
              <span class="small text-uppercase text-muted card-founder">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                cupiditate corrupti sapiente aperiam voluptas facilis, illum quo
                qui adipisci, .
              </span>
              <ul class="social mb-0 list-inline mt-3 text-center">
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fas fa-user"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Our_Best_Destinations;
