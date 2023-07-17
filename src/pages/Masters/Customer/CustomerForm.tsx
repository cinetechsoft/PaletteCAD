import { Button, Grid } from '@mantine/core'
import React from 'react'
import TextField from '../../../components/common/Inputs/TextField'
import { Form } from '../../../components/common/Form'
import { useCreateCustomerMutation } from '../../../services/api/master/customerAPI'
import { z } from 'zod'
import { notifications } from '@mantine/notifications'

function CustomerForm({ initialValues }) {
    const [createCustomer] = useCreateCustomerMutation()
    return (
        <Form initialValues={initialValues} schema={z.object({
            custID: z.number(),
            custName: z.string(),
            custCode: z.string(),
            address: z.string(),
            showroomID: z.number(),
            showroomName: z.string(),
            stateID: z.number(),
            stateName: z.string(),
            cityID: z.number(),
            cityName: z.string(),
            mobNo: z.string(),
            email: z.string(),
            contactPerson: z.string(),
            active: z.string(),
            customerNumber: z.string(),

        })} onSubmit={(values) => { createCustomer(values).then(res=>{
            notifications.show({message:"New Customer was added",title:"Customer Added"})
        }) }}>
            <Grid columns={4}>
                <TextField name='custID' label='custID' />
                <TextField name='custName' label='custName' />
                <TextField name='custCode' label='custCode' />
                <TextField name='address' label='address' />
                <TextField name='showroomID' label='showroomID' />
                <TextField name='showroomName' label='showroomName' />
                <TextField name='stateID' label='stateID' />
                <TextField name='stateName' label='stateName' />
                <TextField name='cityID' label='cityID' />
                <TextField name='cityName' label='cityName' />
                <TextField name='mobNo' label='mobNo' />
                <TextField name='email' label='email' />
                <TextField name='contactPerson' label='contactPerson' />
                <TextField name='active' label='active' />
                <TextField name='customerNumber' label='customerNumber' />
                <Button type='submit'>Submit</Button>
            </Grid>
        </Form>
    )
}

export default CustomerForm