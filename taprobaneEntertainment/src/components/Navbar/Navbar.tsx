import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.gif";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Taprobane Entertainment" className="logo" />
      </div>

      {/* Desktop Links */}
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Events">Events</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Burger Icon */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#Home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#Events" onClick={() => setMenuOpen(false)}>
          Events
        </a>
        <a href="#aboutus" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
