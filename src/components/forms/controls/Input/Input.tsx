import { ICommonProps } from '@/types/forms';

import { classNames } from '@/utils/classNames';

import { FieldValues } from 'react-hook-form';
import Error from '../../error/Error';
import Label, { ILabelProps } from '../../label/Label';

type ITextarea<TFormValues extends FieldValues> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    ICommonProps<TFormValues> & {
      as?: 'textarea';
    };

type IInput<TFormValues extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> &
  ICommonProps<TFormValues> & { as?: 'input' };

export type IInputProps<TFormValues extends FieldValues> = ITextarea<TFormValues> | IInput<TFormValues>;

// Instead of passing errors pass error message directly as a prop
export const Input = <
  TFormValues extends Record<string, unknown>,
  T extends 'input' | 'textarea' = 'input',
>({
  name,
  className = 'form-control',
  rules,
  children,
  label,
  labelProps,
  register,
  showError = true,
  errors,
  containerClassName = 'mb-3',
  as = 'input',
  htmlFor,
  ...rest
}: T extends 'input' ? IInputProps<TFormValues> : ITextarea<TFormValues>) => {
  const As = as;

  //    // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so i should fix this
  const hasError = !!(errors && errors[name]);
  const classes = classNames(hasError ? 'text-danger' : '', className);

  return (
    <div className={containerClassName}>
      {label && (
        <Label {...labelProps} htmlFor={htmlFor ? htmlFor : name}>
          {label}
        </Label>
      )}
      <As
        id={htmlFor ? htmlFor : name}
        className={classes}
        {...rest}
        {...(register && register(name, rules))}
      />
      {showError && hasError && (
        <Error className='mt-1'>{errors[name]?.message}</Error>
        // <ErrorMessage
        //   errors={errors}
        //   name={name as any}
        //   render={({ message }) => <Error className='mt-1'>{message}</Error>}
        // />
      )}
      {/* <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, formState, fieldState }) => {
          const classes = classNames(fieldState.invalid ? 'border-danger' : '', className);

          // console.log(field,formState,fieldState)
          return (
            <>
              {label && (
                <Label {...labelProps} htmlFor={name}>
                  {label}
                </Label>
              )}
              <As id={name} className={classes} {...field} {...rest} />

              <ErrorMessage
                errors={formState.errors}
                name={name as any}
                render={({ message }) => <Error className='mt-1'>{message}</Error>}
              />
            </>
          );
        }}
      /> */}

      {/* <Control id={name} className={classes} {...(register && register(name, rules))} {...rest} /> */}
    </div>

    // <Field name={name}>
    //   {({ field, form }: FieldProps) => {
    //     const hasError = Boolean(form.errors[name] && form.submitCount >= 1);
    //     return (
    //       <>
    //         <Comp {...rest} {...field} hasError={hasError} error={form.errors[name] as string} />
    //         {children && children}
    //       </>
    //     );
    //   }}
    // </Field>
  );
};
