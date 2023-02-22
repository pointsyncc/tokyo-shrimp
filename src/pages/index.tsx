import Head from 'next/head';
import About from '@/components/home/About';
import Brand from '@/components/home/Brand';
import Counter from '@/components/home/Counter';
import { Hero } from '@/components/home/Hero';
import Portifolio from '@/components/home/Portifolio';
import { Roll } from '@/components/home/Roll';
import Service from '@/components/home/Service';
import Workflow from '@/components/home/Workflow';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { NextPageWithLayout } from './_app';
import Blog from '@/components/home/Blog';
import Testimonial from '@/components/home/Testimonial';
import CTA from '@/components/home/CTA';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/forms/controls/Input/Input';
import { EMAIL_PATTERN } from '@/components/constants/constants';
import { CheckInput } from '@/components/forms/controls/checkInputGroup/CheckInputGroup';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SelectInput } from '@/components/forms/controls/selectInput/SelectInput';

// Create reusable animations with gsap, create in _app with classes (same as for title)

gsap.registerPlugin(ScrollTrigger);

type IFields = {
  email: string;
  password: string;
  message: string;
  gender: string;
  city: string;
};
const Home: NextPageWithLayout = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    message: yup.string().required(),
    gender: yup.string().required(),
    city: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'shumaslaghari@gmail.com',
      city: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const comp = useRef(null);
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.set('.title-anim', { y: 50, opacity: 0 });
      let splitTitleLines = gsap.utils.toArray('.title-anim');
      splitTitleLines.forEach((item: any) => {
        let counterTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,

            start: 'top center+=200',
          },
        });
        counterTl.to(item, {
          y: 0,
          opacity: 1,

          duration: 1.5,
        });
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={comp}>
      <Head>
        <title>Pointsyncc - Home</title>
        <meta name='description' content='Home' />
      </Head>
      {/* <Hero />
      <Roll />
      <About />
      <Service />
      <Counter />
      <Workflow />
      <Portifolio />
      <Brand />
      <Testimonial />
      <Blog />
      <CTA /> */}

      <form className='contact__form-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='row g-3'>
          <div className='col-xxl-6 col-xl-6 col-12'>
            <Input
              errors={errors}
              label='Email'
              labelProps={{ required: true }}
              register={register}
              name='email'
              placeholder='Enter your email'
            />
            <Input
              errors={errors}
              type='password'
              name='password'
              label='password'
              register={register}
              labelProps={{ required: true }}
              placeholder='Enter your password'
            />
            <Input
              errors={errors}
              rows={5}
              as='textarea'
              name='message'
              label='message'
              register={register}
              labelProps={{ required: true }}
              placeholder='Enter your message'
            />
            <CheckInput
              label='Gender'
              labelProps={{ required: true }}
              checks={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
              errors={errors}
              register={register}
              name='gender'
            />
            <SelectInput
              label='City'
              labelProps={{ required: true }}
              errors={errors}
              name='city'
              options={[
                { label: 'Select a city', value: '' },
                { label: 'Hyderabad', value: 'hyderabad' },
                { label: 'Karachi', value: 'karachi' },
              ]}
              register={register}
            />

            {/* <Input
              errors={errors}
              className='form-check-input'
              type='radio'
              name='gender'
              label='Male'
              value='male'
              register={register}
              labelProps={{ required: true }}
              rules={{
                required: 'Gender is required',
              }}
            /> */}

            {/* <Input
              errors={errors}
              className='form-check-input'
              type='radio'
              name="gender"
              register={register}
              label='Female'
              value='female'
              labelProps={{ required: true }}
              rules={{
                required: 'Gender is required',
              }}
            /> */}
          </div>
        </div>
        <div className='btn_wrapper'>
          <button className='wc-btn-primary btn-hover btn-item'>
            <span></span> Send <br />
            Messages <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Home;
