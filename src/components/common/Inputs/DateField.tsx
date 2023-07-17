import React from 'react'
import { DateInput, DateInputProps } from '@mantine/dates';
import { Controller, useFormContext } from 'react-hook-form';
import moment from 'moment';
interface DateFieldProps extends DateInputProps {
    name: string
}
function DateField({ name, ...rest }: DateFieldProps) {
    return (
        <Controller
            name={name}
            render={
                ({ field, fieldState, formState }) => (<DateInput {...field} value={moment(field.value).toDate()} {...rest} />)
            }
        />
    )
}

export default DateField