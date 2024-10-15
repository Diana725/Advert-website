import React from "react";
import AdSolutionsHero from "./AdSolutionsHero";
import "./AdvertisingSolutions.css";
import solutions_image from "../../assets/images/maiko_img_10.jpeg";
import ad_solution from "../../assets/images/ad-solutions.png";
import no_1 from "../../assets/images/number-1.png";
import no_2 from "../../assets/images/number-2.png";
import no_3 from "../../assets/images/number-3.png";
import no_4 from "../../assets/images/number-4.png";
import no_5 from "../../assets/images/number-5.png";
import solutions_image_1 from "../../assets/images/maiko_img_14.jpeg";
import solutions_image_2 from "../../assets/images/maiko_img_15.jpeg";
import brandStudyIcon from "../../assets/images/profit.png";
import footTrafficIcon from "../../assets/images/FootTrafficIcon.png";
import webConversionsIcon from "../../assets/images/WebConversionIcon.png";

const AdvertisingSolutions = () => {
  return (
    <div>
      <AdSolutionsHero />
      <h1 className="container fw-bold fs-1" style={{ fontSize: 55 }}>
        Street Level Advertising
        <hr />
      </h1>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={solutions_image}
                alt="TaxiAd Solutions"
                className="img-fluid rounded first-img"
              />
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6" style={{ paddingLeft: 10 }}>
              <h2 className="display-5 fw-bold mb-2 fs-2">Bigger Audience</h2>
              <p className="lead pt-4 fs-6">
                Taxis are constantly on the move, covering every corner of the
                city and passing through high-traffic areas like the CBD and
                residential estates. Operating day and night, they provide
                maximum visibility for your ad. With taxi top displays
                positioned at eye level and in-car displays strategically placed
                on the headrests, you can be confident that your audience is
                consistently engaging with your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section py-1" style={{ marginTop: 40 }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 order-md-2">
              <div className="image-stack">
                <img
                  src={solutions_image_1}
                  alt="Leverage TaxiAd Image 1"
                  className="img-fluid rounded mb-3 stacked-image"
                  // style={{ maxWidth: 500 }}
                />
                <img
                  src={solutions_image_2}
                  alt="Leverage TaxiAd Image 2"
                  className="img-fluid rounded stacked-image"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-md-6 order-md-1">
              <h2 className="display-5 fw-bold mb-3 fs-2">Dynamic Ads</h2>
              <p className="lead fs-6">
                Marketing is about standing out and reaching your target
                audience—something taxi advertising excels at. With our
                eye-catching designs and flexible approach, you can create
                innovative campaigns that have the potential to go viral. It's
                also easy and cost-effective to update or switch between ads,
                giving you the freedom to adapt your messaging. Taxi advertising
                allows you to launch interactive, engaging campaigns that leave
                a lasting impact on potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <img
        src={ad_solution}
        alt="Ad_Solutions"
        className="mt-5 ad-solution-image"
      /> */}
      <div className="container">
        <h2 className="fw-bold fs-2">Measurement & Insights</h2>
        <p className="lead fs-6">
          At AdLite Media, our goal is to ensure your marketing budget delivers
          a strong return on investment. That’s why we evaluate the impact of
          your ad campaign every step of the way. We begin by discussing your
          campaign goals, ensuring we target the right audience and maximize the
          effectiveness of our platforms. To measure success, we consider key
          factors such as foot traffic, brand recall, and increases in web and
          app engagement. Our advertising solutions create impact beyond the
          outdoor space, extending into the digital and online space for greater
          results.
        </p>
        <h4>Our Advertising Process</h4>
        <p className="lead fs-6">
          We take a collaborative approach with our clients to develop effective
          marketing strategies. First, we work together to clearly define the
          campaign objectives and target audience. Next, we create a sample ad
          for your approval before launching the campaign. Once the campaign is
          live, we continuously evaluate its impact, providing insights and
          feedback to shape future marketing strategies.
        </p>
      </div>
      <section className="container ad-solutions">
        <div className="text-center">
          <br />
          <div className="row align-items-center justify-content-center">
            {" "}
            {/* Added justify-content-center for centering */}
            <div className="icon-container col-12 col-sm-6 col-md-3 mb-4">
              {" "}
              {/* Use col-md-3 for four items on medium screens */}
              <div className="icon">
                <img src={no_1} alt="step 1" className="step-imgs" />
              </div>
              <p>STEP 1</p>
              <p className="lead" style={{ fontSize: 15 }}>
                Set campaign objectives
              </p>
            </div>
            <div className="icon-container col-12 col-sm-6 col-md-3 mb-4">
              <div className="icon">
                <img src={no_2} alt="step 2" className="step-imgs" />
              </div>
              <p>STEP 2</p>
              <p className="lead" style={{ fontSize: 15 }}>
                Provide a sample ad
              </p>
            </div>
            <div className="icon-container col-12 col-sm-6 col-md-3 mb-4">
              <div className="icon">
                <img src={no_3} alt="step 3" className="step-imgs" />
              </div>
              <p>STEP 3</p>
              <p className="lead" style={{ fontSize: 15 }}>
                Launch campaign
              </p>
            </div>
            <div className="icon-container col-12 col-sm-6 col-md-3 mb-4">
              <div className="icon">
                <img src={no_4} alt="step 4" className="step-imgs" />
              </div>
              <p>STEP 4</p>
              <p className="lead" style={{ fontSize: 15 }}>
                Measure and analyze campaign
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="background-img">
        <div className="container">
          <h3 className="mb-4 fw-bold fs-2" style={{ marginRight: 150 }}>
            Measurement Offerings:
          </h3>

          <section className="icon-section text-center">
            <div className="row">
              {/* Brand Study */}
              <div className="col-md-4">
                <div className="icon-box">
                  <img
                    src={brandStudyIcon} // Replace with your imported icon file path
                    alt="Brand Study"
                    className="img-fluid"
                    style={{ height: 100, width: 100 }} // Set the size of the icon
                  />
                  <h4 className="mt-3 fw-bold fs-5">Brand Awareness</h4>
                  <p style={{ fontSize: 14, paddingRight: 20 }}>
                    Gain insights into how your brand is perceived in the
                    market.
                  </p>
                </div>
              </div>

              {/* Foot Traffic */}
              <div className="col-md-4">
                <div className="icon-box px-2">
                  <img
                    src={footTrafficIcon} // Replace with your imported icon file path
                    alt="Foot Traffic"
                    className="img-fluid"
                    style={{ height: 100, width: 100 }} // Set the size of the icon
                  />
                  <h4 className="mt-3 fw-bold fs-5">Foot Traffic</h4>
                  <p style={{ fontSize: 14 }}>
                    Measure the impact of your campaign on real-world foot
                    traffic.
                  </p>
                </div>
              </div>

              {/* Web Conversions */}
              <div className="col-md-4">
                <div className="icon-box">
                  <img
                    src={webConversionsIcon} // Replace with your imported icon file path
                    alt="Web Conversions"
                    className="img-fluid"
                    style={{ height: 100, width: 100 }} // Set the size of the icon
                  />
                  <h4
                    className="mt-3 fw-bold fs-5"
                    style={{ paddingRight: 30 }}
                  >
                    Web Conversions
                  </h4>
                  <p style={{ fontSize: 14 }}>
                    Track how your ads drive visitors to your site and convert
                    leads.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSolutions;
