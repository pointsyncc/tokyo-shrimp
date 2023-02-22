import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import Error from '../../error/Error';
import Label, { ILabelProps } from '../../label/Label';

import { FormInputBase } from '@/types/forms';
import { ComponentAttrs } from '@/types/general';
import { FieldValues } from 'react-hook-form';

import { Input } from '../Input/Input';

interface ICheckInputProps<TFormValues extends FieldValues>
  extends ComponentAttrs,
    FormInputBase<TFormValues> {
  checks: { value: string; label: string }[];
  label?: string;
  labelProps?: ILabelProps;
  type?: 'checkbox' | 'radio';
}

export const CheckInput = <TFormValues extends Record<string, unknown>>({
  name,
  checks,
  register,
  type = 'radio',
  label,
  labelProps,
  className = 'form-check-input',
  errors,
  ...rest
}: ICheckInputProps<TFormValues>) => {
  return (
    <div className='mb-3'>
      {label && (
        <Label {...labelProps} htmlFor={name}>
          {label}
        </Label>
      )}
      {checks.map((check, i) => (
        <Input
          labelProps={{ className: 'mb-0' }}
          containerClassName='form-check'
          className='form-check-input'
          type={type}
          errors={errors}
          showError={false}
          key={i}
          {...rest}
          name={name}
          {...check}
          htmlFor={check.value}
          register={register}
        />
      ))}
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <Error className='mt-1'>{message}</Error>}
      />
    </div>

    // <Field name={name}>
    //   {({ form }: FieldProps) => {
    //    const hasError = !!errors && errors[name];
    //    const classes = classNames(hasError ? 'border-danger' : '', className);
    //     return (
    //       <div className='form-group'>
    //         {checks.map((check) => (
    //           <React.Fragment key={check.value}>
    //             <Form.Check type={type} id={check.value}>
    //               <Form.Check.Input
    //                 onChange={form.handleChange}
    //                 type={type}
    //                 value={check.value}
    //                 name={name}
    //                 isValid
    //               />
    //               <If condition={Boolean(check.label)} otherwise={null}>
    //                 <Form.Check.Label className='text-primary fw-bold text-capitalize ms-2'>
    //                   {check.label}
    //                 </Form.Check.Label>
    //               </If>
    //             </Form.Check>
    //           </React.Fragment>
    //         ))}
    //         <If condition={hasError} otherwise={null}>
    //           <Form.Control.Feedback type='invalid' className='d-block'>
    //             {form.errors[name] as string}
    //           </Form.Control.Feedback>
    //         </If>
    //       </div>
    //     );
    //   }}
    // </Field>
  );
};
