import React from 'react';

import CountUp from 'react-countup';

export default function Counter() {
  return (
    <section className='counter__area'>
      <div className='container g-0 line pt-150'>
        <span className='line-3'></span>

        <div className='row'>
          <div className='col-xxl-12'>
            <div className='counter__wrapper counter_animation'>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={25} duration={3} suffix='k+' />
                </h2>
                <p>
                  Project <br />
                  completed
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={8} duration={1} suffix='k+' />
                </h2>
                <p>
                  Happy <br />
                  customers
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={15} duration={2} />
                </h2>
                <p>
                  Years <br />
                  experiences
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={98} duration={4} />
                </h2>
                <p>
                  Awards <br />
                  achievement
                </p>
                <span className='counter__border'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
