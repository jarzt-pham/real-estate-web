import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>

        {/* right */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="f-menu">
            <ul>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="/#value">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
