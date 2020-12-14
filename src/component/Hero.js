import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    </>
  );
};
export default Hero;
