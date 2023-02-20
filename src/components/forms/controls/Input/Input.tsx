import { FormInputBase } from '@/types/forms';
import { ComponentAttrs } from '@/types/general';
import { classNames } from '@/utils/classNames';
import { ErrorMessage } from '@hookform/error-message';
import { FieldValues, Controller } from 'react-hook-form';
import Error from '../../error/Error';
import Label, { ILabelProps } from '../../label/Label';

interface ICommonProps<TFormValues extends FieldValues>
  extends ComponentAttrs,
    FormInputBase<TFormValues> {
  label?: string;
  labelProps?: ILabelProps;
  InputPrepend?: React.ReactNode;
  InputAppend?: React.ReactNode;
}

type ITextarea<TFormValues extends FieldValues> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    ICommonProps<TFormValues> & {
      as?: 'textarea';
    };

type IInput<TFormValues extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> &
  ICommonProps<TFormValues> & { as?: 'input' };

type IInputProps<TFormValues extends FieldValues> = ITextarea<TFormValues> | IInput<TFormValues>;

export const Input = <TFormValues extends Record<string, unknown>, T extends 'input' | 'textarea'>({
  name,
  className = 'form-control',
  rules,
  children,
  label,
  labelProps,
  control,

  as = 'input',
  ...rest
}: T extends 'input' ? IInputProps<TFormValues> : ITextarea<TFormValues>) => {
  const As = as;

  return (
    <div className='mb-3'>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, formState, fieldState }) => {
          const classes = classNames(fieldState.invalid ? 'border-danger' : '', className);

         
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
      />

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
