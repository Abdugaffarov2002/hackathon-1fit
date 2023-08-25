import React from "react";
import "./Block4.css";
import { Container } from "@mui/material";

const Block4 = () => {
  return (
    <Container>
      <div className="container4">
        <div className="title4">
          <h2>Топовые места</h2>
          <a href="">Все студии</a>
        </div>
        <div className="images-4">
          <div className="first-img4 examply-4">
            <img
              src="https://onefit-static.s3.amazonaws.com/media/fitness/None/zsqa21oq24su2iphk6qucf8be.jpg"
              alt=""
            />
            <h4>Gym Point</h4>
          </div>
          <div className="second-img4 examply-4">
            <img
              src="https://onefit-static.s3.amazonaws.com/media/fitness/None/kn6fhqsnpf1zvq1l4i1y4danz.jpg"
              alt=""
            />
            <h4>Jannat Resort</h4>
          </div>
          <div className="third-img4 examply-4">
            <img
              src="https://onefit-static.s3.amazonaws.com/media/fitness/None/ahsqg4ov7pnwrlu6vqtd7ytsh.jpg"
              alt=""
            />
            <h4>Dasmia Fitness</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Block4;
