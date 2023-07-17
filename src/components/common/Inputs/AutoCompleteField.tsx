import React from 'react'
import { Select, SelectProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
interface AutoCompleteFieldProps extends SelectProps {
    name: string;
    data: any[];
    onItemSelect?: (item: any) => {}
}
function AutoCompleteField({ name, onItemSelect, ...rest }: AutoCompleteFieldProps) {
    return (
        <Controller
            name={name}
            render={
                ({ field: { name, onChange, onBlur, value, ...field }, fieldState, formState }) => (<Select searchable {...rest} {...field} value={value?.value} onChange={(val) => {
                    const selectedValue = rest.data.find(e => String(e.value) == val)
                    if (selectedValue) {
                        onItemSelect && onItemSelect(selectedValue)
                        onChange({ target: { value: selectedValue } })
                    }
                }} />)
            }
        />
    )
}

export default AutoCompleteField