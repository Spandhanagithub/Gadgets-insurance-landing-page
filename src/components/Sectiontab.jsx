import React from "react";
import "./section2.css";
function Sectiontab() {
  return (
    <div>
      <section className="sectionTab">
        <div className="imgData">
          <img
            className="imagetext"
            src="https://www.ethika.co.in/wp-content/uploads/2021/01/Mobile-Phone-Lost.jpg"
          ></img>
        </div>
        <div className="detailedData">
          <h1>Insure Your Life and</h1>
          <h2>Lifeplabn witll invest in you </h2>

          <p className="parasec">
            The insurance cover provides compensation equivalent to the the cost
            of replacement of the instrument by a new instrument of the same
            specification and same capacity, including all taxes and duties.
          </p>
          <div className="btn">
            <input className="buttons" type="button" value="Get my price" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sectiontab;
