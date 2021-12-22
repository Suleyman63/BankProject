import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";
import CardFigur from "../highligt/CardFigur";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div id="top">
        <Banner />
      </div>
      <div id="/">
        <CardFigur />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
