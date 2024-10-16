import React from "react";
import "./AdvertisingFormats.css";
import AdvertisingFormatsHero from "./AdvertisingFormatsHero";
import OnCar from "./On-CarImage";
import digital_top from "../../assets/images/maiko_img_8.jpeg";
import car_wrap from "../../assets/images/maiko_img_9.jpeg";
import AroundCar from "./AroundCar";
import Experiential from "./experiential";
import { NavLink } from "react-router-dom";

function AdvertisingFormats() {
  return (
    <div>
      <AdvertisingFormatsHero />
      <div className="advertising-formats">
        {/* On-Car Section */}
        <section className="format-section">
          <div>
            <h2
              className="format-title fs-1 fw-bold"
              style={{ fontSize: 60, backgroundColor: "#212529", padding: 60 }}
            >
              AdLite On-Car Advertising
            </h2>
          </div>
          <div className="format-content">
            <div className="text-content">
              <h2 className="fs-2">Taxi Tops</h2>
              <p className="fs-6">
                Our taxi tops serve as your ‘mobile billboards,’ providing a
                double-sided platform to showcase your brand on the move, day
                and night. Strategically designed and angled for maximum
                visibility, they offer a large display area, ensuring your ad
                stands out, even from a distance. At night, the well-lit
                displays make your ad even more eye-catching, enhancing its
                impact.
                <OnCar />
              </p>

              <section style={{ paddingBottom: 30 }}>
                <h3 className="pb-4 fs-4 fw-bold">Why Taxi-Top Ads</h3>
                <div>
                  <div className="row justify-content-between">
                    {/* Right Column: Image */}
                    <div className="col-12 col-md-6 order-md-2">
                      <img
                        src={digital_top}
                        alt="Digital-Tops"
                        className="img-fluid rounded ad-img"
                        style={{ paddingLeft: 30 }}
                      />
                    </div>

                    {/* Left Column: Text */}
                    <div className="col-12 col-md-6 order-md-1">
                      <ul className="fs-6">
                        <li className="py-1">
                          Get 100% share of voice (SOV), meaning the display
                          will only advertise your brand
                        </li>
                        <li className="py-2">
                          Has a large area to clearly capture your message
                        </li>
                        <li className="py-2">
                          Lights up at night making the display more
                          eye-catching, giving your ad more impact
                        </li>
                        <li className="py-2">
                          Flexible to come up with creative campaigns and you
                          can change ads at a low cost
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* In-Car Section */}
        <section className="format-section">
          <div>
            <h2
              className="format-title fs-1"
              style={{ fontSize: 60, backgroundColor: "#212529", padding: 60 }}
            >
              AdLite In-Car Advertising
            </h2>
          </div>
          <div className="format-content">
            <div className="text-content">
              <h2 className="fs-2">In-Car Displays</h2>
              <p className="fs-6">
                Our in-car displays target passengers inside the taxi, offering
                your brand direct interaction with potential customers.
                Throughout the ride, passengers engage with your ad, making the
                experience more personalized and targeted. It's also an
                excellent platform for tracking the progress and effectiveness
                of your campaign.
              </p>

              <section style={{ paddingBottom: 30 }}>
                <h3 className="pb-4 fs-4 fw-bold">Why In-Car Ads?</h3>
                <div>
                  <div className="row justify-content-between">
                    {/* Right Column: Image */}
                    <div className="col-12 col-md-6 order-md-2">
                      <img
                        src={car_wrap}
                        alt="In-car Ads"
                        className="img-fluid rounded ad-img"
                        style={{
                          paddingLeft: 50,
                        }}
                      />
                    </div>

                    {/* Left Column: Text */}
                    <div className="col-12 col-md-6 order-md-1">
                      <ul className="fs-6">
                        <li className="py-1">
                          Get direct interaction with your potential customers
                        </li>
                        <li className="py-2">
                          Great platform for coming up with interactive and
                          social ad campaigns (e.g scan QR code, USSD code)
                        </li>
                        <li className="py-2">
                          Track the campaign through the various interactions
                        </li>
                        <li className="py-2">
                          Passengers have extended exposure to your ad giving it
                          better engagement and brand recall
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Around-Car Advertising */}
        <div style={{ backgroundColor: "#212529" }}>
          <h2 className="format-title fs-1" style={{ paddingTop: 70 }}>
            AdLite Around-Car Advertising
          </h2>
          <p style={{ color: "white", paddingLeft: 50 }} className="fs-6">
            For larger campaigns, we offer full taxi wraps combined with taxi
            top and in-car displays for maximum visibility. Let our taxis become
            your mobile billboards, providing expansive space to showcase your
            brand and reach a wider audience.
          </p>

          <AroundCar />
          <h2 className="format-title fs-1">Experiential Marketing</h2>
          <p style={{ color: "white", paddingLeft: 50 }} className="fs-6">
            Beyond offering a platform, taxi advertising allows for immersive
            experiential marketing campaigns. Whether it’s a roadshow for your
            company launch, making a statement at your events, or executing
            creative campaigns, our taxis provide a unique and flexible
            solution. With endless possibilities, our innovative approach
            ensures your brand stands out and leaves a lasting impression.
          </p>
          <h4
            className="coordinated"
            style={{ color: "white", paddingLeft: 40, paddingBottom: 5 }}
          >
            Coordinated Swarms:
          </h4>
          <Experiential />
        </div>

        {/* Contact Button */}
        <div className="contact-button">
          <p className="fs-3 fw-bold">Want To Advertise With AdLite?</p>
          <a
            href="/contact"
            className="mx-3 fs-6 btn btn-success text-white"
            style={{ maxHeight: 50 }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingFormats;
