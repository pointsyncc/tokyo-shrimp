import React from "react";

export default function Testimonial() {
  return (
    <section className="testimonial__area">
      <div className="container g-0 line">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="testimonial__wrapper">
              <div className="testimonial__item item-1">
                <div className="button modal-trigger">
                  <div className="testimonial__img b-right">
                    <img
                      src="imgs/testimonial/1/1.png"
                      alt="Testimonial Image"
                    />
                  </div>

                  <h2 className="testimonial__title">Jessica Sherlock</h2>
                  <h3 className="testimonial__role">Manager, Oitaka</h3>
                </div>
              </div>
              <div className="sec-title-wrapper text-anim">
                <h4 className="sec-sub-title">Testimonials</h4>
                <h5 className="sec-title title-anim">
                  Clients <br />
                  feedback
                </h5>
                <p>
                  Our happy customers give us impactfull and positive feedback
                  on our services, customer supports & etc.
                </p>
              </div>
            </div>

            <div className="testimonial__item item-2">
              <div className="button modal-trigger-2">
                <div className="testimonial__img b-left">
                  <img
                    src="imgs/testimonial/1/3.png"
                    alt="Testimonial Image"
                  />
                </div>

                <h2 className="testimonial__title">Jessica Sherlock</h2>
                <h3 className="testimonial__role">Manager, Oitaka</h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="testimonial__item item-3 img-">
              <div className="button modal-trigger-3">
                <div className="testimonial__img b-left">
                  <img
                    src="imgs/testimonial/1/2.png"
                    alt="Testimonial Image"
                  />
                </div>

                <h2 className="testimonial__title">adam Smith</h2>
                <h3 className="testimonial__role">Manager, Oitaka</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
