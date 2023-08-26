import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://1fit.app/static/visual-659722c5488824bcaf2d3b1333e30344.webp"
        alt=""
      />
      <div className="bgr_desc">
        <h4>0 * 0 * 12</h4>
        <h1>Ваш абонемент на все виды спорта</h1>
      </div>
      <div className="btn">
        <button>Посмотреть цены</button>
        <h4 className="price">От 11 980 ₸ /месяц</h4>
      </div>
    </div>
  );
};

export default Hero;
