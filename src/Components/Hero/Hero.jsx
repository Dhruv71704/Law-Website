import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/images/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h2 className="hero-text-inner">We Offer</h2>
        <h1>Affordable and Effective Legal Help</h1>
        <p>
          Our expert team of attorneys and consultants will be glad to provide
          necessary legal assistance.
        </p>
        <button className="btn">
          Get An Appointment <img src={dark_arrow} alt="dark_arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
