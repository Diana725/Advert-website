import React from "react";
import { NavLink } from "react-router-dom";
import facebook_icon from "../../assets/images/facebook.png";
import instagram_icon from "../../assets/images/instagram.png";
import linkedin_icon from "../../assets/images/linkedin.png";
import twitter_icon from "../../assets/images/twitter.png";
import whatsapp_icon from "../../assets/images/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start py-3">
      <style>{`
        .quick-link {
          text-decoration: none; /* Remove underline */
        }
        .quick-link:hover {
          text-decoration: underline; /* Add underline on hover */
        }
        .social-media-icons img {
          width: 40px;
        }
        .contact-info p {
          margin: 0;
        }
      `}</style>

      <div className="container">
        {/* Quick Links Section */}
        <div className="row justify-content-center mb-3 d-none d-lg-block">
          {/* Hidden on screens smaller than 'lg' */}
          <div className="col-lg-12">
            <h5 className="text-uppercase text-white fs-6">Quick Links</h5>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-4">
                <NavLink to="/" className="text-white fs-6 quick-link">
                  Home
                </NavLink>
              </li>
              <li className="list-inline-item mx-4">
                <NavLink
                  to="/advertising-formats"
                  className="text-white fs-6 quick-link"
                >
                  Advertising Formats
                </NavLink>
              </li>
              <li className="list-inline-item mx-4">
                <NavLink
                  to="/advertising-solutions"
                  className="text-white fs-6 quick-link"
                >
                  Advertising Solutions
                </NavLink>
              </li>
              <li className="list-inline-item mx-4">
                <NavLink
                  to="/partners-clients"
                  className="text-white fs-6 quick-link"
                >
                  Partners & Clients
                </NavLink>
              </li>
              <li className="list-inline-item mx-4">
                <NavLink to="/about" className="text-white fs-6 quick-link">
                  About
                </NavLink>
              </li>
              <li className="list-inline-item mx-4">
                <NavLink to="/contact" className="text-white fs-6 quick-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons and Contact Us Section */}
        <div className="row justify-content-between mb-4">
          <div className="col-lg-6 text-center text-lg-start">
            <h5 className="text-uppercase text-white fs-6">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 pb-2 social-media-icons flex-wrap">
              {/* Added flex-wrap class to wrap icons when the screen gets smaller */}
              <a
                href="https://web.facebook.com/adlitemedia?_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebook_icon}
                  style={{ maxHeight: 30, maxWidth: 30 }}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://x.com/adlitemedia"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={twitter_icon}
                  style={{ maxHeight: 30, maxWidth: 30 }}
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/adlitemedia/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagram_icon}
                  style={{ maxHeight: 30, maxWidth: 30 }}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/adlitemedia/about/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin_icon}
                  style={{ maxHeight: 30, maxWidth: 30 }}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=254700012012&text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20taxi%20advertising%20platforms.%20"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsapp_icon}
                  style={{ maxHeight: 30, maxWidth: 30 }}
                  alt="WhatsApp"
                />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-6 text-center text-lg-end contact-info">
            <h5 className="text-uppercase text-white fs-6">Contact Us</h5>
            <p className="text-white">
              <strong>Email:</strong> adlitecabvertise@gmail.com
            </p>
            <p className="text-white">
              <strong>Phone:</strong> 0700 012 012
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center bg-dark text-white">
        &copy; AdLite Media. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
