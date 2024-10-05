import React from "react";
import "./OnCar.css"; // You can add custom CSS for styling
import coordinated_swarm from "../../assets/images/Coordinated-swarms.png";
import brand_ambassadors from "../../assets/images/brand-ambassadors.png";
import complimentary_transport from "../../assets/images/complimentary-transport.png";

const AroundCar = () => {
  return (
    <section className="advertising-formats">
      <div className="container text-center">
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
              {/* Add your first icon here */}
              <img
                src={coordinated_swarm}
                alt="Coordinated_Swarm"
                style={{ maxWidth: 500, maxHeight: 500 }}
              />
            </div>
            <h4 style={{ color: "white" }}>Coordinated Swarm</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your second icon here */}
              <img
                src={complimentary_transport}
                alt="Complimentary_Transport"
                style={{ maxWidth: 500, maxHeight: 500 }}
              />
            </div>
            <h4 style={{ color: "white" }}>Complimentary Transport</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your third icon here */}
              <img
                src={brand_ambassadors}
                alt="Brand_Ambassadors"
                style={{ maxWidth: 500, maxHeight: 500 }}
              />
            </div>
            <h4 style={{ color: "white" }}>Brand Ambassadors</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AroundCar;
