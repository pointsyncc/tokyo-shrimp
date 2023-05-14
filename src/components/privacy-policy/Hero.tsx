import { useTranslation } from 'next-i18next';
import { SplitCome } from '../common/animations/SplitCome';

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  const { t } = useTranslation('about');

  return (
    <section className='hero__about'>
      <div className='container g-0 line'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='hero__about-content'>
              <SplitCome type='words'>
                <h1 className='hero-title animation__word_come'>{title}</h1>
              </SplitCome>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
