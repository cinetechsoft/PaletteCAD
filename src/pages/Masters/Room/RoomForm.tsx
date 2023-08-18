import {  Button, Grid } from '@mantine/core'
//import React, { useEffect } from 'react'
import TextField from '../../../components/common/Inputs/TextField'
import { Form } from '../../../components/common/Form'
import { useCreateRoomMutation, useUpdateRoomMutation } from '../../../services/api/master/RoomAPI'
import {  z } from 'zod'

import { notifications } from '@mantine/notifications'

function RoomForm({ initialValues, setOpened }: { initialValues: Room; setOpened: () => {} }) {
    console.log(initialValues)
    
    const [createRoom] = useCreateRoomMutation()
    const [updateRoom] = useUpdateRoomMutation()
    
    return (
        <Form initialValues={initialValues} schema={z.object({
            roomId: z.number(),
            roomVisibleNo:z.string(),
            roomName: z.string(),
            abbreviatedName:z.string(),          
           active:z.string(),
        })} onSubmit={(values) => {
            const apiToCall = initialValues?.roomId != 0 ? updateRoom : createRoom
            apiToCall(values).then(res => {
                setOpened()
                initialValues?.roomId != 0 ? notifications.show({
                    message: `Room #${initialValues?.roomName} was Updated`,                    
                    title: "Room Updated",
                    autoClose: 2000,
                }) : notifications.show({
                    message: "New Room was added",
                    title: "Room Added",
                    autoClose: 2000,
                })

            })
        }}>
            <Grid columns={4}>
                <Grid.Col span={2}>
                    <TextField label='Name' name='roomName'  required/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Room Visible No' name='roomVisibleNo' />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextField label='Abbreviation' name='abbreviatedName' required/>
                </Grid.Col>
               
                <Grid.Col>
                    <Button type='submit'>Submit</Button>
                </Grid.Col>
            </Grid>
        </Form>
    )
}

export default RoomForm