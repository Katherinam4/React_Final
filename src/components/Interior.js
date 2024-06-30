import React from "react";
import "../styles/Interior.scss";

const Interior = () => {
  return (
    <div className="interior">
      <h2>Shaped By Performance</h2>

      <ul>
        <li>
          Porsche interiors are a testament to the brand’s commitment to luxury
          and performance, combining high-quality materials with advanced
          technology and meticulous craftsmanship to create an environment that
          is both comfortable and exhilarating.
        </li>
      </ul>
      <div className="photos">
        <img src="./interior1.avif" alt="interior" />
        <img src="./interior2.avif" alt="interior" />
        <img src="./interior3.avif" alt="interior" />
      </div>

      <div className="line"></div>
    </div>
  );
};

export default Interior;
