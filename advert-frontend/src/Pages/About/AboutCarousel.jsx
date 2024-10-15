import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutCarousel.css";
import pic_1 from "../../assets/images/slide_1.jpeg";
import pic_2 from "../../assets/images/slide_2.jpeg";
import pic_3 from "../../assets/images/slide_3.jpeg";
import pic_4 from "../../assets/images/slide_4.jpeg";
import pic_5 from "../../assets/images/slide_5.jpeg";
import pic_6 from "../../assets/images/slide_6.jpeg";
import pic_7 from "../../assets/images/slide_7.jpeg";
import pic_8 from "../../assets/images/slide_8.jpeg";
import pic_9 from "../../assets/images/slide_9.jpeg";
import pic_10 from "../../assets/images/slide_10.jpeg";
import pic_11 from "../../assets/images/slide_11.jpeg";
import pic_12 from "../../assets/images/slide_12.jpeg";
import pic_13 from "../../assets/images/slide_13.jpeg";
import pic_14 from "../../assets/images/slide_14.jpeg";
//import pic_15 from "../../assets/images/slide_15.jpeg";

const AboutCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={pic_1}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_2}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_3}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_4}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_5}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_6}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_7}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_8}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_9}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_10}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_11}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_12}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_13}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pic_14}
            className="d-block w-100"
            style={{ maxHeight: 630 }}
            alt="Fourth slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default AboutCarousel;
