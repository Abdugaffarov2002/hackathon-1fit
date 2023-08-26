import React from "react";
import Hero from "../../components/common/Hero/Hero";
import Block2 from "../../components/common/Block2/Block2";
import Block3 from "../../components/common/Block3/Block3";
import Block4 from "../../components/common/Block4/Block4";
import Block5 from "../../components/common/Block5/Block5";
import Footer from "../../components/common/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Footer />
    </div>
  );
};

export default HomePage;
