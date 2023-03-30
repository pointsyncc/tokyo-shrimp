import { UseFormReset } from 'react-hook-form';
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

import { useAppStore } from '@/stores/store';
import { pointSynccAPI } from '@/utils/axios';
import { PHONE_REGEX } from '@/utils/contants';
import { Trans, useTranslation } from 'next-i18next';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const { setLoading, loadingStates } = useAppStore();

  const { t } = useTranslation(['common']);

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
      placeholder: `${t('dictionary.name')} *`,
      control: Control.TextInput,
      colProps: {
        className: 'col-12 col-sm-6 mb-3',
      },
    },
    {
      name: 'email',
      placeholder: `${t('dictionary.email', { ns: 'common' })} *`,
      labelProps: { required: true },
      control: Control.TextInput,
      colProps: {
        className: 'col-12 col-sm-6 mb-3',
      },
    },
    {
      name: 'phone',
      placeholder: `${t('dictionary.phone', { ns: 'common' })}`,
      control: Control.TextInput,
      colProps: {
        className: 'col-12 col-sm-6 mb-3',
      },
    },
    {
      name: 'subject',
      placeholder: `${t('dictionary.subject', { ns: 'common' })} *`,
      control: Control.TextInput,
      colProps: {
        className: 'col-12 col-sm-6 mb-3',
      },
    },
    {
      name: 'message',
      placeholder: `${t('dictionary.message', { ns: 'common' })} *`,
      control: Control.TextInput,
      as: 'textarea',
      colProps: {
        className: 'col-12 mb-3',
      },
    },
  ];

  const onSubmit = async (
    data: IValues,
    reset: UseFormReset<IValues>,
    recaptchaToken?: string | undefined,
  ) => {
    setLoading('contactForm', true);
    toast.promise(
      pointSynccAPI.sendRequest({
        method: 'post',
        url: '/user/contact',
        body: {
          ...data,
          recaptchaToken,
        },
      }),
      {
        loading: `${t('toasts.contact-us.loading', { ns: 'common' })}`,
        success: () => {
          setLoading('contactForm', false);

          reset();
          return `${t('toasts.contact-us.success', { ns: 'common' })}`
        },
        error: (err) => {
          setLoading('contactForm', false);
          return `This just happened: ${err.toString()}`;
        },
      },
    );
  };

  return (
    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
      <div className='contact__form'>
        <GeneralForm<IValues, any>
          submitBtnText='Send Messages'
          schema={schema}
          controls={controls}
          withRecaptcha={true}
          onSubmit={onSubmit}
          customSubmitButton={
            <CircleButton
              disabled={loadingStates.contactForm}
              isLoading={loadingStates.contactForm}
            >
              <Trans i18nKey='form.button' ns='contact' t={t}>
                <span></span> Send <br />
                Messages <i className='fa-solid fa-arrow-right'></i>
              </Trans>
            </CircleButton>
          }
        />
      </div>
    </div>
  );
};
