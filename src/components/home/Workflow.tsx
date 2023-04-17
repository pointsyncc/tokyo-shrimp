import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'next-i18next';
import { FadeInStagger } from '../common/animations/FadeInStagger';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function Workflow() {
  const { t } = useTranslation(['homepage', 'common']);

  const workflow = [
    {
      title: t('workflow.step-1.vision.title', {ns: 'homepage'}),
      text: t('workflow.step-1.vision.description', {ns: 'homepage'}),
    },
    {
      title: t('workflow.step-2.plan.title', {ns: 'homepage'}),
      text: t('workflow.step-2.plan.description', {ns: 'homepage'}),
    },
    {
      title: t('workflow.step-2.development.title', {ns: 'homepage'}),
      text: t('workflow.step-2.development.description', {ns: 'homepage'}),
    },
    {
      title: t('workflow.step-2.implementation.title', {ns: 'homepage'}),
      text: t('workflow.step-2.implementation.description', {ns: 'homepage'}),
    }
  ];


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
                    <h4 className='workflow__step'>{t('dictionary.step', {ns: 'common'})} 0{i + 1}</h4>
                    <h5 className='workflow__number'>0{i + 1}</h5>
                    <h6 className='workflow__title'>{item.title}</h6>
                    <p>{item.text}</p>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </section>
    </FadeInStagger>
  );
}
