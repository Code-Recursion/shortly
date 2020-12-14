import React from "react";
import "../styles/nav.css";

function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const Nav = () => {
  return (
    <>
      <div className="">
        <div className="topnav" id="myTopnav">
          <a
            href="home"
            className="active brand brand-logo"
          >
            Shortly
          </a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <div className="nav-btn-container">
            <a href="#">
              <button>Login</button>
            </a>
            <a href="#">
              <button>Singn Up</button>
            </a>
          </div>
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={() => toggleNav()}
          >
            <img
              className=""
              src="https://img.icons8.com/android/24/000000/menu.png"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
