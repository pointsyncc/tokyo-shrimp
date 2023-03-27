import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'next-i18next';
import { FadeInStagger } from '../common/animations/FadeInStagger';
import SectionTitle from '../ui/sectionTitle/SectionTitle';


export default function Workflow() {
  const workflow = [
    {
      title: 'Audience',
      text: 'Having these the marketplace to your business',
    },
    {
      title: 'Plan & Sketch',
      text: 'Delicate and long-lasting with vitamins and nutritions',
    },
    {
      title: 'Customize',
      text: 'Creating brand identities for the digital experiences',
    },
    {
      title: 'User Testing',
      text: 'We look forward to engage with beyond the conventional',
    },
    {
      title: 'Customize',
      text: 'Creating brand identities for the digital experiences',
    },
    {
      title: 'Plan & Sketch',
      text: 'Delicate and long-lasting with vitamins and nutritions',
    },
  ];

  const {t} = useTranslation(['homepage']);

  return (
    <FadeInStagger>
      <section className='workflow__area'>
        <div className='container g-0 line pt-140 pb-140'>
          <div className='line-3'></div>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='sec-title-wrapper'>
                <h2 className='sec-sub-title title-anim'>{t('workflow.subtitle')}</h2>

                <SectionTitle>{t('workflow.title')}</SectionTitle>
              </div>
            </div>

            <div className='col-xxl-12'>
              <Splide
                options={{
                  gap: 0,
                  trimSpace: true,
                  // type: 'loop',
                  drag: 'free',

                  speed: 2000,
                  pagination: false,
                  arrows: false,
                  mediaQuery: 'min',
                  breakpoints: {
                    640: {
                      perPage: 2,
                    },
                    768: {
                      perPage: 2,
                    },
                    1024: {
                      perPage: 3,
                    },
                    1200: {
                      perPage: 4,
                    },
                  },
                }}
              >
                {workflow.map((item, i) => (
                  <SplideSlide className='workflow__slide fade_left item' key={i}>
                    <h4 className='workflow__step'>step 0{i + 1}</h4>
                    <h5 className='workflow__number'>0{i + 1}</h5>
                    <h6 className='workflow__title'>{item.title}</h6>
                    <p>{item.text}</p>
                  </SplideSlide>
                ))}
              </Splide>
              {/* <div className='swiper workflow__slider'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 01</h4>
                    <h5 className='workflow__number'>01</h5>
                    <h6 className='workflow__title'>Audience</h6>
                    <p>Having these the marketplace to your business</p>
                  </div>

                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 02</h4>
                    <h5 className='workflow__number'>02</h5>
                    <h6 className='workflow__title'>Plan & Sketch</h6>
                    <p>Delicate and long-lasting with vitamins and nutritions</p>
                  </div>

                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 03</h4>
                    <h5 className='workflow__number'>03</h5>
                    <h6 className='workflow__title'>Customize</h6>
                    <p>Creating brand identities for the digital experiences</p>
                  </div>

                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 04</h4>
                    <h5 className='workflow__number'>04</h5>
                    <h6 className='workflow__title'>User Testing</h6>
                    <p>We look forward to engage with beyond the conventional</p>
                  </div>

                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 05</h4>
                    <h5 className='workflow__number'>05</h5>
                    <h6 className='workflow__title'>User Testing</h6>
                    <p>We look forward to engage with beyond the conventional</p>
                  </div>

                  <div className='swiper-slide workflow__slide fade_left'>
                    <h4 className='workflow__step'>step 06</h4>
                    <h5 className='workflow__number'>06</h5>
                    <h6 className='workflow__title'>User Testing</h6>
                    <p>We look forward to engage with beyond the conventional</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </FadeInStagger>
  );
}
