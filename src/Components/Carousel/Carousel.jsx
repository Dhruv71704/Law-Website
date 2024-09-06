import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { slides } from "../../assets/assets";
import dark_arrow from "../../assets/images/dark-arrow.png";
import "./Carousel.css";
console.log(slides);
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const intervalTime = 3500; // 3 seconds for autoplay

  // Function to go to the next slide
  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  // Autoplay with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide
    }, intervalTime);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {slides.map((item, idx) => {
        return (
          <div
            className={
              slide === idx ? "carousel-slide" : "carousel-slide slide-hidden"
            }
          >
            <img src={item.src} alt={item.alt} key={idx} />
            <div className="slider-caption">
              <h3 className="header-decorated">{item.h3}</h3>
              <h2 className="slider-header">{item.h2}</h2>
              <p className="slider-p">{item.p}</p>
              <button className="btn">
                Get An Appointment <img src={dark_arrow} alt="dark_arrow" />
              </button>
            </div>
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Carousel;
