import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import coordinated_swarm from "../../assets/images/Coordinated-swarms.png";

const AroundCar = () => {
  return (
    <section className="py-4">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <img
            src={coordinated_swarm}
            alt="Complimentary Transport"
            className="img-fluid around-car-img"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AroundCar;
