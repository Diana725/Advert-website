import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Locations.css";

// Replace these with your actual image paths
import imageNakuru from "../../assets/images/pexels-boa-vision-914571-2239598.jpg";
import imageNairobi from "../../assets/images/pexels-boa-vision-914571-2239598.jpg";
import imageMombasa from "../../assets/images/pexels-boa-vision-914571-2239598.jpg";

const locations = [
  { name: "Nakuru", img: imageNakuru },
  { name: "Nairobi", img: imageNairobi },
  { name: "Eldoret", img: imageMombasa },
];

const Locations = () => {
  return (
    <section className="locations-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 display-5 fw-bold">Our Locations</h2>
        <div className="row">
          {locations.map((location, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="location-card position-relative">
                <img
                  src={location.img}
                  alt={location.name}
                  className="img-fluid rounded"
                />
                {/* Overlay */}
                <div className=" position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <h3
                    className="text-white fw-bold"
                    style={{ fontSize: "70px" }}
                  >
                    {location.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
