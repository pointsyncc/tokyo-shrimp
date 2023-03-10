import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Blog() {
  //use gsap and ref to create parallax effect on blog image on scroll

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    //use gsap to create parallax effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
        pin: false,
      },
    });

    tl.from(imageRef.current, {
      scaleY: 1.6,
      transformOrigin: '50% 50%',
      yPercent: -30,
      ease: 'none',
    }).to(imageRef.current, {
      transformOrigin: '50% 50%',
      scaleY: 1.6,
      yPercent: 30,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className='blog__area no-pb blog__animation'>
      <div className='container g-0 line pt-150 pb-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title'>recent blog</h2>
              <h3 className='sec-title'>News insignt</h3>
            </div>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <article className='blog__item'>
              <div className='blog__img-wrapper'>
                <a href='blog-details.html'>
                  <div className='img-box'>
                    <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
                    <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
                  </div>
                </a>
              </div>
              <h4 className='blog__meta'>
                <a href='category.html'>UI Design</a> . 02 May 2019
              </h4>
              <h5>
                <a href='blog-details.html' className='blog__title'>
                  Ways of lying to yourself about your new relationship.
                </a>
              </h5>
              <a href='blog-details.html' className='blog__btn'>
                Read More{' '}
                <span>
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
              </a>
            </article>
          </div>

          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <article className='blog__item'>
              <div className='blog__img-wrapper'>
                <a href='blog-details.html'>
                  <div className='img-box'>
                    <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
                    <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
                  </div>
                </a>
              </div>
              <h4 className='blog__meta'>
                <a href='category.html'>UI Design</a> . 02 May 2019
              </h4>
              <h5>
                <a href='blog-details.html' className='blog__title'>
                  How to manage a talented and successful de sign team
                </a>
              </h5>
              <a href='blog-details.html' className='blog__btn'>
                Read More{' '}
                <span>
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
              </a>
            </article>
          </div>

          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <article className='blog__item'>
              <div className='blog__img-wrapper'>
                <a href='blog-details.html'>
                  <div className='img-box'>
                    <img
                      className='image-box__item'
                      src='imgs/pointsyncc/footer.jpg'
                      alt='Blog Thumbnail'
                    />
                    <img
                      className='image-box__item'
                      src='imgs/pointsyncc/footer.jpg'
                      alt='BLog Thumbnail'
                    />
                  </div>
                </a>
              </div>
              <h4 className='blog__meta'>
                <a href='category.html'>UI Design</a> . 02 May 2019
              </h4>
              <h5>
                <a href='blog-details.html' className='blog__title'>
                  How to bring fold to your startup company with Axtra
                </a>
              </h5>
              <a href='blog-details.html' className='blog__btn'>
                Read More{' '}
                <span>
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
