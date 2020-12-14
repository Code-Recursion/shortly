import React from "react";
import "../styles/footer.css";
import insta from "../resources/images/icon-instagram.svg";
import twitter from "../resources/images/icon-twitter.svg";
import fb from "../resources/images/icon-facebook.svg";
import pint from "../resources/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div class="row-footer bg-purple">
      <div class="column-footer">
        <h2>Shortly</h2>
      </div>
      <div class="column-footer">
        <h4>Features</h4>
        <p>Link Shorteneing</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div class="column-footer">
        <h4>Resources</h4>
        <p>Blogs</p>
        <p>Developer</p>
        <p>Support</p>
      </div>
      <div class="column-footer">
        <h4>Company</h4>
        <p>Our Team</p>
        <p>Career</p>
        <p>Contact</p>
      </div>
      <div class="column-footer">
        <h4>Column 5</h4>
        <div class="footer-social-icons">
          <ul class="social-icons">
            <li>
              <a href="" class="social-icon">
                {" "}
                <i class="fa fa-twitter">
                  <img src={fb} />
                </i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                <i class="fa fa-rss">
                  <img src={twitter} />
                </i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                <i class="fa fa-rss">
                  <img src={pint} />
                </i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                {" "}
                <i class="fa fa-facebook">
                  <img src={insta} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
