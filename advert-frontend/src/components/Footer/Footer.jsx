import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">About Us</h5>
            <p className="text-white">
              AdLite Media is the leading taxi and rideshare vehicle advertising
              network. We are helping brands connect with people on the go.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/advertising-formats" className="text-white">
                  Advertising Formats
                </NavLink>
              </li>
              <li>
                <NavLink to="/advertising-solutions" className="text-white">
                  Advertising Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/partners-clients" className="text-white">
                  Partners & Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="tel:+1234567890" className="text-white">
                  0700 012 012
                </a>
              </li>
              <li>
                <a href="mailto:info@firefly.com" className="text-white">
                  marketing.adlite@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; AdLite Media. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
