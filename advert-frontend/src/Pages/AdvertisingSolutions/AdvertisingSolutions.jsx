import React from "react";
import AdSolutionsHero from "./AdSolutionsHero";
import "./AdvertisingSolutions.css";
import solutions_image from "../../assets/images/pexels-tim-samuel-5835053.jpg";
import ad_solution from "../../assets/images/ad-solutions.png";
import no_1 from "../../assets/images/number-1.png";
import no_2 from "../../assets/images/number-2.png";
import no_3 from "../../assets/images/number-3.png";
import no_4 from "../../assets/images/number-4.png";
import no_5 from "../../assets/images/number-5.png";

const AdvertisingSolutions = () => {
  return (
    <div>
      <AdSolutionsHero />
      <h1 className="container fw-bold" style={{ fontSize: 55 }}>
        Street Level Digital Media
        <hr />
      </h1>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={solutions_image}
                alt="TaxiAd Solutions"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Column: Text and Button */}
            <div className="col-md-6" style={{ paddingLeft: 40 }}>
              <h2 className="display-5 fw-bold mb-4">Hyper Targeting</h2>
              <p className="lead pt-4">
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
        </div>
      </section>

      <section className="mission-section py-5" style={{ marginTop: 60 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={solutions_image}
                alt="Leverage TaxiAd"
                className="img-fluid rounded"
                style={{ paddingLeft: 40 }}
              />
            </div>

            <div className="col-md-6 order-md-1">
              <h2 className="display-5 fw-bold mb-5">
                Dynamic Content Serving
              </h2>
              <p className="lead">
                Curabitur eget metus ut mauris suscipit aliquam nec nec velit.
                Nullam semper tincidunt magna, at tincidunt nisi gravida id.
                Donec sed diam vel massa tristique hendrerit non ac felis.
                Aenean sit amet nisi convallis, ultricies lacus in, fermentum
                augue. Phasellus nec lorem sit amet sapien vulputate venenatis
                ut vel purus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <img
        src={ad_solution}
        alt="Ad_Solutions"
        className="mt-5 ad-solution-image"
      />
      <div className="container">
        <h2 className="fw-bold">Measurement & Attribution</h2>
        <p className="lead">
          Curabitur eget metus ut mauris suscipit aliquam nec nec velit. Nullam
          semper tincidunt magna, at tincidunt nisi gravida id. Donec sed diam
          vel massa tristique hendrerit non ac felis. Aenean sit amet nisi
          convallis, ultricies lacus in, fermentum augue. Phasellus nec lorem
          sit amet sapien vulputate venenatis ut vel purus. Curabitur eget metus
          ut mauris suscipit aliquam nec nec velit. Nullam semper tincidunt
          magna, at tincidunt nisi gravida id. Donec sed diam vel massa
          tristique hendrerit non ac felis. Aenean sit amet nisi convallis,
          ultricies lacus in, fermentum augue. Phasellus nec lorem sit amet
          sapien vulputate venenatis ut vel purus.
        </p>
        <h4>Measuring Advertising Impact</h4>
        <p className="lead fs-5">
          Curabitur eget metus ut mauris suscipit aliquam nec nec velit. Nullam
          semper tincidunt magna, at tincidunt nisi gravida id. Donec sed diam
          vel massa tristique hendrerit non ac felis. Aenean sit amet nisi
          convallis, ultricies lacus in, fermentum augue. Phasellus nec lorem
          sit amet sapien vulputate venenatis ut vel purus.
        </p>
      </div>
      <section className="container ad-solutions">
        <div className="text-center">
          <br />
          <div className="row align-items-center">
            <div className="icon-container col-md-2">
              <div className="icon">
                {/* Add your first icon here */}
                <img src={no_1} alt="step 1" />
              </div>
              <p>STEP 1</p>
              <p className="lead">
                Phasellus nec lorem sit amet sapien vulputate venenatis ut vel
                purus.
              </p>
            </div>
            <div className="icon-container col-md-2">
              <div className="icon">
                {/* Add your second icon here */}
                <img src={no_2} alt="step 2" />
              </div>
              <p>STEP 2</p>
              <p className="lead">
                Phasellus nec lorem sit amet sapien vulputate venenatis ut vel
                purus.
              </p>
            </div>
            <div className="icon-container col-md-2">
              <div className="icon">
                {/* Add your third icon here */}
                <img src={no_3} alt="step 3" />
              </div>
              <p>STEP 3</p>
              <p className="lead">
                Phasellus nec lorem sit amet sapien vulputate venenatis ut vel
                purus.
              </p>
            </div>
            <div className="icon-container col-md-2">
              <div className="icon">
                {/* Add your fourth icon here */}
                <img src={no_4} alt="step 4" />
              </div>
              <p>STEP 4</p>
              <p className="lead">
                Phasellus nec lorem sit amet sapien vulputate venenatis ut vel
                purus.
              </p>
            </div>
            <div className="icon-container col-md-2">
              <div className="icon">
                {/* Add your fifth icon here */}
                <img src={no_5} alt="step 5" />
              </div>
              <p>STEP 5</p>
              <p className="lead">
                Phasellus nec lorem sit amet sapien vulputate venenatis ut vel
                purus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisingSolutions;
