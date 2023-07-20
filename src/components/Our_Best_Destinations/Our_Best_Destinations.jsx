import React from "react";
import "./Our_Best_Destinations.css";
import img1 from "../../Assets/Back_destinations_images/slide_image_1.jpg";
import img2 from "../../Assets/Back_destinations_images/slide_image_2.jpg";
import img3 from "../../Assets/Back_destinations_images/slide_image_3.jpg";
import img4 from "../../Assets/Back_destinations_images/slide_image_4.jpg";
import img5 from "../../Assets/Back_destinations_images/slide_image_5.jpg";
import img6 from "../../Assets/Back_destinations_images/slide_image_6.jpg";

import profile1 from '../../Assets/Our_best_reviews_images/sad.png';

const Our_Best_Destinations = () => {
  return (
    <div className="container review-main">
      <h1 className="font-coffee text-center mb-5">Our Reviews</h1>
      <div className="review-wrapper">
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
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
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
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
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
                        <i class="fa fa-facebook-official"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
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
    </div>
  );
};

export default Our_Best_Destinations;
