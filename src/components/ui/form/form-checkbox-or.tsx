import { Input, InputProps } from "@/components/ui/input/";
import { ReactElement, memo } from "react";
import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "react-hook-form";

export type FormInputProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
} & Omit<InputProps, "defaultValue" | "onBlur" | "onChange" | "value">;

export const FormInput = memo(
  <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, boolean | number | string>>({
    control,
    defaultValue,
    name,
    ...props
  }: FormInputProps<TFieldValues, TPath>): ReactElement | null => {
    const { field, fieldState } = useController({
      control,
      defaultValue,
      name,
    });

    return (
      <Input
        {...props}
        {...field}
        error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
      />
    );
  },
);
FormInput.displayName = "FormInput";
