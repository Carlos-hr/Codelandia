import React from "react";
import Banner from "./components/Banner/Banner";
import CardArea from "./components/CardArea/CardArea";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./constants/variaveis.css";
import sr from "./services/ScrollReveal";

const App = () => {
  const config = {
    origin: "top",
    duration: 1000,
    distance: "50px",
    scale: 1,
    reset: true,
  };

  sr.reveal(".head", config, { delay: 200 });
  sr.reveal(".main", config, { delay: 400 });
  sr.reveal(".card-area", config, { delay: 600 });
  sr.reveal(".card-container", config, { delay: 800 });
  sr.reveal(".card", config, { delay: 800 });
  sr.reveal(".footer", config, { delay: 1000 });

  return (
    <div className="App">
      <Header />
      <Banner />
      <CardArea />
      <Footer />
    </div>
  );
};

export default App;
