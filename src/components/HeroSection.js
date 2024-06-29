import React from "react";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="main">
      <h1>Porsche Home</h1>

      <p className="country">
        Location:Georgia <img src="flag.png" alt="flag" />
      </p>

      <div
        className="main-poto"
        style={{ backgroundImage: `url(carerra.png)` }}
      >
        <div className="texts">
          <h2>Drive Defines Us</h2>
          <p>The New Carerra 4S</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
