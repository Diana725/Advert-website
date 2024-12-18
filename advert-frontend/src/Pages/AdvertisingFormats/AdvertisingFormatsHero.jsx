import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/maiko_img_4.JPG";
import "./AdvertisingFormatsHero.css";
import Navbar from "../../components/Navbar/Navbar";

const AdvertisingFormatsHero = () => {
  return (
    <section className="advert-hero-section hero-card text-white d-flex align-items-center">
      <div className="advert-hero-image-container">
        <Navbar />
        <div
          className="advert-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center advert-hero-content">
          <div className="row">
            <div className="col-md-12">
              {/* Adding a background and text shadow for better visibility */}
              <h1 className="display-4 fs-1 fw-bold advert-hero-title">
                Our Advertising Formats
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingFormatsHero;
