import React from "react";
import dynamic from 'next/dynamic'



const CountUp = 'react-countup'

export default function Counter() {
  return (
    <section className="counter__area">
      <div className="container g-0 line pt-150">
        <span className="line-3"></span>

        <div className="row">
          <div className="col-xxl-12">
            <div className="counter__wrapper counter_animation">
              <div className="counter__item counter__anim">
                <h2 className="counter__number">
                <CountUp  end={25} duration={2}  suffix="+"/>
                  </h2>
                <p>
                  Project <br />
                  completed
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number">8k+</h2>
                <p>
                  Happy <br />
                  customers
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number">15</h2>
                <p>
                  Years <br />
                  experiences
                </p>
                <span className="counter__border"></span>
              </div>
              <div className="counter__item counter__anim">
                <h2 className="counter__number">98</h2>
                <p>
                  Awards <br />
                  achievement
                </p>
                <span className="counter__border"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
