import React from 'react';
import { Link } from '../ui/link/Link';

export default function Portifolio() {
  return (
    <section className='portfolio__area pb-140'>
      <div className='container'>
        <div className='row top_row'>
          <h2 className='portfolio__text'>work</h2>
          <div className='portfolio__list-1'>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img className='mover' src='imgs/portfolio/1/1.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/2.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/3.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/4.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/1.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/2.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row row_bottom'>
          <div className='col-xxl-12'>
            <div className='portfolio__btn btn_wrapper'>
              <Link
                href='/portfolio'
                className='wc-btn-secondary btn-hover btn-item'
                applyLinkStyles={false}
              >
                <span></span>View <br />
                all projects <i className='fa-solid fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
