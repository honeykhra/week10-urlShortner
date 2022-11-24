import React from "react";
import boostImg from "../images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <div className="boost">
      <img src={boostImg} alt="boost" />
      <h1>Boost your links today</h1>
      <button>Get Started</button>
    </div>
  );
};

export default Boost;
