import React, { Component } from "react";
import "./navbar.css";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
function Navbar(params) {
  return (
    <div className="navbar">
      <img className="_div_nav_logo" src={logo} />
      <div className="inner_navbar">
        <div className="div_navbar_element_btn">Courses ^</div>
        <div className="div_navbar_element_btn">Programs & Degrees ^</div>
        <div className="div_navbar_element_btn">Schools & Partners</div>
      </div>

      <div className="div_search">
        <form action="">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search online courses   "
          />
        </form>
      </div>
      <div className="hightlight1">
        <Link to={"/Login"}>
          <div className="nav_1">Sign In</div>
        </Link>
        <Link to={"/Signup"}>
          <div className="nav_2">
            <div className="nav2_text">Register</div>
          </div>
        </Link>
      </div>

      <div className="inner_navbar_2">
        <div className="nav_3">edX for Business</div>
        <div className="hightlight"></div>
      </div>
    </div>
  );
}
export default Navbar;
