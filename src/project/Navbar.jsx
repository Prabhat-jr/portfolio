import React from "react";
import "./navbar.css";
import Toggle from "./Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Prabhat</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeclass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeclass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeclass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeclass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeclass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button">Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
