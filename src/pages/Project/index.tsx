import React, { useEffect } from 'react'

import { useGetAllProjectsQuery, useCreateProjectMutation } from '../../services/api/projectAPI'
import { SimpleGrid, Card, rem, Text, createStyles, Grid, Button, Modal, Title } from '@mantine/core'
import { Link } from 'react-router-dom';
import { useToggle } from '@mantine/hooks';
import { Form } from '../../components/common/Form';
import { z } from 'zod';
import TextField from '../../components/common/Inputs/TextField';
import DateField from '../../components/common/Inputs/DateField';
import AutoCompleteField from '../../components/common/Inputs/AutoCompleteField';
import { useGetAllShowroomsQuery } from '../../services/api/master/showroomAPI';
import { useGetAllCustomersQuery } from '../../services/api/master/customerAPI';
import { useGetAllInfluencersQuery } from '../../services/api/master/influencerAPI';
import ShowroomDropdown from '../../components/common/FormSpecific/ShowroomDropdown';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));


function Project() {
    const { classes, theme } = useStyles();
    const { data } = useGetAllProjectsQuery();
    const { data: allCustomers } = useGetAllCustomersQuery();
    const { data: allInfluencers } = useGetAllInfluencersQuery();
    const [open, setToggle] = useToggle();
    const [createProject] = useCreateProjectMutation()
    return (
        <Grid >
            <Grid.Col>
                <Button onClick={setToggle}>Add</Button>
            </Grid.Col>
            <Grid.Col>
                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>

                    {data?.map((project) => (
                        <Link to={`/quotation/${project.project_Id}`}>
                            <Card key={project.project_Id} shadow="md" radius="md" className={classes.card} padding="xl">
                                {/* <project.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} /> */}
                                <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                                    {project.project_Id}
                                </Text>
                                <Text fz="sm" c="dimmed" mt="sm">
                                    {project.custName}
                                </Text>
                            </Card>
                        </Link>
                    ))}
                </SimpleGrid>
            </Grid.Col>
            <Modal opened={open} onClose={setToggle} size={'xl'} title={<Title size={'xl'} > Add Project</Title>}  >
                <Form
                    schema={z.object({
                        projectDate: z.date(),
                        projectVisibleNo: z.string()
                    })}
                    initialValues={{
                        "project_Id": 0,
                        "projectVisibleNo": "",
                        "projectDate": "2023-07-10T13:42:11.422Z",
                        "version": "",
                        "customerName": "",
                        "customerAddress": "",
                        "customerContactNo": "",
                        "customerContactPerson": "",
                        "active": "Y",
                        "emailId": "",
                        "customerId": 0,
                        "showroomId": 0,
                        "influencerId": 0,
                        "projectDetails": []
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        const formData = {
                            "project_Id": 0,
                            "projectVisibleNo": "",
                            "projectDate": "2023-07-10T13:42:11.422Z",
                            "version": "",
                            "customerName": "",
                            "customerAddress": "",
                            "customerContactNo": "",
                            "customerContactPerson": "",
                            "active": "Y",
                            "emailId": "",
                            "customerId": 0,
                            "showroomId": 0,
                            "influencerId": 0,
                            "projectDetails": [],
                            ...values
                        }
                        createProject(formData).then(res => alert(JSON.stringify(res)))
                    }}>
                    <SimpleGrid cols={3} sx={{ w: "100%" }}>

                        <TextField label="Visible Number" name={'projectVisibleNo'} />
                        <DateField label="Date" name={'projectDate'} />
                        <TextField label="Version" name={'version'} />
                        <Title size={'h6'} > Customer Details </Title>
                        <div></div>
                        <div></div>
                        <TextField label="Name" name={'customerName'} />
                        <TextField label="Address" name={'customerAddress'} />
                        <TextField label="Contact No" name={'customerContactNo'} />
                        <TextField label="Contact Person" name={'customerContactPerson'} />
                        <AutoCompleteField label="Customer ID" name={'customerId'} data={allCustomers?.map(e => ({ ...e, value: `${e.custID}`, label: `${e.custName}` })) ?? []} />
                        {/* <TextField label="" name={'active'} /> */}
                        <TextField label="Email" name={'emailId'} />
                        <ShowroomDropdown name={'showroomId'} />
                        <AutoCompleteField label="Influencer" name={'influencerId'} data={allInfluencers?.map(e => ({ ...e, value: `${e.influencer_Mast_id}`, label: `${e.influencer_Name}` })) ?? []} />
                        <Button type='submit'>Submit</Button>
                    </SimpleGrid>
                </Form>
            </Modal>
        </Grid>
    )
}

export default Project