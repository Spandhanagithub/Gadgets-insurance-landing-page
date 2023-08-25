import React from "react";
import "./banner.css";
function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="textBanner">
          <h1>Deal Of the Day !</h1>
          <h3>
            Objectively innovate empowered manufactured products whereas
            parallel platforms.
          </h3>
        </div>
        <div className="btn">
          <input className="buttons" type="button" value="Order Now" />
        </div>
      </section>
    </div>
  );
}

export default Banner;
