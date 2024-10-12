import React from "react";
import "./AdvertisingSolutions.css"; // You can add custom CSS for styling
import targetIcon from "../../assets/images/target.png";
import ideaIcon from "../../assets/images/idea.png";
import discussionIcon from "../../assets/images/discussion.png";

const AdvertisingSolutions = () => {
  return (
    <section className="advertising-solutions">
      <div className="container text-center">
        <h1 className="fw-bold">Advertising Solutions</h1>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
              {/* Add your first icon here */}
              <img src={targetIcon} alt="Hyper Targeting" />
            </div>
            <h4>Targeted Advertising</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your second icon here */}
              <img src={ideaIcon} alt="Dynamic Content Serving" />
            </div>
            <h4>Dynamic Ads</h4>
          </div>
          <div className="col-md-4">
            <div className="icon">
              {/* Add your third icon here */}
              <img src={discussionIcon} alt="Measurement + Attribution" />
            </div>
            <h4>Customer Engagement</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSolutions;
