import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      title: 'UI Design',
      excerpt: 'Ways of lying to yourself about your new relationship.',
    },
    {
      id: 2,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      title: 'UI Design',
      excerpt: 'How to manage a talented and successful de sign team.',
    },
    {
      id: 3,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      title: 'UI Design',
      excerpt: 'How to bring fold to your startup company with Axtra.',
    },
  ];
  const comp = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let device_width = window.innerWidth;
    const ctx = gsap.context(() => {
      gsap.set('.blog__animation .blog__item', { x: 50, opacity: 0 });

      if (device_width < 1023) {
        const blogList = gsap.utils.toArray('.blog__animation .blog__item');
        blogList.forEach((item, i) => {
          let blogTl = gsap.timeline({
            scrollTrigger: {
              trigger: item as any,
              start: 'top center+=200',
            },
          });
          blogTl.to(item as any, {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            duration: 1.5,
          });
        });
      } else {
        gsap.to('.blog__animation .blog__item', {
          scrollTrigger: {
            trigger: '.blog__animation .blog__item',
            start: 'top center+=300',
            markers: false,
          },
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 2,
          stagger: {
            each: 0.3,
          },
        });
      }
    }, comp);
    return () => ctx.revert();
  }, []);

  const {t} = useTranslation('homepage')

  return (
    <section ref={comp} className='blog__area no-pb blog__animation'>
      <div className='container g-0 line pt-150 pb-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title'>  {t('blog.subtitle', {ns: 'homepage' })}</h2>
              <SectionTitle>{t('blog.title', {ns: 'homepage'})}</SectionTitle>
            </div>
          </div>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                <article className='blog__item'>
                  <div className='blog__img-wrapper'>
                    <a href='blog-details.html'>
                      <div className='img-box'>
                        <Image

                          raw={true}
                          width={777}
                          height={425}
                          className='image-box__item'
                          src={blog.imgSrc}
                          alt=''
                        />
                        <Image
                          width={777}
                          height={425}
       
                          raw={true}
                          className='image-box__item'
                          src={blog.imgSrc}
                          alt=''
                        />
                        {/* <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
                        <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' /> */}
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
                      <FaArrowRight />
                    </span>
                  </a>
                </article>
              </div>
            );
          })}
          {/* <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
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
                  <FaArrowRight />
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
