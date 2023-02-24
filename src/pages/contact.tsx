import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Head from 'next/head';
import { FieldValues } from 'react-hook-form';
import { NextPageWithLayout } from './_app';
import { Control, FormControl } from '@/components/forms/controls/control/Control';
import GeneralForm from '@/components/forms/generalForm/GeneralForm';
import CircleButton from '@/components/ui/button/CircleButton';
import { object, string } from 'yup';

const Contact: NextPageWithLayout = () => {
  const schema = object({
    name: string().max(10).required(),
    email: string().email().required(),
    message: string().max(255).required(),
    subject: string().required(),
  });
  const controls: FormControl<FieldValues>[] = [
    {
      name: 'name',
      placeholder: 'Name *',
      control: Control.TextInput,
    },
    {
      name: 'email',
      placeholder: 'Email *',
      labelProps: { required: true },
      control: Control.TextInput,
    },
    {
      name: 'phone',
      placeholder: 'Phone',
      control: Control.TextInput,
    },
    {
      name: 'subject',
      placeholder: 'Subject *',
      control: Control.TextInput,
    },
    {
      name: 'message',
      placeholder: 'Message *',
      control: Control.TextInput,
      as: 'textarea',
      colProps: {
        className: 'col-12',
      },
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Pointsyncc - Contact</title>
        <meta name='description' content='Contact' />
      </Head>
      <div className='cursor1'></div>
      <div className='cursor2'></div>

      <div className='has-smooth' id='has_smooth'></div>

      <button id='scroll_top' className='scroll-top'>
        <i className='fa-solid fa-arrow-up'></i>
      </button>

      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            <section className='contact__area-6'>
              <div className='container g-0 line pt-120 pb-110'>
                <span className='line-3'></span>
                <div className='row'>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                    <div className='sec-title-wrapper'>
                      <h2 className='sec-title-2 animation__char_come'>Let’s get in touch</h2>
                    </div>
                  </div>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                    <div className='contact__text'>
                      <p>
                        Great! We&apos;re excited to hear from you and let&apos;s start something
                        special togerter. call us for any inquery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row contact__btm'>
                  <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
                    <div className='contact__info'>
                      <h3 className='sub-title-anim-top animation__word_come'>
                        Don&apos;t be afraid man ! <br />
                        say hello
                      </h3>
                      <ul>
                        <li>
                          <a href='tel:+(2)578365379'>+385 99 2144 802</a>
                        </li>
                        <li>
                          <a href='mailto:hello@example.com'>info@pointsyncc.com</a>
                        </li>
                        <li>
                          <span>
                            Ulica Mokrice 12, 10382 Donja Zelina
                            <br /> Croatia
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
                    <div className='contact__form'>
                      <GeneralForm
                        submitBtnText='Send Messages'
                        schema={schema}
                        controls={controls}
                        onSubmit={onSubmit}
                        customSubmitButton={
                          <CircleButton>
                            <span></span> Send <br />
                            Messages <i className='fa-solid fa-arrow-right'></i>
                          </CircleButton>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Contact;
