import React from "react";
import "../style.css";
import { useState, useRef, useEffect } from "react";
import LandingPageImage from "../assets/LandingPageImage.svg";

function Landing() {
  return (
    <div className="container">
      <div className="left-side">
        <img src={LandingPageImage} style={{ marginTop: "45%" }} />
      </div>
      <div className="right-side">
        <div className="landingTitles">
          <h2>Imagine if</h2>
          <h2>Snapchat</h2>
          <h2>had events.</h2>
        </div>
        <p className="landingInfo">
          Easily host and share events with your friends <br /> across any
          social media.
        </p>
        <div className="btn">
          <a href="/event">🎉Create My Own</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
