import React from 'react'

export default function About() {
  return (
    <section className="about__area">
      <div className="container line g-0 pt-140 pb-130">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-12">
            <div className="about__title-wrapper">
              <h3 className="sec-title title-anim">We unlock the potential of your business
                with creative design</h3>
            </div>

            <div className="about__content-wrapper">
              <div className="about__img">
                <div className="img-anim">
                  <img src="imgs/about/1/1.jpg" alt="About Image" data-speed="0.3"/>
                </div>

                <div className="about__img-right">
                  <img src="imgs/about/1/2.jpg" alt="About Image Right" data-speed="0.5"/>
                  <div className="shape">
                    <div className="secondary" data-speed="0.9"></div>
                    <div className="primary"></div>
                  </div>
                </div>
              </div>

              <div className="about__content text-anim">
                <p>From traditional PR and thought leadership campaigns to
                  storytelling and creative social media
                  management we’ve got you covered. Something is not your average order-taking vendor. We are
                  proud to
                  be the go-to partner for some of the world’s biggest agencies and brands because they trust our
                  expertise</p>

                <div className="cursor-btn btn_wrapper">
                  <a className="btn-item wc-btn-primary btn-hover" href="about.html"><span></span> Explore Us <i
                      className="fa-solid fa-arrow-right"></i></a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
