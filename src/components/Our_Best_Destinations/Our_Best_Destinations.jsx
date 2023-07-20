import React from "react";
import "./Our_Best_Destinations.css";
import img1 from "../../Assets/Back_destinations_images/slide_image_1.jpg";
import img2 from "../../Assets/Back_destinations_images/slide_image_2.jpg";
import img3 from "../../Assets/Back_destinations_images/slide_image_3.jpg";
import img4 from "../../Assets/Back_destinations_images/slide_image_4.jpg";
import img5 from "../../Assets/Back_destinations_images/slide_image_5.jpg";
import img6 from "../../Assets/Back_destinations_images/slide_image_6.jpg";

const Our_Best_Destinations = () => {
  return (
    <div className="container mb-5">
        <h1 className="font-coffee text-center mb-5">Our Reviews</h1>
      <div className="review-wrapper">
        <div class="book">
        <div class="card1 ">
      <div class="img-bx">
        <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
      </div>
      <div class="content">
        <div class="detail">
          <h2>Emilia Roy<br /><span>Senior Designer</span></h2>
          <ul class="sci">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
          <div class="cover">
            <img src={img1} alt="" />
          </div>
        </div>
        <div class="book">
          <p>Hello</p>
          <div class="cover">
            <p>Hover Me</p>
          </div>
        </div>
        <div class="book">
          <p>Hello</p>
          <div class="cover">
            <p>Hover Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Best_Destinations;
