import React from "react";
import Card from "../Card/Card";
import "./styles.css";

const CardArea = () => {
  return (
    <div className="card-area">
      <div className="card-area-heading">
        <h1 className="card-area-title">Destaques</h1>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </p>
      </div>
        <Card />
    </div>
  );
};

export default CardArea;
