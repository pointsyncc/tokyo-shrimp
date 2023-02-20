import { Control, ControllerProps, DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface  FormInputBase<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    control?: Control;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
  } 