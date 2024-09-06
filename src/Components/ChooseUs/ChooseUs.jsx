import React from "react";
import "./ChooseUs.css";
import leftImg from "../../assets/images/feature.jpg";

const ChooseUs = () => {
  return (
    <>
      <div className="choose-box">
        <div className="left-box">
          <img src={leftImg} alt="leftImg" />
        </div>
        <div className="right-box"></div>
      </div>
    </>
  );
};

export default ChooseUs;
