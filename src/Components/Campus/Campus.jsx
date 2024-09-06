import React, { useState } from "react";
import "./Campus.css";
import campus_1 from "../../assets/images/gallery-1.png";
import campus_2 from "../../assets/images/gallery-2.png";
import campus_3 from "../../assets/images/gallery-3.png";
import campus_4 from "../../assets/images/gallery-4.png";
import campus_5 from "../../assets/images/gallery-1.png";
import campus_6 from "../../assets/images/gallery-2.png";
import campus_7 from "../../assets/images/gallery-3.png";
import campus_8 from "../../assets/images/gallery-4.png";
import dark_arrow from "../../assets/images/white-arrow.png";

const Campus = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    campus_1,
    campus_2,
    campus_3,
    campus_4,
    campus_5,
    campus_6,
    campus_7,
    campus_8,
  ];

  const visibleImages = showMore ? images : images.slice(0, 4);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="campus">
      <div class="gallery">
        {visibleImages.map((image, index) => (
          <img src={image} alt={`Campus ${index + 1}`} key={index} />
        ))}
      </div>
      {/* {!showMore && (
        <button className="btn dark-btn" onClick={handleShowMore}>
          See more here <img src={dark_arrow} alt="dark_arrow" />
        </button>
      )} */}
      <button className="btn dark-btn" onClick={toggleShowMore}>
        {showMore ? "Hide" : "See more here"}{" "}
        <img src={dark_arrow} alt="dark_arrow" />
      </button>
    </div>
  );
};

export default Campus;
