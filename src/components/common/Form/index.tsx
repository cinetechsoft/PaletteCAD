import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps } from 'react'

import {
    useForm as useHookForm,
    UseFormProps as UseHookFormProps,
    FormProvider,
    UseFormReturn,
    FieldValues,
    SubmitHandler,
    useFormContext,
} from 'react-hook-form'

import { ZodSchema, TypeOf, ZodType, ZodTypeDef } from 'zod'



interface UseFormProps<T extends ZodSchema<any>>
    extends UseHookFormProps<TypeOf<T>> {
    schema: T
}

export const useForm = <T extends ZodSchema<any>>({
    schema,
    ...formConfig
}: UseFormProps<T>) => {
    return useHookForm({
        ...formConfig,
        resolver: zodResolver(schema),
    })
}


interface FormProps<T extends FieldValues = any>
    extends Omit<ComponentProps<'form'>, 'onSubmit'> {
    schema: ZodType<any, ZodTypeDef, any>
    onSubmit: SubmitHandler<T>
}

export const Form = <T extends FieldValues>({
    schema,
    onSubmit,
    children,
    ...props
}: FormProps<T>) => {
    const methods = useForm({ schema })
    return (
        <FormProvider {...methods}>

            <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
                <fieldset

                    disabled={methods.formState.isSubmitting}
                >
                    {children}
                </fieldset>
            </form>
        </FormProvider>
    )
}