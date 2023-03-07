import React from 'react';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

const Story = () => {
  return (
    <section className='story__area'>
      <div className='container g-0 line pt-140'>
        <span className='line-3'></span>
        <div className='sec-title-wrapper'>
          <div className='from-text'>
            from <span>1990</span>
          </div>

          <div className='row'>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <h2 className='sec-sub-title title-anim'>Digital Studio</h2>
              <SectionTitle>
              Our story
              </SectionTitle>
              {/* <h3 className='sec-title title-anim'>Our story</h3> */}
            </div>
            <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
              <div className='story__text'>
                <p>
                  Your brand is the most important asset in your company let our team of
                  professionals help you with a good strategy took the runway next with an edgy
                  collection featuring dyed denim pieces. The collection included patchwork denim, a
                  trend that has recently exploded in younger generations. Playing on aspects of
                  sustainability, the pieces appeared to be upcycled to establish dimension and
                  flair. This take on grunge and streetwear took sustainable fashion to an entirely
                  new level.
                </p>
                <p>
                  ur specialized team of researchers, strategists, designers, developers, and
                  project managers work with streamlined processes to break through organizational
                  roadblocks. We translate research into solutions, crafting thoughtful and unified
                  brands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
            <div className='story__img-wrapper'>
            <Image style={{height:'auto'}} width={300} height={450} raw={true} src='/imgs/story/1.jpg' alt='Story Thumbnail' className='w-100' />
              {/* <img src='/imgs/story/1.jpg' alt='Story Thumbnail' className='w-100' /> */}
            </div>
          </div>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
            <div className='story__img-wrapper img-anim'>
            <Image  width={520} height={700} raw={true} src='/imgs/story/2.jpg' alt='Story Thumbnail' className='w-100' />

            </div>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <div className='story__img-wrapper'>
            <Image style={{height:'auto'}} width={230} height={140} raw={true} src='/imgs/story/3.jpg' alt='Story Thumbnail'  />
              {/* <img src='/imgs/story/3.jpg' alt='Story Thumbnail' /> */}
              <Image style={{height:'auto'}} width={410} height={330} raw={true} src='/imgs/story/4.jpg' alt='Story Thumbnail'  />
              {/* <img src='/imgs/story/4.jpg' alt='Story Thumbnail' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
