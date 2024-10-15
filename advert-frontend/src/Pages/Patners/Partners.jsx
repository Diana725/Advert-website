import React from "react";
import PartnersHero from "./PartnersHero";
import partners from "../../assets/images/partners.png";
// import "./PartnersCarousel";
import ImageCarousel from "./PartnersCarousel";
import Testimonials from "./testimonials";

const Partners = () => {
  return (
    <div>
      <PartnersHero />
      <section className="py-3">
        <div className="our-clients container">
          <div className="row align-items-center">
            {/* <h1 fw-bold>Our Mission</h1> */}
            {/* Left Column: Image */}
            <div className="col-md-5">
              <h1 style={{ fontSize: 60, paddingLeft: 30 }}>Our Clients</h1>
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6">
              <p className="lead fs-6">
                Our clients and partners are brands that trust us to help them
                connect more effectively with their customers and have
                experienced the success of taxi advertising firsthand. We’ve
                collaborated with over 20 brands, crafting creative and targeted
                marketing campaigns that deliver measurable results.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* <div className="my-5 container">
        <img src={partners} alt="partners" style={{ maxWidth: 1200 }} />
      </div> */}
      <ImageCarousel />
      <Testimonials />
    </div>
  );
};

export default Partners;
