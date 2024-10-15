import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_img from "../../assets/images/maiko_logo.jpeg";
function Navbar() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
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
        <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
          <img src={logo_img} style={{ maxHeight: 60, paddingRight: 10 }} />
          AdLite Media
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>

            {/* Dropdown menu for 'Advertising' */}
            <li className="nav-item dropdown fs-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                id="advertisingDropdown"
                to="#"
                role="button"
                aria-expanded="false"
              >
                Advertising
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="advertisingDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/advertising-formats">
                    Advertising Formats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/advertising-solutions"
                  >
                    Advertising Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/partners-clients">
                    Partners & Clients
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item fs-5">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink className="nav-link text-white" to="/contact">
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
