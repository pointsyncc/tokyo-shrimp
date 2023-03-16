import LocaleSwitcher from '@/components/common/localeSwitcher/LocaleSwitcher';
import { logoURL } from '@/utils/assetsURL';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  const { t } = useTranslation();

  const countdown = [
    {
      number: 20,
      text: 'Days',
    },
    {
      number: 10,
      text: 'Hours',
    },
    {
      number: 30,
      text: 'Minutes',
    },
    {
      number: 17,
      text: 'Seconds',
    },
  ];

  return (
    <div className='bg__coming__soon'>
      <main className='main__container'>
        {/* HEADER */}
        <div className='header__container'>
          <h1 className='heading__coming__soon'>Enter the digital world</h1>
          <Image src={logoURL} width='260' height={30} alt='Pointsyncc' />
        </div>

        {/* APPLY TO GET NEWS */}
        <div className='apply__news__container'>
          <p className='text__apply__news'>
            Enter your e-mail address to get notified when we launch our website so you can explore
            our products and services.
          </p>
          <div className='input__wrapper'>
            <input type='text' placeholder='Enter your email' className='input__email' />
            <button className='btn__apply__news'>{t('Apply')}</button>
          </div>
        </div>

        {/* FOOTER */}
        <div className='footer__container'>
          <div className='lang__switcher'>
            <p>EN</p>
            {/* <LocaleSwitcher/> */}
          </div>
          <div className='countdown__cotainer' style={{display: 'flex', justifyContent: 'space-between'}}>
            {countdown.map((item, index) => (
              <div key={index} className='countdown__item'>
                <p className='countdown__number'>{item.number}</p>
                <p className='countdown__text'>{item.text}</p>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
