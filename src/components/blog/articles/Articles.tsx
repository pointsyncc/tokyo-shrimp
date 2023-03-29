import { BlogItem } from '@/components/common/blogItem/BlogItem';
import { useSlideInSection } from '@/hooks/useSlideInSection';
import React from 'react';

export const Articles = () => {
    const {comp} = useSlideInSection('.blog__animation .blog__item')
  const blogs = [
    {
      id: 1,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
    {
      id: 2,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
    {
      id: 3,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
    {
      id: 4,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
    {
      id: 5,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
    {
      id: 6,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'Ways of lying to yourself about your new relationship.',
      date: '02 May 2019',
    },
  ];
  return (
    <section className='blog__area-6 blog__animation' ref={comp}>
      <div className='container g-0 line pt-110 pb-110'>
        <span className='line-3'></span>
        <div className='row pb-130'>
          <div className='col-xxl-8 col-xl-7 col-lg-6 col-md-6'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-title-2 animation__char_come'>
                We always <br />
                think
              </h2>
            </div>
          </div>
          <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-6'>
            <div className='blog__text'>
              <p>
                Crafting new bright brands, unique visual systems and digital experience focused on
                a wide range of original collabs.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className='row reset-grid'>
          {blogs.map((blog) => (
            <div key={blog.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
              <BlogItem {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
