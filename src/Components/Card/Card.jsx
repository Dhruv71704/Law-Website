import React from "react";
import "./Card.css";
import { civilCardData } from "../../assets/assets";

const Card = () => {
  return (
    <>
      <div className="card-box container">
        {civilCardData.map((card, index) => (
          <article className="icon-box" key={index}>
            <div className="box-top">
              <div className="box-icon">
                <img className="icon-lg" src={card.src} alt="card image" />
              </div>
              <div className="box-header">
                <h5>{card.title} </h5>
              </div>
            </div>
            <div className="divider"></div>
            <div className="box-body">
              <p className="box-desc">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Card;
