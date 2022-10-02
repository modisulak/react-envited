import React from "react";
import "../style.css";
import BirthdayCakeImg from "../assets/BirthdayCake.png";
import { ImCalendar } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";

function Event() {
  return (
    <div className="event-container">
      <div className="event-card">
        <div className="event">
          <div className="left-side">
            <div
              className="eventdetails"
              meta
              name="viewport"
              content="width=device-width, initial scale= 1.0"
            >
              <div className="hello">
                <h2 className="welcome">Birthday Bash</h2>
                <h4 className="back">Hosted by Elysia</h4>
              </div>
              <div className="container2">
                <div>
                  <ImCalendar className="iconDetails" />
                </div>
                <div style={{ marginLeft: "60px", marginTop: "1%" }}>
                  <div
                    style={{
                      fontSize: "1em",
                      float: "left",
                      fontWeight: "bold",
                      color: "#240D57",
                    }}
                  >
                    18 August 6:00PM
                  </div>
                  <div style={{ fontSize: "1em", float: "left" }}>
                    to 19 August 1:00PM UTC +10
                  </div>
                  <div
                    style={{ float: "right", fontSize: "1em", color: "grey" }}
                  >
                    ➤
                  </div>
                </div>
              </div>
              <div className="container2" style={{ marginTop: "20%" }}>
                <div>
                  <ImLocation2 className="iconDetails" />
                </div>
                <div style={{ marginLeft: "60px", marginTop: "1%" }}>
                  <div
                    style={{
                      fontSize: "1em",
                      float: "left",
                      fontWeight: "bold",
                      color: "#240D57",
                    }}
                  >
                    Street name mentioned
                  </div>
                  <div style={{ fontSize: "1em", float: "left" }}>
                    Suburb, State, Postcode
                  </div>
                  <div
                    style={{ float: "right", fontSize: "1em", color: "grey" }}
                  >
                    ➤
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <img src={BirthdayCakeImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
