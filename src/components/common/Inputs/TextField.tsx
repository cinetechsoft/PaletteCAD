import React from 'react'
import { TextInput, TextInputProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
interface TextFieldProps extends TextInputProps {
  name: string
}
function TextField({ name, ...rest }: TextFieldProps) {

  return (
    <Controller
      name={name}
      render={
        ({ field, fieldState, formState }) => (<TextInput {...rest} {...field} />)
      }
    />
  )
}

export default TextField