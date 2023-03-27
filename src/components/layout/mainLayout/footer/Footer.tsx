import GoogleRecaptchaText from '@/components/common/googleRecaptchaText/GoogleRecaptchaText';
import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';
import { Logo } from '@/components/ui/logo/Logo';
import { useAppStore } from '@/stores/store';
import { pointSynccAPI } from '@/utils/axios';
import { EMAIL_PATTERN } from '@/utils/constants';
import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
} from '@/utils/contants';
import { ErrorMessage } from '@hookform/error-message';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'next-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import {Parallax} from 'react-scroll-parallax'
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
  const currentYear = new Date().getFullYear();

  const imageRef = useRef<HTMLImageElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setLoading, loadingStates } = useAppStore();

  const sendForm = async (data: any) => {
    await pointSynccAPI.sendRequest({
      method: 'post',
      url: '/user/newsletter',
      body: data,
    });
  };

  const onSubmit = async (data: any) => {
    // try {
    //   setLoading('newsletterForm', true);
    //   toast.loading('Sending your request...', {
    //     duration: 2000,
    //   });
    //   await pointSynccAPI.sendRequest({
    //     method: 'post',
    //     url: '/user/newsletter',
    //     body: data,
    //   });
    //   toast.success('You are now subscribed to our newsletter!');
    // } catch (error) {
    //   console.log(error);
    //   toast.error('Something went wrong 🫠. Please try again later.');
    // } finally {
    //   setLoading('newsletterForm', false);
    // }
    toast.promise(sendForm(data), {
      loading: 'Sending your request...',
      success: 'You are now subscribed to our newsletter!',
      error: (err) => {
        return err.message
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

  const { t, i18n } = useTranslation(['common', 'footer'], { bindI18n: 'languageChanged loaded' });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  // useEffect(() => {
  //   i18n.reloadResources(i18n.resolvedLanguage, ['common', 'footer']);
  // }, []);

  return (
    <footer className='footer__area'>
      <div className='footer__top'>
        <div className='container footer-line'></div>
        <Parallax speed={-40}>
        <Image
          width={1160}
          height={662}
          raw={true}
          style={{ height: 'auto !important' }}
          src='/imgs/thumb/footer.jpg'
          alt='Footer Image'
          data-speed='0.75'
        />
        </Parallax>

      </div>

      <div className='footer__btm'>
        <div className='container'>
          <div className='row footer__row'>
            <div className='col-xxl-12'>
              <div className='footer__inner'>
                <div className='footer__widget'>
                  <Logo className='footer__logo' type='secondary' width={220} />
                  {/* <img
                    className='footer__logo'
                    width={220}
                    src='/imgs/pointsyncc/logo/desktop/transparent.png'
                    alt='Footer Logo'
                  /> */}
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
                  <ThemeSwitch />
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
                    <li>{COMPANY_ADDRESS}</li>
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
                  <h3 className='contact-time'>09 : 00 AM - 17 : 00 PM</h3>
                  <h4 className='contact-day'>
                    {t('global.days-in-week.monday')} - {t('global.days-in-week.friday')}
                  </h4>
                </div>

                <div className='footer__copyright'>
                  <p>
                    © 2023 | {t('copyright.text', { ns: 'footer' })} |{' '}
                    <a href='https://wealcoder.com/' target='_blank' rel='noreferrer'>
                      POINTSYNCC d.o.o
                    </a>
                  </p>
                </div>

                <div className='footer__subscribe'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-2'>
                      <input
                        type='email'
                        placeholder={`${t('forms.newsletter.placeholder', { ns: 'footer' })}`}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: EMAIL_PATTERN,
                            message: 'Invalid email address',
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
