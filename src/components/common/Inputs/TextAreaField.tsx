import React from "react";
import { TextareaProps, Textarea } from "@mantine/core";
import { Controller } from "react-hook-form";
interface TextFieldProps extends TextareaProps {
  name: string;
}
function TextAreaField({ name, ...rest }: TextFieldProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState, formState }) => (
        <Textarea {...rest} {...field} />
      )}
    />
  );
}

export default TextAreaField;
