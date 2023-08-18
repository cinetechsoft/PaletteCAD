import {  Button, Grid } from '@mantine/core'

//import React, { useEffect } from 'react'
import TextField from '../../../components/common/Inputs/TextField'
import { Form } from '../../../components/common/Form'
import { useCreateShowroomMutation, useUpdateShowroomMutation } from '../../../services/api/master/showroomAPI'
import { z } from 'zod'
//import { useFormContext } from 'react-hook-form';
import { notifications } from '@mantine/notifications'
//import ShowroomDropdown from '../../../components/common/GenericDropdowns/ShowroomDropdown'
import StateDropdown from '../../../components/common/GenericDropdowns/StateDropdown'
import CityDropdown from '../../../components/common/GenericDropdowns/CityDropdown'
import NumberField from '../../../components/common/Inputs/NumberField'
import SelectField from '../../../components/common/GenericDropdowns/SelectField'



function ShowroomForm({ initialValues, setOpened }: { initialValues: Showroom; setOpened: () => {} }) {
    console.log(initialValues)
    
    const [createShowroom] = useCreateShowroomMutation()
    const [updateShowroom] = useUpdateShowroomMutation()
    

    return (
        <Form initialValues={initialValues} schema={z.object({
            showroomId: z.number(),
            showroomName: z.string(),
            showroomCode: z.string(),
            showroomType: z.string(),
            gstNo: z.string(),
            panNo: z.string(),
            cityID: z.number(),
            cityName: z.string(),
            address:z.string(),
            stateID: z.number(),
            stateName: z.string(),            
            phoneNo: z.string(),
            email: z.string(),             
            percentDiscountMarkup: z.number(),
            showroomAbbreviation: z.string(),
            showroomOverhead:z.number(),

        })} onSubmit={(values) => {
            const apiToCall = initialValues?.showroomId != 0 ? updateShowroom : createShowroom
            apiToCall(values).then(res => {
                setOpened()
                initialValues?.showroomId != 0 ? notifications.show({
                    message: `Showroom #${initialValues?.showroomName} was Updated`,                    
                    title: "Showroom Updated",
                    autoClose: 2000,
                }) : notifications.show({
                    message: "New Showroom was added",
                    title: "Showroom Added",
                    autoClose: 2000,
                })

            })
        }}>
            <Grid columns={4}>
                <Grid.Col span={2}>
                    <TextField label='Name' name='showroomName'  required/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Code' name='showroomCode' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Abbreviation' name='showroomAbbreviation' required/>
                </Grid.Col>
                <Grid.Col span={2}>
                <SelectField
                     data={["Owned", "Franchise"]}
                     label="Showroom Type"
                     name="showroomType"
          />
                          </Grid.Col>
               
                <Grid.Col span={2}>
                    <TextField label='Address' name='address' required/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <StateDropdown name="State" />
                </Grid.Col>
                <Grid.Col span={2}>
                    <CityDropdown name="City" stateFieldName={'stateID'} />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='phoneNo' label='Contact Number' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='email' label='Email' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='gstNo' label='GST No' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField name='panNo' label='PAN No' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <NumberField name='percentDiscountMarkup' label='Discount/Markup %' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <NumberField name='showroomOverhead' label='Showroom Overhead %' />
                </Grid.Col>
                <Grid.Col>
                    <Button type='submit'>Submit</Button>
                </Grid.Col>
            </Grid>
        </Form>
    )
}

export default ShowroomForm