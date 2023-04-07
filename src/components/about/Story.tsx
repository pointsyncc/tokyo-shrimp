import React from 'react';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

const Story = () => {

  const {t} = useTranslation('about')

  return (
    <section className='story__area'>
      <div className='container g-0 line pt-140'>
        <span className='line-3'></span>
        <div className='sec-title-wrapper'>
          {/* <div className='from-text'>
            from <span>1990</span>
          </div> */}

          <div className='row'>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 mt-5 mt-sm-0'>
              <h2 className='sec-sub-title title-anim'>Digital Studio</h2>
              <SectionTitle>{t('page.section.story.title')}</SectionTitle>

            </div>
            <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
              <div className='story__text'>
                <p>
                {t('page.section.story.text')}
                </p>
                {/* <p>
                {t('page.section.story.text2')}
                </p> */}
                <p>
                {t('page.section.story.text3')}
                </p>
                {/* <p>
                  ur specialized team of researchers, strategists, designers, developers, and
                  project managers work with streamlined processes to break through organizational
                  roadblocks. We translate research into solutions, crafting thoughtful and unified
                  brands.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
            <div className='story__img-wrapper'>
              <Image
                style={{ height: 'auto' }}
                width={300}
                height={450}
                raw={true}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fabout-us%2Fbag-flower-300x450-01.png'
                alt='Story Thumbnail'
                className='w-100'
              />
              {/* <img src='/imgs/story/1.jpg' alt='Story Thumbnail' className='w-100' /> */}
            </div>
          </div>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
            <div className='story__img-wrapper img-anim'>
              <Image
                width={520}
                height={700}
                raw={true}
                style={{height:'auto'}}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fabout-us%2Ft-shirt-women-520x700-03.png'
                alt='Story Thumbnail'
                className='w-100'
              />
            </div>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <div className='story__img-wrapper'>
              <Image
                style={{ height: 'auto' }}
                width={230}
                height={140}
                raw={true}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fabout-us%2Fblanket-230x140-01.png'
                alt='Story Thumbnail'
              />
              {/* <img src='/imgs/story/3.jpg' alt='Story Thumbnail' /> */}
              <Image
                style={{ height: 'auto' }}
                width={410}
                height={330}
                raw={true}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fabout-us%2Ft-shirt-display-410x330.png'
                alt='Story Thumbnail'
              />
              {/* <img src='/imgs/story/4.jpg' alt='Story Thumbnail' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
