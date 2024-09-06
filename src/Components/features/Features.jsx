import React from "react";
import "./Feature.css";
import lawImage from "../../assets/images/scale.png";

const cardData = [
  {
    title: "Criminal Law",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed scelerisque sapien. Sed sodales, libero non faucibus rutrum, purus tellus finibus diam, eget ornare tortor leo eget erat.",
  },
  {
    title: "Family Law",
    description:
      "Curabitur id felis et felis volutpat varius. Aliquam sit amet dolor eget enim scelerisque eleifend vel ac nisi.",
  },
  {
    title: "Corporate Law",
    description:
      "Maecenas vitae lacus tincidunt, suscipit magna a, hendrerit neque. In vehicula vestibulum elit.",
  },
  {
    title: "Environmental Law",
    description:
      "Phasellus finibus leo ut ligula tempus, vel congue turpis dignissim.",
  },
  {
    title: "Tax Law",
    description: "Integer nec urna et mauris varius dictum et in nisi.",
  },
  {
    title: "Labor Law",
    description:
      "Etiam tristique velit sed urna gravida, id suscipit enim cursus.",
  },
];
const Features = () => {
  return (
    <>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="gtco-practice-area-item" key={index}>
            <div className="gtco-icon">
              <img src={lawImage} alt={`${card.title} image`} />
            </div>
            <div className="gtco-copy">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
