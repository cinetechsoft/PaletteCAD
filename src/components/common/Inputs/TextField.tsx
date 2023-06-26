import React from 'react'
import { TextInput } from '@mantine/core';
import { Controller } from 'react-hook-form';
interface TextFieldProps {
  name: string
}
function TextField({ name }) {
  return (
    <Controller
      name={name}
      render={
        () => (<TextInput />)
      }
    />
  )
}

export default TextField