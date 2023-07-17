import React from 'react'
import { NumberInput, NumberInputProps, } from '@mantine/core';
import { Controller, useFormContext } from 'react-hook-form';
interface NumberFieldProps extends NumberInputProps {
  name: string
}
function NumberField({ name, ...rest }: NumberFieldProps) {
  return (
    <Controller
      name={name}
      render={
        ({ field, fieldState, formState }) => (<NumberInput {...field} {...rest} withAsterisk={rest.required} />)
      }
    />
  )
}

export default NumberField