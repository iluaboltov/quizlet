import { Select, SelectProps } from "@/components/ui/select";
import { ReactElement } from "react";
import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "react-hook-form";

export type FormSelectProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
} & { containerClassName?: string } & Omit<SelectProps, "defaultValue" | "onBlur" | "onChange" | "value">;

export const FormSelect = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
>({
  children,
  containerClassName,
  control,
  defaultValue,
  name,
  ...props
}: FormSelectProps<TFieldValues, TPath>): ReactElement | null => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Select
      {...props}
      containerClassName={containerClassName}
      defaultValue={field.value}
      error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
      onValueChange={field.onChange}
    >
      {children}
    </Select>
  );
};