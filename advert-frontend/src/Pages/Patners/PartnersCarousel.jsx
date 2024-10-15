import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
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
  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Carousel Item 1 */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <div className="col-2">
              <img
                src={platinumIcon}
                style={{ maxWidth: 250 }}
                alt="Image 1"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={avenueIcon}
                style={{ maxWidth: 250 }}
                alt="Image 2"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={marieStopes}
                style={{ maxWidth: 250 }}
                alt="Image 3"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={hyssopIcon}
                style={{ maxWidth: 250, maxHeight: 162 }}
                alt="Image 4"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={wasiliIcon}
                style={{ maxWidth: 250, maxHeight: 162 }}
                alt="Image 5"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Carousel Item 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <div className="col-2">
              <img
                src={maidaIcon}
                style={{ maxWidth: 250 }}
                alt="Image 6"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={phinelsIcon}
                style={{ maxWidth: 250, maxHeight: 200 }}
                alt="Image 7"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={optimumIcon}
                style={{ maxWidth: 250 }}
                alt="Image 8"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={fitnessIcon}
                style={{ maxWidth: 270 }}
                alt="Image 9"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <img
                src={empawaIcon}
                style={{ maxWidth: 270, maxHeight: 162 }}
                alt="Image 9"
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
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
