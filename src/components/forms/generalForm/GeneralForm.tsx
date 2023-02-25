import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormControl } from '../controls/control/Control';

import { Schema } from 'yup';

import { DeepPartial, FieldValues, useForm } from 'react-hook-form';

type IProps<T extends FieldValues, U> = React.FormHTMLAttributes<HTMLFormElement> & {
  initialValues?: DeepPartial<T>;
  onSubmit: (values: T) => void;
  controls: FormControl<T>[];
  submitBtnText?: string;
  schema: Schema<U>;
  title?: React.ReactNode;
  titleClasses?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  customSubmitButton?:React.ReactNode
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
  ...rest
}: IProps<T, U>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  return (
    <form className='row' {...rest} onSubmit={handleSubmit(onSubmit)}>
      {title && <h3 className={titleClasses}>{title}</h3>}

      {formGroups}

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
