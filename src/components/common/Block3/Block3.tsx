import React from "react";
import "./Block3.css";
import { Container } from "@mui/material";

const Block3 = () => {
  return (
    <Container>
      <div className="container3">
        <div className="title3">
          <h2>Виды занятий</h2>
          <a href="">Смотреть залы</a>
        </div>
        <div className="images">
          <div className="first-img examply">
            <div className="linear">
              <p className="third-block-title">Тенажерный зал</p>
            </div>
          </div>
          <div className="second-img examply">
            <div className="linear">
              <p className="third-block-title">Занятия в бассейне</p>
            </div>
          </div>
          <div className="third-img examply">
            <div className="linear">
              <p className="third-block-title">Йога</p>
            </div>
          </div>
          <div className="fourth-img examply">
            <div className="linear">
              <p className="third-block-title">Восстановительные процедуры</p>
            </div>
          </div>
          <div className="fifth-img examply">
            <div className="linear">
              <p className="third-block-title">Танцы</p>
            </div>
          </div>
          <div className="sixth-img examply">
            <div className="linear">
              <p className="third-block-title">Стретчинг и Пилатес</p>
            </div>
          </div>
          <div className="seventh-img examply">
            <div className="linear">
              <p className="third-block-title">Интенсивные тренировки</p>
            </div>
          </div>
          <div className="eighth-img examply">
            <div className="linear">
              <p className="third-block-title">Боевые искусство</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Block3;
