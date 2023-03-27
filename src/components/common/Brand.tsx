import { Trans, useTranslation } from 'next-i18next';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function Brand() {
  const { t } = useTranslation(['homepage']);

  return (
    <section className='brand__area'>
      <div className='container g-0 line pt-140 pb-130'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title title-anim'>{t('brands.subtitle')}</h2>
              <SectionTitle>
                <Trans i18nKey='brands.title' t={t}>
                We are happy to work with global <br />
                largest brands
                </Trans>
              </SectionTitle>
            </div>
          </div>

          <div className='col-xxl-12'>
            <div className='brand__list'>
              {[1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 1, 2].map((item, i) => {
                return (
                  <div key={i} className='brand__item fade_bottom'>
                    <Image
                      raw={true}
                      style={{ position: 'relative', height: 'auto', width: 'auto' }}
                      width={100}
                      height={100}
                      src={`/imgs/brand/${item}.png`}
                      alt='Brand Logo'
                    />
                  </div>
                );
              })}
              {/* <div className='brand__item fade_bottom'>
                <img src='imgs/brand/1.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/2.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/3.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/4.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/5.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/6.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/3.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/4.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/5.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/6.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/1.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='imgs/brand/2.png' alt='Brand Logo' />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
