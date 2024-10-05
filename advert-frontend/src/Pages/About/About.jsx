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
                TaxiAd is the street-level digital media platform that connects
                audiences with dynamic media on taxis and rideshare vehicles.
              </h2>
              <br />
            </div>
          </div>
        </div>
      </section>
      <p className="container pt-5 lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
        porttitor risus, quis bibendum orci. Maecenas orci turpis, cursus non
        elit vitae, rutrum accumsan risus. Nam commodo tortor urna, sit amet
        congue ex pulvinar et. Suspendisse bibendum nulla nunc, nec efficitur
        risus vehicula non. Sed maximus imperdiet placerat. Phasellus bibendum
        porta risus, at lacinia massa dictum id. Quisque ac placerat nulla.
      </p>
      <p className="container pb-5 lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
        porttitor risus, quis bibendum orci. Maecenas orci turpis, cursus non
        elit vitae, rutrum accumsan risus. Nam commodo tortor urna, sit amet
        congue ex pulvinar et. Suspendisse bibendum nulla nunc, nec efficitur
        risus vehicula non. Sed maximus imperdiet placerat. Phasellus bibendum
        porta risus, at lacinia massa dictum id. Quisque ac placerat nulla.
      </p>
      <div className="background-img">
        <div className="container">
          <h2
            className="mt-5 fw-bold"
            style={{ fontSize: 70, marginRight: 150 }}
          >
            Our Mission
          </h2>
          <h3
            className="mb-4 fw-bold"
            style={{ fontSize: 40, marginRight: 150 }}
          >
            To advertise brands by bringing dynamic and useful content to the
            streets of our cities.
          </h3>
          <p className="fs-5" style={{ marginRight: 150 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ex
            leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum blandit
            metus ut aliquam. Ut vitae vulputate leo, at semper urna. Curabitur
            felis sem, ornare in libero et, hendrerit faucibus erat. Duis velit
            tortor, iaculis non convallis ac, placerat vel diam. Ut vel blandit
            odio, sit amet efficitur massa.
          </p>
          <section className="info-section">
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Understanding Our Audience</h2>
              <p style={{ fontSize: 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et ex leo. Quisque dapibus ex quis ornare lacinia. Proin
                rutrum blandit metus ut aliquam. Ut vitae vulputate leo, at
                semper urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa.
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Digital Tops</h2>
              <p style={{ fontSize: 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et ex leo. Quisque dapibus ex quis ornare lacinia. Proin
                rutrum blandit metus ut aliquam. Ut vitae vulputate leo, at
                semper urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa.
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Innovation</h2>
              <p style={{ fontSize: 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et ex leo. Quisque dapibus ex quis ornare lacinia. Proin
                rutrum blandit metus ut aliquam. Ut vitae vulputate leo, at
                semper urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa.
              </p>
            </div>
            <div className="info-box">
              <h2 className="mb-4 fw-bold fs-2">Smarter Advertisement</h2>
              <p style={{ fontSize: 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et ex leo. Quisque dapibus ex quis ornare lacinia. Proin rutrum
                blandit metus ut aliquam. Ut vitae vulputate leo, at semper
                urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et ex leo. Quisque dapibus ex quis ornare lacinia. Proin
                rutrum blandit metus ut aliquam. Ut vitae vulputate leo, at
                semper urna. Curabitur felis sem, ornare in libero et, hendrerit
                faucibus erat. Duis velit tortor, iaculis non convallis ac,
                placerat vel diam. Ut vel blandit odio, sit amet efficitur
                massa.
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
