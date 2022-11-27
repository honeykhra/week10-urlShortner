import React from "react";
import boostImgMobile from "../images/bg-boost-mobile.svg";
import boostImg from "../images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <div className="boost">
      <img className="imgmobile" src={boostImgMobile} alt="boost" />
      <img className="img" src={boostImg} alt="boost" />
      <h1>Boost your links today</h1>
      <button>Get Started</button>
    </div>
  );
};

export default Boost;
