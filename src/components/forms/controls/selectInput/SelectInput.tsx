import { ICommonProps } from '@/types/forms';

import { classNames } from '@/utils/classNames';

import { FieldValues } from 'react-hook-form';
import Error from '../../error/Error';
import Label from '../../label/Label';

type ISelectProps<TFormValues extends FieldValues> = React.SelectHTMLAttributes<HTMLSelectElement> &
  ICommonProps<TFormValues> & {
    options: { value: string; label: string }[];
  };
// Instead of passing errors pass error message directly as a prop
export const SelectInput = <TFormValues extends Record<string, unknown>>({
  name,
  className = 'form-select',
  rules,
  children,
  label,
  labelProps,
  register,
  showError = true,
  errors,
  containerClassName = 'mb-3',
  htmlFor,
  options,
  ...rest
}: ISelectProps<TFormValues>) => {
  //    // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so i should fix this
  const hasError = !!(errors && errors[name]);
  const classes = classNames(hasError ? 'border-danger' : '', className);

  return (
    <div className={containerClassName}>
      {label && (
        <Label {...labelProps} htmlFor={htmlFor ? htmlFor : name}>
          {label}
        </Label>
      )}
      <select className={classes} {...rest} {...(register && register(name, rules))}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {hasError && <Error className='mt-1'>{errors[name]?.message}</Error>}
    </div>
  );
};
