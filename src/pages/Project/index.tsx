import React, { useEffect } from 'react'

import { useGetAllProjectsQuery } from '../../services/api/projectAPI'
import { SimpleGrid, Card, rem, Text, createStyles, Grid, Button, Modal, Title } from '@mantine/core'
import { Link } from 'react-router-dom';
import { useToggle } from '@mantine/hooks';

import ProjectForm from './ProjectForm';
import moment from 'moment';
import { IconCalendar } from '@tabler/icons-react';


function Project() {
    const { data } = useGetAllProjectsQuery();

    const [open, setToggle] = useToggle();
    return (
        <Grid >
            <Grid.Col>
                <Button onClick={setToggle}>Add</Button>
            </Grid.Col>
            <Grid.Col>
                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>

                    {data?.map((project) => (
                        <Link to={`/quotation/${project.project_Id}`} style={{ all: "unset", cursor: 'pointer' }}>
                            <Card key={project.project_Id} shadow="md" radius="md" padding="xl">
                                <Grid columns={2}>
                                    <Grid.Col span={1}>
                                        <Text fz="lg" fw={400}>
                                            {project.projectVisibleNo}
                                        </Text>
                                        <Text fz="lg" fw={400}>
                                            Ver.{project.version}
                                        </Text>
                                    </Grid.Col >
                                    <Grid.Col span={1}>
                                        <Text fw={400} display={"flex"}>
                                            <IconCalendar />
                                            {moment(project.projectDate).format('DD-MM-YYYY')}
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={1}>
                                        <Text fz="sm" c="teal" mt="sm" >
                                            {project.custName}
                                        </Text>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </Link>
                    ))}
                </SimpleGrid>
            </Grid.Col>
            <Modal opened={open} onClose={setToggle} size={'xl'} title={<Title size={'xl'} > Add Project</Title>}  >
                <ProjectForm initialValues={{
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
                }} setOpened={setToggle} />
            </Modal>
        </Grid >
    )
}

export default Project