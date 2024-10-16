import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/maiko_img_3.jpeg";
import "./ContactHero.css";
import Navbar from "../../components/Navbar/Navbar";

const ContactHero = () => {
  return (
    <section className="contact-hero-section hero-card text-white d-flex align-items-center">
      <div className="contact-hero-image-container position-relative">
        <Navbar />
        <div
          className="contact-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center position-absolute top-50 start-50 translate-middle d-sm-none bg-black bg-opacity-50 p-3 rounded">
          {/* This text is shown only on small screens */}
          <h2 className="fw-bold fs-1 text-white">Advertise with Us</h2>
        </div>
        <div className="d-none d-sm-block">
          {/* This text is hidden on small screens and shown on larger screens */}
          <h1 className="display-4 fw-bold text-center">
            Need Advertising? Reach Out to Us...
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
