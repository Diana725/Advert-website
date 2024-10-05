import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/pexels-tim-samuel-5835053.jpg";
import "./ContactHero.css";
import Navbar from "../../components/Navbar/Navbar";

const ContactHero = () => {
  return (
    <section className="contact-hero-section hero-card text-white d-flex align-items-center">
      <div className="contact-hero-image-container">
        <Navbar />
        <div
          className="contact-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center contact-hero-content">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 fw-bold">
                Need Advertising? Reach Out to Us...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
