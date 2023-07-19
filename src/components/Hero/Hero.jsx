import React from "react";
import "./Hero.css";
import coffee from "../../Assets/Hero_images/coffee.png";
import list from "../../Assets/Hero_images/list.png";
import location from "../../Assets/Hero_images/location.png";
import aboutme from "../../Assets/Hero_images/aboutme.png";

const Hero = () => {
  return (
    <section className="Hero">

    <div className="container">
      <div className="row text-center hero-wrapper">
        <div className="col-2 flexColCenter text-center">
          <img src={coffee} alt="gr" className="hero-image" />
          <span>Coffee</span>
        </div>
        <div className="col-2 flexColCenter">
          <img src={list} alt="gr" className="hero-image" />
          <span>Fav List</span>
        </div>
        <div className="col-4 heading">
            <span className="font-coffee">Travelling Monks</span>
            <span className="text-muted">Lets Explore Peace</span>
        </div>
        <div className="col-2 flexColCenter">
          <img src={location} alt="gr" className="hero-image" />
          <span>Location</span>
        </div>
        <div className="col-2 flexColCenter">
          <img src={aboutme} alt="gr" className="hero-image" />
          <span>About Me</span>
        </div>
      </div>
    </div>
    {/* tour search */}
    {/* <div className="container-fluid"> */}
    <section className="tour-search mt-5">
        <div className="container">

            <form action="" className="tour-search-form">

                <div className="input-wrapper">
                    <label htmlFor="destination" className="input-label">Search Destination*</label>

                    <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                        className="input-field"/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="people" className="input-label">Pax Number*</label>

                    <input type="number" name="people" id="people" required placeholder="No.of People"
                        className="input-field"/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="checkin" className="input-label">Checkin Date**</label>

                    <input type="date" name="checkin" id="checkin" required className="input-field"/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="checkout" className="input-label">Checkout Date*</label>

                    <input type="date" name="checkout" id="checkout" required className="input-field"/>
                </div>

                <button type="submit" className="btn1 btn1-secondary">Inquire now</button>

            </form>

        </div>
    </section>
    {/* </div> */}
    </section>
  );
};

export default Hero;
