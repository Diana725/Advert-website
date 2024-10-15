import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Locations.css";

// Replace these with your actual image paths
import imageNakuru from "../../assets/images/maiko_img_nakuru.jpeg";
import imageNairobi from "../../assets/images/maiko_img_nairobi.jpeg";
import imageEldoret from "../../assets/images/maiko_img_eldoret.jpeg";

const locations = [
  { name: "Nakuru", img: imageNakuru },
  { name: "Nairobi", img: imageNairobi },
  { name: "Eldoret", img: imageEldoret },
];

const Locations = () => {
  return (
    <section className="locations-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 display-5 fw-bold fs-2">
          Our Locations
        </h2>
        <div className="row">
          {locations.map((location, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="location-card position-relative">
                <img
                  src={location.img}
                  alt={location.name}
                  // style={{ maxHeight: 400 }}
                  className="img-fluid rounded locations_img"
                />
                {/* Overlay */}
                <div className=" position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center"></div>
              </div>
              <h3
                className="text-black fw-bold"
                style={{ fontSize: 25, paddingLeft: 115 }}
              >
                {location.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
