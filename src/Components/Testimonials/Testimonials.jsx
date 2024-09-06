import React, { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";

const testimonialsData = [
  {
    id: 1,
    img: user_1,
    name: "Emily Williams",
    company: "Edusity, USA",
    quote:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 2,
    img: user_2,
    name: "William Jackson",
    company: "Edusity, USA",
    quote:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 3,
    img: user_3,
    name: "Emily Williams",
    company: "Edusity, USA",
    quote:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 4,
    img: user_4,
    name: "William Jackson",
    company: "Edusity, USA",
    quote:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
];

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          alt="next_icon"
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt="back_icon"
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            {testimonialsData.map((testimonial) => (
              <li key={testimonial.id}>
                <div className="slide">
                  <div className="user-info">
                    <img src={testimonial.img} alt={`user_${testimonial.id}`} />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                  <p>{testimonial.quote}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
