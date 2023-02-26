import { FieldValues } from 'react-hook-form';
import { IInputProps, Input } from '../input/Input';



export enum Control {
  TextInput = 'Input',
  // SelectInput = 'SelectInput',
  // CheckInput = 'CheckInput',
  // ColorCheckInput='ColorCheckInput'
}

export interface FormControlBase {
  control: Control;
}

export type FormControl<T extends FieldValues> = { colProps?: React.HTMLAttributes<HTMLDivElement>} & FormControlBase &
  (IInputProps<T>);


export const FormControl = ({ control, ...rest }: { control: string } & IInputProps<any>) => {
  switch (control) {
    case Control.TextInput:
      return <Input {...(rest as IInputProps<any>)} />;
    // case Control.CheckInput:
    //   return <CheckInput {...(rest as CheckboxProps)} />;
    // case Control.SelectInput:
    //   return <SelectInput {...(rest as SelectProps)} />;
    // case Control.ColorCheckInput:
    //   return <ColorCheckInput {...(rest as ColorCheckboxProps)} />;
    default:
      return <Input {...(rest as IInputProps<any>)} />;
  }
};
