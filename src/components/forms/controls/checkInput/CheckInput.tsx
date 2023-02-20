import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import Error from '../../error/Error';
import Label from '../../label/Label';

import { FormInputBase } from '@/types/forms';
import { ComponentAttrs } from '@/types/general';
import { FieldValues } from 'react-hook-form';
import { classNames } from '@/utils/classNames';

interface ICheckInputProps<TFormValues extends FieldValues>
  extends ComponentAttrs,
    FormInputBase<TFormValues> {
  checks: React.InputHTMLAttributes<HTMLInputElement>[];
  label?: string;
  labelProps?: ILabelProps;
}

export const CheckInput = <TFormValues extends Record<string, unknown>>({
  name,

  checks,

  rules,
  label,
  labelProps,
  className = 'form-check-input',
  errors,
  ...rest
}: ICheckInputProps<TFormValues>) => {
  const hasError = !!errors && errors[name];
  const classes = classNames(hasError ? 'border-danger' : '', className);
  return (
    <div className='form-group'>
      {label && (
        <Label {...labelProps} htmlFor={name}>
          {label}
        </Label>
      )}
      <input id={name} className={classes} {...(register && register(name, rules))} {...rest} />
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
