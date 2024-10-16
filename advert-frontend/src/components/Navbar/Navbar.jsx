import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_img from "../../assets/images/maiko_logo.jpeg";
// Import your custom icons
import HamburgerIcon from "../../assets/images/menu.png"; // Adjust the path as needed
import CloseIcon from "../../assets/images/cross.png"; // Adjust the path as needed

function Navbar() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    setNavbarScrolled(window.scrollY > 50);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        navbarScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
          <img src={logo_img} className="logo" alt="AdLite Media Logo" />
          AdLite Media
        </NavLink>

        <button
          className={`navbar-toggler ${isExpanded ? "expanded" : ""}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ maxWidth: 40, maxHeight: 40 }}
          >
            <img
              src={isExpanded ? CloseIcon : HamburgerIcon}
              alt="Toggle menu"
            />
          </span>
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-6">
              <NavLink
                className="nav-link text-white"
                to="/"
                onClick={handleToggle}
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown menu for 'Advertising' */}
            <li className="nav-item dropdown fs-6">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                id="advertisingDropdown"
                to="#"
                role="button"
                aria-expanded={isExpanded}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  setIsExpanded(!isExpanded); // Toggle the dropdown on click
                }}
              >
                Advertising
              </NavLink>
              <ul
                className={`dropdown-menu ${isExpanded ? "show" : ""}`}
                aria-labelledby="advertisingDropdown"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    style={{ fontSize: 13 }}
                    to="/advertising-formats"
                    onClick={handleToggle}
                  >
                    Advertising Formats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    style={{ fontSize: 13 }}
                    to="/advertising-solutions"
                    onClick={handleToggle}
                  >
                    Advertising Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    style={{ fontSize: 13 }}
                    to="/partners-clients"
                    onClick={handleToggle}
                  >
                    Partners & Clients
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item fs-6">
              <NavLink
                className="nav-link text-white"
                to="/about"
                onClick={handleToggle}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item fs-6">
              <NavLink
                className="nav-link text-white"
                to="/contact"
                onClick={handleToggle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
