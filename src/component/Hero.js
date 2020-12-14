import React from "react";
import "../styles/hero.css";
import HeroIcon from "../resources/images/illustration-working.svg";
const Hero = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="column">
            <h1 className="hero-header">
              More than just Shorter Links
            </h1>
            <p className="hero-text">
              Build your brand's recognition and
              get detailed insights on how your
              links are preforming
            </p>
            <button className="get-started">
              Get Started
            </button>
          </div>
          <div className="column">
            <div className="image">
              <img
                className="hero-img floating-anim"
                src={HeroIcon}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
