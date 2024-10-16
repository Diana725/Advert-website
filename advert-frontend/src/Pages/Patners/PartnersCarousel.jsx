import React from "react";
import "./PartnersCarousel.css";
import platinumIcon from "../../assets/images/ad-solutions.png";
import avenueIcon from "../../assets/images/avenue_hospital.png";
import marieStopes from "../../assets/images/maristopeslogo.png";
import optimumIcon from "../../assets/images/optimum.png";
import wasiliIcon from "../../assets/images/wasili.png";
import hyssopIcon from "../../assets/images/hyssop.jpeg";
import maidaIcon from "../../assets/images/maida.jpeg";
import phinelsIcon from "../../assets/images/phinels.jpeg";
import fitnessIcon from "../../assets/images/k-fitness.png";
import empawaIcon from "../../assets/images/empawa.jpeg";

const ImageCarousel = () => {
  const fixedImageHeight = 180; // Fixed image height

  return (
    <div
      id="partnersCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner partners-carousel-inner">
        {/* Carousel Item 1 */}
        <div className="carousel-item partners-carousel-item active">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="col-6 col-md-2">
              <img
                src={platinumIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 1"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={avenueIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 2"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={marieStopes}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 3"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={hyssopIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 4"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={wasiliIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 5"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Carousel Item 2 */}
        <div className="carousel-item partners-carousel-item">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="col-6 col-md-2">
              <img
                src={maidaIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 6"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={phinelsIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 7"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={optimumIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 8"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={fitnessIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 9"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-2">
              <img
                src={empawaIcon}
                style={{
                  width: 250,
                  height: fixedImageHeight,
                  objectFit: "contain",
                }}
                alt="Image 10"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#partnersCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#partnersCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
