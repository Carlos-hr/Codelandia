import React from "react";
import { imagesArray } from "./constants/images";

const Card = () => {

  const renderImages = () => {
    return imagesArray.map((image) => {
      return <img src={image} key={image} alt="shoes" />;
    });
  };

  return (
    <div>
      <p>Card</p>
      {renderImages()}
    </div>
  );
};

export default Card;
