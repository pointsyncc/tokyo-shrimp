import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';

import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';
import { BlogItem } from '../common/blogItem/BlogItem';
import { useSlideInSection } from '@/hooks/useSlideInSection';

export default function Blog() {
  const {comp} = useSlideInSection('.blog__animation .blog__item')
  const blogs = [
    {
      id: 1,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
    {
      id: 2,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
    {
      id: 3,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
    {
      id: 4,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
    {
      id: 5,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
    {
      id: 6,
      slug: 'test',
      image: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      published_at: '02 May 2019',
    },
  ];
  // const comp = useRef(null);
  // useIsomorphicLayoutEffect(() => {
  //   let device_width = window.innerWidth;
  //   const ctx = gsap.context(() => {
  //     gsap.set('.blog__animation .blog__item', { x: 50, opacity: 0 });

  //     if (device_width < 1023) {
  //       const blogList = gsap.utils.toArray('.blog__animation .blog__item');
  //       blogList.forEach((item, i) => {
  //         let blogTl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: item as any,
  //             start: 'top center+=200',
  //           },
  //         });
  //         blogTl.to(item as any, {
  //           x: 0,
  //           opacity: 1,
  //           ease: 'power2.out',
  //           duration: 1.5,
  //         });
  //       });
  //     } else {
  //       gsap.to('.blog__animation .blog__item', {
  //         scrollTrigger: {
  //           trigger: '.blog__animation .blog__item',
  //           start: 'top center+=300',
  //           markers: false,
  //         },
  //         x: 0,
  //         opacity: 1,
  //         ease: 'power2.out',
  //         duration: 2,
  //         stagger: {
  //           each: 0.3,
  //         },
  //       });
  //     }
  //   }, comp);
  //   return () => ctx.revert();
  // }, []);

  const { t } = useTranslation('homepage');

  return (
    <section ref={comp} className='blog__area no-pb blog__animation'>
      <div className='container g-0 line pt-150 pb-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title'> {t('blog.subtitle', { ns: 'homepage' })}</h2>
              <SectionTitle>{t('blog.title', { ns: 'homepage' })}</SectionTitle>
            </div>
          </div>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                <BlogItem {...blog} />
              </div>
            );
          })}
        </div>
      </div> 
    </section>
  );
}
