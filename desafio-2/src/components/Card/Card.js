import React from "react";
import { imagesArray } from "../../constants/images";
import "./styles.css";

const Card = () => {
  const renderImages = () => {
    return imagesArray.map((image) => {
      return (
        <div key={image} className="card">
          <img src={image} alt="shoes" />
        </div>
      );
    });
  };

  return (
    <div className="card-container">
      {renderImages()}
    </div>
  );
};

export default Card;
