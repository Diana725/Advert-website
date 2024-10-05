import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../assets/images/pexels-tim-samuel-5835053.jpg";
import "./Hero.css";
import Navbar from "./Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="hero-section hero-card text-white d-flex align-items-center">
      <div className="hero-image-container">
        <Navbar />
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center hero-content">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 fw-bold">Make Your Move</h1>
              <p className="lead">Advertise with us on premium taxi screens.</p>
              <a href="/contact" className="btn btn-primary btn-lg mt-3">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
