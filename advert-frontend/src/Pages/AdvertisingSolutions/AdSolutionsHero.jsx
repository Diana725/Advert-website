import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero_image from "../../assets/images/maiko_img_11.JPG";
import "./AdSolutionsHero.css";
import Navbar from "../../components/Navbar/Navbar";

const AdSolutionsHero = () => {
  return (
    <section className="ad-solution-hero-section hero-card text-white d-flex align-items-center">
      <div className="ad-solution-hero-image-container">
        <Navbar />
        <div
          className="ad-solution-hero-image"
          style={{
            backgroundImage: `url(${hero_image})`,
          }}
        ></div>
        <div className="container text-center ad-solution-hero-content">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 fw-bold advert-hero-title fs-1">
                Our Advertising Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSolutionsHero;
