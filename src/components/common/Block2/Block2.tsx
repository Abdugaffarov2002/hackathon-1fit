import React from "react";
import "./Block2.css";
import { Container } from "@mui/material";

const Block2 = () => {
  return (
    <Container>
      <div className="container">
        <div className="title">
          <h2>1Fit — это новый способ добавить спорт в свою жизнь</h2>
          <h4>
            Приложение, в котором мы собрали несколько десятков активностей.
            Всё, от йоги до кроссфита
          </h4>
        </div>
        <div className="blocks">
          <div className="block">
            <div className="first">
              <div className="krug">1</div>
              <h2>Это выгодно</h2>
              <p>Вы не платите за спортзал и бассейн по отдельности</p>
            </div>
          </div>
          <div className="block2">
            <div className="second">
              <div className="krug">2</div>
              <h2>По-разному</h2>
              <p>Любые активности — от фехтования до скалолазания</p>
            </div>
          </div>
          <div className="block3">
            <div className="third">
              <div className="krug">3</div>
              <h2>И в рассрочку</h2>
              <p>Через Kaspi, Jusan, Eurasian или Freedom Bank</p>
            </div>
          </div>
          <div className="block4">
            <div className="fourth">
              <div className="krug">4</div>
              <h2>И в любом городе</h2>
              <p>Бишкек, Ош, Талас, Нарын</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Block2;
