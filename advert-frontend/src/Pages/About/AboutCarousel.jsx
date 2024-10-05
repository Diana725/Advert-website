import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutCarousel.css";
import pic_1 from "../../assets/images/pexels-boa-vision-914571-2239598.jpg";
import pic_2 from "../../assets/images/pexels-marianna-15577-69206.jpg";
import pic_3 from "../../assets/images/pexels-ibrahimboran-296492.jpg";
import pic_4 from "../../assets/images/pexels-guiirossi-1705074.jpg";

const AboutCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic_1} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={pic_2} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={pic_3} className="d-block w-100" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img src={pic_4} className="d-block w-100" alt="Fourth slide" />
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
