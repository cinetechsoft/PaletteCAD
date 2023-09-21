import React from "react";
import { SelectProps, Select } from "@mantine/core";
import { Controller } from "react-hook-form";
interface SelectFieldProps extends SelectProps {
  name: string;
}
function SelectField({ name, ...rest }: SelectFieldProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState, formState }) => (
        <Select {...rest} {...field} />
      )}
    />
  );
}

export default SelectField;
