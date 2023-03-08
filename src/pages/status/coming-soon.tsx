import LocaleSwitcher from '@/components/common/localeSwitcher/LocaleSwitcher';
import { IDropdownItem } from '@/components/ui/dropdown/Dropdown';
import { useAppStore } from '@/stores/store';
import { logoURL } from '@/utils/assetsURL';
import { pointSynccAPI } from '@/utils/axios';
import { EMAIL_PATTERN } from '@/utils/constants';
import { ErrorMessage } from '@hookform/error-message';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Countdown from 'react-countdown';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const router = useRouter();

  const localeDropdownItems = [
    {
      text: 'EN',
      textValue: 'en',
      selected: true,
    },
    {
      text: 'HR',
      textValue: 'hr',
      selected: false,
    },
  ];

  const [selectedItem, setSelectedItem] = React.useState<IDropdownItem>(localeDropdownItems[0]);

  const onLocaleChange = (item: IDropdownItem) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: item.textValue });
    setSelectedItem(item);
  };

  const styleLangEN = {
    color: '#ffffff',
    fontSize: '2.5rem',
    margin: 0,
  };

  const styleLangHR = {
    color: '#cccccc',
    fontSize: '1.2rem',
    margin: 0,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {localeDropdownItems.map((item) => (
        <button
          style={item.selected ? styleLangEN : styleLangHR}
          onClick={() => onLocaleChange(item)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

// Random component
const CountdownCompleted = () => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 500,
    cursor: 'pointer',
  };

  return (
    <div style={style}>
      <Link href='/'>Start the new digital chapter of your business</Link>
      <AiOutlineArrowRight />
    </div>
  );
};

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: CountdownProps) => {
  if (completed) {
    // Render a completed state
    return <CountdownCompleted />;
  } else {
    // Render a countdown
    const columnStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    };

    const numberStyle = { color: '#ffffff', fontSize: '2rem' };
    const textStyle = { color: '#ffffff', fontSize: '1rem', fontWeight: 300 };

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffffff',
          gap: '1rem',
        }}
      >
        <div style={columnStyle}>
          <p style={numberStyle}>{days}</p>
          <p style={textStyle}>Days</p>
        </div>
        <div style={columnStyle}>
          <p style={numberStyle}>{hours}</p>
          <p style={textStyle}>Hours</p>
        </div>
        <div style={columnStyle}>
          <p style={numberStyle}>{minutes}</p>
          <p style={textStyle}>Minutes</p>
        </div>
        <div style={columnStyle}>
          <p style={numberStyle}>{seconds}</p>
          <p style={textStyle}>Seconds</p>
        </div>
      </div>
    );
  }
};

export default function ComingSoon() {
  const { t } = useTranslation();

  //set date to 15.4.2023
  const launchDate = Date.UTC(2023, 4, 15);
  const placeholder = t('pages.status.coming-soon.newsletter.placeholder');

  const btnStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '8px',
    //hover
    cursor: 'pointer',
  };

  //SENDING FORM DATA
  const { setLoading, loadingStates } = useAppStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      error: (err) => `This just happened: ${err.toString()}`,
    });
  };

  return (
    <div className='bg__coming__soon'>
      <main className='main__container'>
        {/* HEADER */}
        <div className='header__container'>
          <h1 className='heading__coming__soon'>{t('pages.status.coming-soon.title')}</h1>
          {/* <Image src={logoURL} width='260' height={30} alt='Pointsyncc' /> */}
        </div>

        {/* APPLY TO GET NEWS */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='apply__news__container'>
            <p className='text__apply__news'>{t('pages.status.coming-soon.newsletter.subtitle')}</p>
            <div className='input__wrapper'>
              <input
              required
                type='text'
                placeholder={placeholder}
                className='input__email'
                {...register('email')}
              />
              <button type='submit' style={btnStyle}>
                {t('pages.status.coming-soon.newsletter.button')}
              </button>
            </div>
          </div>
        </form>

        {/* FOOTER */}
        <div className='footer__container'>
          <LanguageSwitcher />
          <Countdown date={Date.now() + 5000000000} renderer={renderer} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en', 'hr'])),
    },
  };
}
