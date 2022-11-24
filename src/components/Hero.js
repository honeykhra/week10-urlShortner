import React from "react";
import illustration from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div className="right">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Hero;
