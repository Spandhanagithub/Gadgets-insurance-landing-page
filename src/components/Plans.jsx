import React from "react";
import "./plans.css";

function Plans() {
  return (
    <div className="boxes">
      <div className="box1">
        <article>
          <img
            className="imgs"
            src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2021/09/Gadget-Insurance-1.png"
            alt="Sample photo"
          />
          <div className="text">
            <h3>Seamlessly visualize quality</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks.
            </p>
            <div className="buttonContainer">
              <a className="btnblock">Here's why</a>
            </div>
          </div>
        </article>
      </div>
      <div className="box1">
        <article>
          <img
            className="imgs"
            src="https://www.bajajfinservmarkets.in/content/dam/bajajfinserv/banner-website/cyber-insurance/cyber-insurance.png"
            alt="Sample photo"
          />
          <div className="text">
            <h3>Seamlessly visualize quality</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks.
            </p>
            <div className="buttonContainer">
              <a className="btnblock">Here's why</a>
            </div>
          </div>
        </article>
      </div>
      <div className="box1">
        <article>
          <img
            className="imgs"
            src="https://cdn.inc42.com/wp-content/uploads/2018/10/mobile-insurance-3.jpg"
            alt="Sample photo"
          />
          <div className="text">
            <h3>Seamlessly visualize quality</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks.
            </p>
            <div className="buttonContainer">
              <a className="btnblock">Here's why</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Plans;
