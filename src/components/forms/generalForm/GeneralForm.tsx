import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormControl } from '../controls/control/Control';

import { Schema } from 'yup';

import { DeepPartial, FieldValues, useForm, UseFormReset } from 'react-hook-form';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import GoogleRecaptchaText from '@/components/common/googleRecaptchaText/GoogleRecaptchaText';

type IProps<T extends FieldValues, U> =  {
  initialValues?: DeepPartial<T>;
  onSubmit: (values: T,reset: UseFormReset<T>, token?: string,) => void;
  controls: FormControl<T>[];
  submitBtnText?: string;
  schema: Schema<U>;
  title?: React.ReactNode;
  titleClasses?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  customSubmitButton?: React.ReactNode;
  withRecaptcha?: boolean;
};

const GeneralForm = <T extends FieldValues, U extends Object>({
  initialValues,
  controls,
  onSubmit,
  submitBtnText = 'Submit',
  schema,
  title,
  titleClasses,
  buttonProps,
  customSubmitButton,
  withRecaptcha = false,
  ...rest
}: IProps<T, U>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<T>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  let formGroups = controls.map(({ colProps, ...rest }, i) => {
    return (
      <div key={i} className='col-6' {...colProps}>
        <FormControl {...rest} errors={errors} register={register} />
      </div>
    );
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(
    async (values: T) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      let token;
      if (withRecaptcha) {
        token = await executeRecaptcha('form_submit');
      }

      onSubmit(values, reset,token);
      // Do whatever you want with the token
    },
    [executeRecaptcha, withRecaptcha,onSubmit, reset],
  );
  return (
    <form className='row' {...rest} onSubmit={handleSubmit(handleReCaptchaVerify)}>
      {title && <h3 className={titleClasses}>{title}</h3>}

      {formGroups}
      {withRecaptcha ? <GoogleRecaptchaText/> : null}
      <div className='col-12'>
        {customSubmitButton ? (
          customSubmitButton
        ) : (
          <button className='btn btn-primary' {...buttonProps} type='submit'>
            {submitBtnText}
          </button>
        )}
      </div>
    </form>
  );
};

export default GeneralForm;
