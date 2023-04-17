import GoogleRecaptchaText from '@/components/common/googleRecaptchaText/GoogleRecaptchaText';
import { Link } from '@/components/ui/link/Link';
import { Logo } from '@/components/ui/logo/Logo';
import { pointSynccAPI } from '@/utils/axios';
import { EMAIL_PATTERN } from '@/utils/constants';
import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
} from '@/utils/contants';
import { ErrorMessage } from '@hookform/error-message';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next-translate-routes';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaTwitter } from 'react-icons/fa';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='theme__switch__wrapper'>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
};

const Footer = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { t } = useTranslation(['common', 'footer'], { bindI18n: 'languageChanged loaded' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const currentLocale = router.locale;

  const sendForm = async (data: any) => {
    await pointSynccAPI.sendRequest({
      method: 'post',
      url: '/user/newsletter',
      body: data,
      options: {
        headers: {
          locale: currentLocale,
        },
      },
    });
  };

  const onSubmit = async (data: any) => {
    toast.promise(sendForm(data), {
      loading: `${t('toasts.newsletter-subscribe.loading')}`,
      success: `${t('toasts.newsletter-subscribe.success')}`,
      error: (err) => {
        return `${t('toasts.newsletter-subscribe.error')}`;
      },
    });
  };

  useEffect(() => {
    //use gsap to create parallax effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
        pin: false,
      },
    });

    tl.from(imageRef.current, {
      scaleY: 1.6,
      transformOrigin: '50% 50%',
      yPercent: -30,
      ease: 'none',
    }).to(imageRef.current, {
      transformOrigin: '50% 50%',
      scaleY: 1.6,
      yPercent: 30,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className='footer__area'>
      <div className='footer__top'>
        <div className='container footer-line'></div>
        {/* <Parallax  speed={-20}>
        <Image
          width={1160}
          height={662}
          raw={true}
      
          src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Ffooter-coworking-1.jpeg'
          alt='Footer Image'
      
        />
        </Parallax> */}
      </div>

      <div className='footer__btm position-relative'>
        <div className='container'>
          <div className='row footer__row'>
            <div className='col-xxl-12'>
              <div className='footer__inner'>
                <div className='footer__widget'>
                  <Logo className='footer__logo' type='secondary' width={220} />
                  <p>{t('subtitle', { ns: 'footer' })}</p>
                  <ul className='footer__social'>
                    <li>
                      <a href='#'>
                        <span>
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span>
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span>
                          <FaInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span>
                          <FaLinkedinIn />
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* <ThemeSwitch /> */}
                </div>

                <div className='footer__widget-2'>
                  <h2 className='footer__widget-title'>
                    {t('list.information.title', { ns: 'footer' })}
                  </h2>
                  <ul className='footer__link'>
                    <li>
                      <Link href='/about'>
                        {t('list.information.items.about-us', { ns: 'footer' })}
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
                        {t('list.information.items.services', { ns: 'footer' })}
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
                        {t('list.information.items.configuration', { ns: 'footer' })}
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog'>{t('list.information.items.blog', { ns: 'footer' })}</Link>
                    </li>
                    <li>
                      <Link href='/contact'>
                        {t('list.information.items.contact-us', { ns: 'footer' })}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='footer__widget-3'>
                  <h2 className='footer__widget-title'>{t('contact.title', { ns: 'footer' })}</h2>
                  <ul className='footer__contact'>
                    <li>
                      <a href={'https://goo.gl/maps/fRA3HnsYcRCNwjd28'} target='_blank'>
                        {COMPANY_ADDRESS}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${COMPANY_CONTACT_PHONE_NUMBER}`}>
                        {COMPANY_CONTACT_PHONE_NUMBER}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${COMPANY_CONTACT_EMAIL}`}>{COMPANY_CONTACT_EMAIL}</a>
                    </li>
                  </ul>
                </div>

                <div className='footer__widget-4'>
                  <h2 className='project-title'>{t('sidebar.title', { ns: 'footer' })}</h2>
                  <div className='btn_wrapper'>
                    <Link href='/contact' className='wc-btn-primary btn-hover btn-item'>
                      <span></span> {t('sidebar.call-to-action', { ns: 'footer' })}{' '}
                      <i className='fa-solid fa-arrow-right'></i>
                    </Link>
                  </div>
                  <h3 className='contact-time'>09 : 00 - 17 : 00 h</h3>
                  <h4 className='contact-day'>
                    {t('global.days-in-week.monday')} - {t('global.days-in-week.friday')}
                  </h4>
                </div>

                <div className='footer__copyright'>
                  <p>
                    © 2023 | {t('copyright.text', { ns: 'footer' })} |{' '}
                    <Link
                      href='https://www.fininfo.hr/Home/SearchCompaniesFree?CompanyName=POINTSYNCC&RadarList=False&UserId=0'
                      target='_blank'
                      rel='noreferrer'
                    >
                      POINTSYNCC d.o.o
                    </Link>
                  </p>
                </div>

                <div className='footer__subscribe'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-2'>
                      <input
                        type='email'
                        placeholder={`${t('forms.newsletter.placeholder', { ns: 'footer' })}`}
                        {...register('email', {
                          required: `${t('forms.newsletter.required', { ns: 'common' })}`,
                          pattern: {
                            value: EMAIL_PATTERN,
                            message: `${t('forms.newsletter.pattern.invalid-message', {
                              ns: 'common',
                            })}`,
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='email'
                        render={({ message }) => <p className='form__error__message'>{message}</p>}
                      />
                    </div>
                    <GoogleRecaptchaText />
                    <button type='submit' className='subs-btn'>
                      <FaPaperPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
