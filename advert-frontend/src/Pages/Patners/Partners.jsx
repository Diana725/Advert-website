import React from "react";
import PartnersHero from "./PartnersHero";
import partners from "../../assets/images/partners.png";

const Partners = () => {
  return (
    <div>
      <PartnersHero />
      <section className="py-3">
        <div className="our-clients container">
          <div className="row align-items-center">
            {/* <h1 fw-bold>Our Mission</h1> */}
            {/* Left Column: Image */}
            <div className="col-md-6">
              <h1 style={{ fontSize: 60 }}>Our Clients</h1>
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non porttitor risus, quis bibendum orci. Maecenas orci turpis,
                cursus non elit vitae, rutrum accumsan risus. Nam commodo tortor
                urna, sit amet congue ex pulvinar et. Suspendisse bibendum nulla
                nunc, nec efficitur risus vehicula non. Sed maximus imperdiet
                placerat. Phasellus bibendum porta risus, at lacinia massa
                dictum id. Quisque ac placerat nulla.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <div className="my-5 container">
        <img src={partners} alt="partners" style={{ maxWidth: 1200 }} />
      </div>
    </div>
  );
};

export default Partners;
