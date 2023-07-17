import React from 'react'
import { Select, SelectProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
interface AutoCompleteFieldProps extends SelectProps {
    name: string;
    data: any[]
}
function AutoCompleteField({ name, ...rest }: AutoCompleteFieldProps) {
    return (
        <Controller
            name={name}
            render={
                ({ field: { name, ...field }, fieldState, formState }) => (<Select searchable {...rest} {...field} />)
            }
        />
    )
}

export default AutoCompleteField