import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps, useEffect } from 'react'

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
    initialValues: Record<string, any>
}

export const Form = <T extends FieldValues>({
    schema,
    initialValues,
    onSubmit,
    children,
    ...props
}: FormProps<T>) => {
    const methods = useForm({ schema, defaultValues: initialValues })
    // useEffect(() => {
    //     methods.reset(initialValues)
    // }, [initialValues])
    // useEffect(() => {
    //     const subscription = methods.watch((value, { name, type }) =>
    //       methods.reset(initialValues)
    //     )
    //     return () => subscription.unsubscribe()
    //   }, [methods.watch])

    return (
        <FormProvider {...methods} {...props}>

            <form onSubmit={methods.handleSubmit(onSubmit, (e) => console.log(e, methods.getValues()))}>
                <fieldset
                    style={{ all: 'unset', width: "100%" }}
                    disabled={methods.formState.isSubmitting}
                >
                    {children}
                </fieldset>
            </form>
        </FormProvider>
    )
}