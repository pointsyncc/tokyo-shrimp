import { BlogItem } from '@/components/common/blogItem/BlogItem';
import { useSlideInSection } from '@/hooks/useSlideInSection';
import React from 'react';

const RelatedBlog = () => {
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
      title: 'How to manage a talented and successful de sign team.',
      date: '02 May 2019',
    },
    {
      id: 3,
      imgSrc: '/imgs/pointsyncc/footer.jpg',
      category: 'UI Design',
      title: 'How to bring fold to your startup company with Axtra.',
      date: '02 May 2019',
    },
  ];
  return (
    <section ref={comp} className='blog__related blog__animation'>
      <div className='container g-0 line pt-130 pb-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-title title-anim'>Related Aricles</h2>
            </div>
          </div>
        </div>

        <div className='row reset-grid'>
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
};

export default RelatedBlog;
