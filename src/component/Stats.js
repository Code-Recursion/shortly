import React from "react";
import "../styles/stats.css";
import BrandRecognition from "../resources/images/icon-brand-recognition.svg";
import DetailedRecords from "../resources/images/icon-detailed-records.svg";
import FullyCustomizable from "../resources/images/icon-fully-customizable.svg";
const Stats = () => {
  return (
    <>
      <div>
        <div className="stats-wrapper">
          <h1>Advanced Statistics</h1>
          <p className="text-grey">
            Track how your links are performing
            across the web with our advance
            statistic dashboard.
          </p>
          <hr />
          <section className="section-stats">
            <div className="card-row">
              <div className="card-column">
                <div className="card">
                  <div className="icon">
                    <img src={BrandRecognition} />
                  </div>
                  <h3 className="card-header">
                    Brand Recognition
                  </h3>
                  <p>
                    Boost your brand recognition
                    with each link. Generic click
                    don't mean a thing. Branded
                    links instil confidence in
                    your content
                  </p>
                </div>
              </div>
              <div className="card-column">
                <div className="card">
                  <div className="icon">
                    <img src={DetailedRecords} />
                  </div>
                  <h3 className="card-header">
                    Detailed Record
                  </h3>
                  <p>
                    Gain insights into who is
                    clicking your links. Knowing
                    when and where people engage
                    with your content helps inform
                    better decision.
                  </p>
                </div>
              </div>

              <div className="card-column">
                <div className="card">
                  <div className="icon">
                    <img
                      src={FullyCustomizable}
                    />
                  </div>
                  <h3 className="card-header">
                    Fully Customizable
                  </h3>
                  <p>
                    Improve brand awareness and
                    content discoverablity through
                    customizable links,
                    supercharging audience
                    engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Stats;
