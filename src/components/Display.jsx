import React from "react";
import "./Display.css";
function Display() {
  return (
    <div>
      <section className="main">
        <div className="data">
          <h1>Life More Relaxed!</h1>
          <h2>With smart </h2>
          <h2>Insurance </h2>
          <p className="para">
            The insurance cover provides compensation equivalent to the the cost
            of replacement of the instrument by a new instrument of the same
            specification and same capacity, including all taxes and duties.
          </p>
          <div className="signup">
            <input
              className="TextBox"
              placeholder="Type Your Email"
              type="text"
            />
            <input className="buttons" type="button" value="sign up" />
          </div>
        </div>
        <div className="imgData">
          <img
            className="image"
            src="https://d28wu8o6itv89t.cloudfront.net/images/MobileInsurancejpg-1656499001728.jpeg"
          ></img>
        </div>
      </section>
    </div>
  );
}

export default Display;
