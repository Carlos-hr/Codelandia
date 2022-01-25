import React from "react";
import Banner from "./components/Banner/Banner";
import CardArea from "./components/CardArea/CardArea";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./constants/variaveis.css";
import ScrollReveal from "scrollreveal";

const App = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2500,
    reset: true,
  });

  sr.reveal(".head", { delay: 200 });
  sr.reveal(".main", { delay: 400 });
  sr.reveal(".card-area", { delay: 600 });
  sr.reveal(".card-container", { delay: 700 });
  sr.reveal(".footer", { delay: 800 });

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
