/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Typed from "typed.js";
import "./styles.css";

const Banner = () => {
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.",
      ],
      typeSpeed: 50,
      showCursor: false
    };

    typed.current = new Typed("#typed", options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="main">
      <div className="heading">
        <h1>A melhor loja de Jordan</h1>
        <h2 id="typed" />
      </div>
    </div>
  );
};

export default Banner;
