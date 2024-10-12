import React from "react";
import AboutHero from "./AboutHero";
import "./About.css";
import mission_image from "../../assets/images/pexels-ibrahimboran-296492.jpg";
import AboutCarousel from "./AboutCarousel";

const About = () => {
  return (
    <div>
      <AboutHero />
      <section className="mission-section py-1">
        <div className="container">
          <div className="row align-items-center">
            {/* <h1 fw-bold>Our Mission</h1> */}
            {/* Left Column: Image */}
            <div className="col-md-6">
              <img
                src={mission_image}
                alt="TaxiAd Mission"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6">
              <h2 className="display-5 fw-bold mb-4">
                AdLite is the first-ever company that connects brands to
                audiences through dynamic and innovative taxi advertising
                platforms.
              </h2>
              <br />
            </div>
          </div>
        </div>
      </section>
      <p className="container pt-5 lead">
        AdLite Media is a marketing startup set to disrupt the out-of-home
        advertising industry with our innovative taxi advertising platforms. Our
        clients benefit from a friendly, flexible, and eye-catching ad solution
        that connects with their audience in creative ways never seen before. We
        also empower our drivers, providing them with an additional source of
        income alongside their driving time. Take your brand on the move and let
        your customers engage with your ads anywhere, anytime!
      </p>
      <div className="background-img">
        <div className="container">
          <h2
            className="mt-5 fw-bold"
            style={{ fontSize: 70, marginRight: 150 }}
          >
            Why AdLite Media
          </h2>
          <h3
            className="mb-4 fw-bold"
            style={{ fontSize: 40, marginRight: 150 }}
          >
            To advertise brands by bringing dynamic and useful content to the
            streets of our cities.
          </h3>
          <section className="info-section">
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Our Amazing Team</h2>
              <p style={{ fontSize: 18 }}>
                Behind the success of AdLite Media is a dedicated team of
                passionate professionals. We pride ourselves on collaboration,
                working closely with you to ensure your ad campaign succeeds.
                Our team of marketing and design experts is committed to
                crafting the perfect strategy for your brand.
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">
                Innovation Is Our Key Pillar
              </h2>
              <p style={{ fontSize: 18 }}>
                Our platforms are innovative, and we continuously seek the
                latest advancements to enhance our concept. Our goal is to
                revolutionize mobile advertising by developing groundbreaking
                techniques that elevate taxi advertising and boost customer
                engagement
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Integrated Marketing</h2>
              <p style={{ fontSize: 18 }}>
                Taxi advertising seamlessly integrates with other marketing
                initiatives, resulting in more effective ad campaigns. Whether
                paired with outdoor billboards or digital ads, our platform can
                enhance your marketing strategy and add significant value. Its
                flexibility ensures that the impact can easily transition online
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Stellar Reputation</h2>
              <p style={{ fontSize: 18 }}>
                Our values and professionalism are reflected in everything we
                do, and our clients have been more than satisfied working with
                us. From inception to completion, our ad campaign process is
                smooth and collaborative, fostering a true partnership. Our
                clients consistently enjoy a seamless experience as we help them
                achieve their marketing goals.
                <br />
                <br />
                <div style={{ fontStyle: "italic", color: "#F6B803" }}>
                  “We ran two campaigns with AdLite Media and both of them were
                  a huge success. The feedback we got was unexpected and we were
                  very impressed”
                  <br />
                  Linda, Optimum Hospital
                </div>
              </p>
            </div>
          </section>
        </div>
      </div>
      <AboutCarousel />
    </div>
  );
};

export default About;
