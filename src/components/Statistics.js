import React from "react";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedR from "../images/icon-detailed-records.svg";
import fullyC from "../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics">
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="cards">
        <div className="card card1">
          <div className="round">
            <img src={brandRecognition} alt="brandr" />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <span className="span1"></span>
        <div className="card card2">
          <div className="round">
            <img src={detailedR} alt="brandr" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <span className="span2"></span>
        <div className="card card3">
          <div className="round">
            <img src={fullyC} alt="brandr" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
