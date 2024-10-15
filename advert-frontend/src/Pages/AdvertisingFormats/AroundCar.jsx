import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import coordinated_swarm from "../../assets/images/Coordinated-swarms.png";
import brand_ambassadors from "../../assets/images/brand-ambassadors.png";
import complimentary_transport from "../../assets/images/complimentary-transport.png";

const AroundCar = () => {
  return (
    <section>
      <div className="container text-center">
        <br />
        <div style={{ maxHeight: 600 }}>
          <img
            src={coordinated_swarm}
            alt="Complimentary_Transport"
            style={{ maxWidth: 600, maxHeight: 600 }}
            className="around-car-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AroundCar;
