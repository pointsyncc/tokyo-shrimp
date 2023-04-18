import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { Link } from 'next-translate-routes';
import { useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from '../ui/image/Image';

export const Hero = () => {
  const { t } = useTranslation()
  const comp = useRef(null);
  const heroHeading = useRef(null);
  const heroText = useRef(null);
  const experience = useRef(null);

  useIsomorphicLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      // or we can use refs
      tl.fromTo(
        heroHeading.current,
        { opacity: 0, x: -100, delay: 1 },
        { opacity: 1, x: 0, duration: 1 },
      );
      tl.fromTo(
        heroText.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1 },
        '<+=.5',
      );
      tl.fromTo(experience.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 1);
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    
    <section className='hero__area' ref={comp}>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='hero__content animation__hero_one'>
              <div className='hero__title-wrapper'>
                <h1 className='hero__title mb-4 mb-md-5' ref={heroHeading}>
                  
                  {t('hero.title', {ns: 'homepage' })}
                </h1>
                <button className='d-flex justify-content-center align-items-center gap-3'>
                  <Link href='/contact' legacyBehavior>
                    <a className='d-flex align-items-center gap-3 fs-base'>
                      {t('hero.call-to-action', {ns: 'homepage' })}
                    <BsFillArrowRightCircleFill className='text-white fs-xl' />
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image raw={true} priority={true} fill={true} src='/imgs/hero/1/1-bg.png' alt='image' className='hero1_bg' />
    </section>
  );
};
