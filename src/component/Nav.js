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
        <div class="topnav" id="myTopnav">
          <a href="#home" class="active">
            <h2 className="brand">Shorty</h2>
          </a>
          <a href="#contact">Features</a>
          <a href="#about">Pricing</a>
          <a href="#news">Resources</a>
          <div className="nav-btn-container">
            <a href="#about">
              <button>Login</button>
            </a>
            <a href="#about">
              <button>Singn Up</button>
            </a>
          </div>
          <a
            href="javascript:void(0);"
            class="icon"
            onClick={() => toggleNav()}
          >
            <img src="https://img.icons8.com/android/24/000000/menu.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
