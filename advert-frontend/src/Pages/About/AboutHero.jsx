import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/maiko_img_13.jpeg";
import "./AboutHero.css";
import Navbar from "../../components/Navbar/Navbar";

const AboutHero = () => {
  return (
    <section className="about-hero-section hero-card text-white d-flex align-items-center">
      <div className="about-hero-image-container">
        <Navbar />
        <div
          className="about-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center about-hero-content">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 fw-bold advert-hero-title">
                Get To Know Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
