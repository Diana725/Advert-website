import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/maiko_img_12.jpeg";
import "./PartnersHero.css";
import Navbar from "../../components/Navbar/Navbar";

const PartnersHero = () => {
  return (
    <section className="partner-hero-section hero-card text-white d-flex align-items-center">
      <div className="partner-hero-image-container">
        <Navbar />
        <div
          className="partner-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center partner-hero-content">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 fw-bold advert-hero-title">
                Our Partners & Clients
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
