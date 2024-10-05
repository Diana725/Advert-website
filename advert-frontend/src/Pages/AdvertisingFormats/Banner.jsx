import React from "react";
import "../../components/AdvertisingSolutions/AdvertisingSolutions.css";
const Banner = () => {
  return (
    <div className="container text-center" style={{ paddingBottom: 10 }}>
      <div className="row">
        <div className="col-md-4">
          <div className="icon">{/* Add your first icon here */}</div>
          <h1 className="fw-bold" style={{ fontSize: 60 }}>
            In-Car
          </h1>
        </div>
        <div className="col-md-4">
          <div className="icon">{/* Add your second icon here */}</div>
          <h1 className="fw-bold" style={{ fontSize: 60 }}>
            On-Car
          </h1>
        </div>
        <div className="col-md-4">
          <div className="icon">{/* Add your third icon here */}</div>
          <h1 className="fw-bold" style={{ fontSize: 60 }}>
            Around Car
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
