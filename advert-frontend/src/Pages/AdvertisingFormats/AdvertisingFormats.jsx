import React from "react";
import "./AdvertisingFormats.css";
import AdvertisingFormatsHero from "./AdvertisingFormatsHero";
import Banner from "./Banner";
import OnCar from "./On-CarImage";
import digital_top from "../../assets/images/Digital-Tops.png";
import car_wrap from "../../assets/images/pexels-ibrahimboran-296492.jpg";
import AroundCar from "./AroundCar";
import { within } from "@testing-library/react";

function AdvertisingFormats() {
  return (
    <div>
      <AdvertisingFormatsHero />
      <Banner />
      <div className="advertising-formats">
        {/* On-Car Section */}
        <section className="format-section">
          <div>
            <h2
              className="format-title fw-bold"
              style={{ fontSize: 60, backgroundColor: "#212529", padding: 70 }}
            >
              TaxiAd On-Car Advertising
            </h2>
          </div>
          <div className="format-content">
            <div className="text-content">
              <h2>Digital Tops</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa. Nullam rhoncus enim viverra iaculis cursus.
                <OnCar />
                Suspendisse vehicula ligula et neque congue, et dapibus velit
                imperdiet. Curabitur faucibus, ipsum ut dapibus placerat, metus
                erat laoreet ante, non commodo diam justo sit amet massa.
                Maecenas ac venenatis tellus, a dapibus mauris. Integer cursus
                posuere ante eget interdum. Nulla suscipit vitae quam vel
                laoreet. Suspendisse in tristique libero.
                <br />
                <br />
                Aliquam aliquet libero quis metus volutpat, at vehicula neque
                iaculis. Morbi congue nisl et massa tincidunt, sit amet dictum
                augue finibus. Quisque molestie non purus eu cursus. Maecenas
                felis diam, pellentesque tincidunt tellus ultrices, condimentum
                venenatis sem. Donec rutrum viverra odio a dapibus. Donec
                egestas est eu luctus hendrerit. Sed sit amet nisi augue.
              </p>

              <section style={{ paddingBottom: 80 }}>
                <h3 className="pb-5" style={{ fontSize: 50, paddingTop: 70 }}>
                  Industry-Leading Digital Tops
                </h3>
                <div>
                  <div className="row justify-content-space-between ">
                    {/* Right Column: Image (swapped) */}
                    <div className="col-md-6 order-md-2">
                      <img
                        src={digital_top}
                        alt="Digital-Tops"
                        className="img-fluid rounded"
                        style={{
                          maxWidth: 700,
                          maxHeight: 700,
                          paddingLeft: 30,
                        }}
                      />
                    </div>

                    {/* Left Column: Text and Button (swapped) */}
                    <div className="col-md-6 order-md-1">
                      <ul className="fs-5">
                        <li className="py-2">
                          {" "}
                          Donec egestas est eu luctus hendrerit. Sed sit amet
                          nisi augue.
                        </li>
                        <li className="py-3">
                          {" "}
                          Donec egestas est eu luctus hendrerit. Sed sit amet
                          nisi augue.
                        </li>
                        <li className="py-3">
                          {" "}
                          Donec egestas est eu luctus hendrerit. Sed sit amet
                          nisi augue.
                        </li>
                        <li className="py-3">
                          {" "}
                          Donec egestas est eu luctus hendrerit. Sed sit amet
                          nisi augue.
                        </li>
                        <li className="py-3">
                          {" "}
                          Donec egestas est eu luctus hendrerit. Sed sit amet
                          nisi augue.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="background-img3">
              <h2
                className="mt-5 fw-bold"
                style={{ fontSize: 40, marginLeft: 150, marginRight: 150 }}
              >
                Static Tops
              </h2>
              <p className="fs-5" style={{ marginLeft: 150, marginRight: 150 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa.
              </p>
            </div>
            <section className="mission-section py-5 mt-5">
              <div className="container">
                <div className="row align-items-center">
                  {/* <h1 fw-bold>Our Mission</h1> */}
                  {/* Left Column: Image */}
                  <div className="col-md-6">
                    <img
                      src={car_wrap}
                      alt="TaxiAd Mission"
                      className="img-fluid rounded"
                      style={{ maxHeight: 600, maxWidth: 600 }}
                    />
                  </div>

                  {/* Right Column: Text and Button */}
                  <div className="col-md-6">
                    <h2 className="display-5 fw-bold mb-5">Car Wraps</h2>
                    <p className="lead py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce non porttitor risus, quis bibendum orci. Maecenas
                      orci turpis, cursus non elit vitae, rutrum accumsan risus.
                      Nam commodo tortor urna, sit amet congue ex pulvinar et.
                      Suspendisse bibendum nulla nunc, nec efficitur risus
                      vehicula non.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* <img
              src="/images/on-car-example.jpg"
              alt="On-Car Ads"
              className="format-image"
            /> */}
          </div>
        </section>

        {/* In-Car Section */}
        <section className="format-section">
          <div>
            <h2
              className="format-title"
              style={{ fontSize: 60, backgroundColor: "#212529", padding: 70 }}
            >
              TaxiAd In-Car Advertising
            </h2>
          </div>
          <div className="format-content">
            <div className="text-content">
              <h2>In-Car Posters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non porttitor risus, quis bibendum orci. Maecenas orci turpis,
                cursus non elit vitae, rutrum accumsan risus. Nam commodo tortor
                urna, sit amet congue ex pulvinar et. Suspendisse bibendum nulla
                nunc, nec efficitur risus vehicula non.
              </p>
              <br />
              <p>Features: </p>
              <div className="format-section text-content format-content">
                <div className="row align-items-center justify-content-space-between ">
                  {/* Right Column: Image (swapped) */}
                  <div className="col-md-6 order-md-2">
                    <img
                      src={car_wrap}
                      alt="Digital-Tops"
                      className="img-fluid rounded"
                      style={{
                        maxWidth: 700,
                        maxHeight: 700,
                        paddingLeft: 30,
                      }}
                    />
                  </div>

                  {/* Left Column: Text and Button (swapped) */}
                  <div className="col-md-6 order-md-1">
                    <ul className="fs-5">
                      <li className="py-2">
                        {" "}
                        Donec egestas est eu luctus hendrerit.
                      </li>
                      <li className="py-3">
                        {" "}
                        Donec egestas est eu luctus hendrerit.
                      </li>
                      <li className="py-3">
                        {" "}
                        Donec egestas est eu luctus hendrerit.
                      </li>
                      <li className="py-3">
                        {" "}
                        Donec egestas est eu luctus hendrerit.
                      </li>
                      <li className="py-3">
                        {" "}
                        Donec egestas est eu luctus hendrerit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#212529" }}>
            <h2
              className="format-title"
              style={{ fontSize: 60, paddingTop: 70 }}
            >
              TaxiAd Around-Car Advertising
            </h2>
            <p style={{ color: "white", paddingLeft: 50 }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              porttitor risus, quis bibendum orci. Maecenas orci turpis, cursus
              non elit vitae, rutrum accumsan risus. Nam commodo tortor urna,
              sit amet congue ex pulvinar et. Suspendisse bibendum nulla nunc,
              nec efficitur risus vehicula non. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam et ex leo. Quisque dapibus ex
              quis ornare lacinia. Proin rutrum blandit metus ut aliquam. Ut
              vitae vulputate leo, at semper urna. Curabitur felis sem, ornare
              in libero et, hendrerit faucibus erat. Duis velit tortor, iaculis
              non convallis ac, placerat vel diam. Ut vel blandit odio, sit amet
              efficitur massa.
            </p>
            <AroundCar />
          </div>
        </section>

        {/* Contact Button */}
        <div className="contact-button">
          <p className="fs-3 fw-bold">Want To Advertise With TaxiAd?</p>
          <button className="mx-5">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingFormats;
