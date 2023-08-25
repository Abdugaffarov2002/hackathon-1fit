import React from "react";
import "./Block5.css";

const Block5 = () => {
  return (
    <div className="container5">
      <h2>Выбери свой абонемент 1Fit</h2>
      <div className="cart-block">
        <div className="cart">
          <div className="cart-img"></div>
          <h3>365 дней</h3>
          <p>60 дней заморозки</p>
          <h5>184 000 C</h5>
          <button>Купить</button>
        </div>
        <div className="cart">
          <div className="cart-img2"></div>
          <h3>90 дней</h3>
          <p>30 дней заморозки</p>
          <h5>89 000 C</h5>
          <button>Купить</button>
        </div>
        <div className="cart">
          <div className="cart-img3"></div>
          <h3>180 дней</h3>
          <p>45 дней заморозки</p>
          <h5>144 000 C</h5>
          <button>Купить</button>
        </div>
        <div className="cart">
          <div className="cart-img4"></div>
          <h3>730 дней</h3>
          <p>90 дней заморозки</p>
          <h5>290 000 C</h5>
          <button>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Block5;
