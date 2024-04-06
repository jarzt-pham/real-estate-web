import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Jarzt</span>
          <span className="secondaryText">
            Find out your residences and let's contact us to get started your
            first house
          </span>
          <button className="button">
            <a href="mailto: dev.luanpham@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
