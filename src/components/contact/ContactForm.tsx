import React from 'react';
import { FieldValues } from 'react-hook-form';
import { object, string } from 'yup';
import { Control, FormControl } from '../forms/controls/control/Control';
import GeneralForm from '../forms/generalForm/GeneralForm';
import CircleButton from '../ui/button/CircleButton';

interface IValues {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone?: string;
}

import { pointSynccAPI } from '@/utils/axios';
import { toast } from 'react-hot-toast';
import { useAppStore } from '@/stores/store';
import { PHONE_REGEX } from '@/utils/contants';
export const ContactForm = () => {
  const { setLoading, loadingStates } = useAppStore();
  const schema = object({
    name: string().max(20).required(),
    email: string().email().required(),
    message: string().max(255).required(),
    subject: string().required(),
    phone: string().matches(PHONE_REGEX, {
      message: 'Invalid Phone Number, valid phone number +[country_code][mobile_number]',
      excludeEmptyString: true,
    }),
  });
  const controls: FormControl<IValues>[] = [
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

  const onSubmit = async (data: any) => {
    // const req = pointSynccAPI.sendRequest({
    //   method: 'post',
    //   url: '/user/contact',
    //   body: data,
    // });
    // toast.promise(req, {
    //   loading: 'Sending your feedback...',
    //   success: 'Your feedback has been submitted',
    //   error: (err) => `This just happened: ${err.toString()}`
    // });
    try {
      setLoading('contactForm', true);
      toast.loading('Sending your feedback...', {
        duration: 2000,
      });
      await pointSynccAPI.sendRequest({
        method: 'post',
        url: '/user/contact',
        body: data,
      });
      toast.success('Your feedback has been submitted');
    } catch (error:any) {
      toast.error(error.errors[0].message);
    } finally {
      setLoading('contactForm', false);
    }
  };
  return (
    <div className='contact__form'>
      <GeneralForm<IValues, any>
        submitBtnText='Send Messages'
        schema={schema}
        controls={controls}
        onSubmit={onSubmit}
        customSubmitButton={
          <CircleButton disabled={loadingStates.contactForm} isLoading={loadingStates.contactForm}>
            <span></span> Send <br />
            Messages <i className='fa-solid fa-arrow-right'></i>
          </CircleButton>
        }
      />
    </div>
  );
};
