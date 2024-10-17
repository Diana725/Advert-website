import React, { useState } from "react";
import ContactHero from "./ContactHero";
import "./Contact.css";
// Import your downloaded social media icons
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import instagramIcon from "../../assets/images/instagram.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import whatsappIcon from "../../assets/images/whatsapp.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://www.adlitemedia.com:8000/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error occurred. Please try again.");
    }
  };

  return (
    <>
      <ContactHero />

      <div className="container text-center ">
        <h2 className="fs-1">Start Advertising With AdLite Today!</h2>
        <hr />
        <br />
        <div className="row mt-4">
          {/* Contact Form Section */}
          <div
            className="col-lg-6 col-md-12 mb-4 border-end"
            style={{ paddingRight: "40px" }}
          >
            <h1 className="fs-3 mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
            {responseMessage && (
              <p className="mt-3 text-success">{responseMessage}</p>
            )}
          </div>

          {/* Social Media Section */}
          <div className="col-lg-6 col-md-12">
            <h3 className="fs-3 mb-4">Connect with us via social media</h3>
            <p>
              Connect with us, and we will get back to you as soon as possible.
              We are excited to work with you.
            </p>
            <div
              className="d-flex justify-content-center gap-4 mt-4"
              style={{ marginBottom: 60 }}
            >
              <a
                href="https://web.facebook.com/adlitemedia?_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="icon"
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </a>
              <a
                href="https://x.com/adlitemedia"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="icon"
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </a>
              <a
                href="https://www.instagram.com/adlitemedia/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="icon"
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/adlitemedia/about/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="icon"
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=254700012012&text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20taxi%20advertising%20platforms.%20"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="icon"
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </a>
            </div>
            <h3 className="fs-3 mt-4">Contact Information:</h3>
            <p>Email: adlitecabvertise@gmail.com</p>
            <p>Phone: 0700 012 012</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
