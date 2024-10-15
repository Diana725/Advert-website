import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-section mt-5">
      {" "}
      {/* Margin-top for space */}
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="container">
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="testimonial-card p-4 text-center">
              <p className="testimonial-text">
                "AdLite has been instrumental in helping us achieve our
                advertising goals. Their taxi branding concept is not only
                well-executed but also strategically placed to maximize
                visibility and impact. The quality of their work is outstanding,
                and they have always demonstrated a keen understanding of our
                branding and marketing needs. "
              </p>
              <h5 className="testimonial-author mt-3">
                Mercy, Marie Stopes Kenya{" "}
              </h5>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="testimonial-card p-4 text-center">
              <p className="testimonial-text mb-4">
                “We ran two campaigns with AdLite Media and both of them were a
                huge success. The feedback we got was unexpected and we were
                very impressed. We received numerous calls and visitations at
                our clinic increased during that time”
              </p>
              <br />

              <h5 className="testimonial-author mt-3">
                Linda, Optimum Hospital{" "}
              </h5>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="testimonial-card p-4 text-center">
              <p className="testimonial-text">
                "Partnering with AdLite Media was a game-changer for our new
                clinic in Nakuru. Their expertise helped us craft an impactful
                ad campaign that significantly boosted our visibility. Thanks to
                AdLite, we successfully penetrated the Nakuru market and
                positioned ourselves as the leading dialysis center in the
                area."
              </p>
              <h5 className="testimonial-author mt-3">
                Maggie, Maida Healthcare{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
