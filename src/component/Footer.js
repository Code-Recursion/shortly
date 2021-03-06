import React from "react";
import "../styles/footer.css";
import insta from "../resources/images/icon-instagram.svg";
import twitter from "../resources/images/icon-twitter.svg";
import fb from "../resources/images/icon-facebook.svg";
import pint from "../resources/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <section>
      <div className="box-container">
        <div className="box">
          <h1 className="box-heading">
            Boost your links today
          </h1>
          <button className="footer-btn">Get Started</button>
        </div>
      </div>
      <div className="row-footer bg-purple">
        <div className="column-footer">
          <h1 className="footer-brand">
            Shortly
          </h1>
        </div>
        <div className="column-footer">
          <h4>Features</h4>
          <a href="">
            <p>Link Shortening</p>
          </a>
          <a href="">
            <p>Branded Links</p>
          </a>
          <a href="">
            <p>Analytics</p>
          </a>
        </div>
        <div className="column-footer">
          <h4>Resources</h4>
          <a href="">
            <p>Blogs</p>
          </a>
          <a href="">
            <p>Developer</p>
          </a>
          <a href="">
            <p>Support</p>
          </a>
        </div>
        <div className="column-footer">
          <h4>Company</h4>
          <a href="">
            <p>Our Team</p>
          </a>
          <a href="">
            <p>Career</p>
          </a>
          <a href="">
            <p>Contact</p>
          </a>
        </div>
        <div className="column-footer">
          <div className="footer-social-icons">
            <ul className="social-icons">
              <li>
                <a href="" className="social-icon">
                  <i className="fa fa-icon">
                    <img src={fb} />
                  </i>
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  <i className="fa fa-icon">
                    <img src={twitter} />
                  </i>
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  <i className="fa fa-icon">
                    <img src={pint} />
                  </i>
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  <i className="fa fa-icon">
                    <img src={insta} />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
