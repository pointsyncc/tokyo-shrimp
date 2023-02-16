import React from 'react'

export const Hero = () => {
  return (
    <section className="hero__area ">
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="hero__content animation__hero_one">
            <a href="service.html">Strategy, Design, Solution Development <span><i
                  className="fa-solid fa-arrow-right"></i></span></a>
            <div className="hero__title-wrapper">
              <h1 className="hero__title">Digital agency studio</h1>
              <p className="hero__sub-title">With every single one of our clients, we
                bring forth deep passion for
                <span>creative problem solving</span>
                which is what we deliver.
              </p>
            </div>
            <img src="/imgs/icon/arrow-down-big.png" alt="Arrow Down Icon"/>
            <div className="experience">
              <h2 className="title">25k+</h2>
              <p>Projects completed <br/>successfully</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img src="/imgs/hero/1/1-bg.png" alt="image" className="hero1_bg"/>
  </section>
  )
}
