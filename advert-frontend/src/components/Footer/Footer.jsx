import React from "react";
import { NavLink } from "react-router-dom";
import facebook_icon from "../../assets/images/facebook.png";
import instagram_icon from "../../assets/images/instagram.png";
import linkedin_icon from "../../assets/images/linkedin.png";
import twitter_icon from "../../assets/images/twitter.png";
import whatsapp_icon from "../../assets/images/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start py-4">
      <div className="container">
        {/* Quick Links Section */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12">
            <h5 className="text-uppercase text-white">Quick Links</h5>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-3">
                <NavLink to="/" className="text-white fs-5">
                  Home
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="/advertising-formats" className="text-white fs-5">
                  Advertising Formats
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink
                  to="/advertising-solutions"
                  className="text-white fs-5"
                >
                  Advertising Solutions
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="/partners-clients" className="text-white fs-5">
                  Partners & Clients
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="/about" className="text-white fs-5">
                  About
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="/contact" className="text-white fs-5">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12">
            <h5 className="text-uppercase text-white">Follow Us</h5>
            <div className="d-flex justify-content-space-between gap-5">
              <a
                href="https://web.facebook.com/adlitemedia?_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <img src={facebook_icon} alt="Facebook" width="40" />
              </a>
              <a
                href="https://x.com/adlitemedia"
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <img src={twitter_icon} alt="Twitter" width="40" />
              </a>
              <a
                href="https://www.instagram.com/adlitemedia/"
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <img src={instagram_icon} alt="Instagram" width="40" />
              </a>
              <a
                href="https://www.linkedin.com/company/adlitemedia/about/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin_icon} alt="LinkedIn" width="40" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=254700012012&text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20taxi%20advertising%20platforms.%20"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp_icon} alt="WhatsApp" width="40" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center p-3 bg-dark text-white">
        &copy; AdLite Media. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
