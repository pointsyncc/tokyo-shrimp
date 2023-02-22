import { ILabelProps } from '@/components/forms/label/Label';
import {
  Control,
  ControllerProps,
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { ComponentAttrs } from './general';

// export type FormInputProps<TFormValues> = {
//   name: Path<TFormValues>;
//   rules?: RegisterOptions;
//   register?: UseFormRegister<TFormValues>;
// }

export interface FormInputBase<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  // control?: Control;
  // errors?: Partial<DeepMap<TFormValues, FieldError>>;
}


export interface ICommonProps<TFormValues extends FieldValues>
  extends ComponentAttrs,
    FormInputBase<TFormValues> {
  label?: string;
  labelProps?: ILabelProps;
  InputPrepend?: React.ReactNode;
  InputAppend?: React.ReactNode;
  showError?: boolean;
  containerClassName?: string;
  htmlFor?: string;
}