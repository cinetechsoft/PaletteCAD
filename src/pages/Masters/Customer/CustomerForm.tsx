import { Button, Grid } from '@mantine/core'
import React, { useEffect } from 'react'
import TextField from '../../../components/common/Inputs/TextField'
import { Form } from '../../../components/common/Form'
import { useCreateCustomerMutation } from '../../../services/api/master/customerAPI'
import { z } from 'zod'
import { notifications } from '@mantine/notifications'
import ShowroomDropdown from '../../../components/common/FormSpecific/ShowroomDropdown'
import StateDropdown from '../../../components/common/FormSpecific/StateDropdown'
import CityDropdown from '../../../components/common/FormSpecific/CityDropdown'

function CustomerForm({ initialValues, setOpened }) {
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

        })} onSubmit={(values) => {
            console.log((values))
            createCustomer(values).then(res => {
                setOpened()
                notifications.show({
                    message: "New Customer was added",
                    title: "Customer Added",
                    autoClose: 2000,
                })

            })
        }}>
            <Grid columns={4}>
                <Grid.Col span={2}>
                    <TextField label='Name' name='custName' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Code' name='custCode' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Address' name='address' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <ShowroomDropdown name="Showroom" />
                </Grid.Col>
                <Grid.Col span={2}>
                    <StateDropdown name="State" />
                </Grid.Col>
                <Grid.Col span={2}>
                    <CityDropdown name="City" stateFieldName={'stateID'} />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='mobNo' label='Mobile Number' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='email' label='Email' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='contactPerson' label='Contact person' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='customerNumber' label='Customer Number' />
                </Grid.Col>
                <Grid.Col>
                    <Button type='submit'>Submit</Button>
                </Grid.Col>

            </Grid>
        </Form>
    )
}

export default CustomerForm