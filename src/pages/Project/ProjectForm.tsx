import { Grid, Title, Button } from '@mantine/core'
import React from 'react'
import { z } from 'zod'
import ShowroomDropdown from '../../components/common/GenericDropdowns/ShowroomDropdown'
import AutoCompleteField from '../../components/common/Inputs/AutoCompleteField'
import DateField from '../../components/common/Inputs/DateField'
import TextField from '../../components/common/Inputs/TextField'
import { Form } from '../../components/common/Form'
import { useGetAllCustomersQuery } from '../../services/api/master/customerAPI'
import { useGetAllInfluencersQuery } from '../../services/api/master/influencerAPI'
import { useCreateProjectMutation } from '../../services/api/projectAPI'
import CustomerDropdown from '../../components/common/GenericDropdowns/CustomerDropdown'
import ProjectCustomerDetails from './ProjectCustomerDetails'
import InfluencerDropdown from '../../components/common/GenericDropdowns/InfluencerDropdown'

function ProjectForm({ initialValues, setOpened }) {
    
    const { data: allInfluencers } = useGetAllInfluencersQuery();
    const [createProject] = useCreateProjectMutation()
    return (
        <Form
            schema={z.object({
                project_Id: z.number(),
                projectVisibleNo: z.string(),
                projectDate: z.date(),
                version: z.string(),
                custName: z.string(),
                custAddress: z.string(),
                custContactNo: z.string(),
                custContactPer: z.string(),
                active: z.string(),
                emailId: z.string(),
                custId: z.number(),
                showroomId: z.number(),
                influencerId: z.number(),
                projectDetails: z.array(z.object({
                    pr_detid: z.number(),
                    project_Id: z.number(),
                    excelSrNo: z.number(),
                    excelPathnFileName: z.string(),
                    projectType: z.number(),
                    designCostFromExcel: z.string(),
                    machineCostFromExcel: z.string(),
                    labourCostFromExcel: z.string(),
                    landAndBuildingFromExcel: z.string(),
                    overheadsFromExcel: z.string(),
                    packingMaterialFromExcel: z.string(),
                    percentage: z.number(),
                    margin: z.number(),
                    active: z.string(),
                    roomId: z.number(),
                })).optional()
            })}
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values)
                const formData = {
                    "project_Id": 0,
                    "projectVisibleNo": "string",
                    "projectDate": "2023-07-20T16:50:26.479Z",
                    "version": "string",
                    "custName": "string",
                    "custAddress": "string",
                    "custContactNo": "string",
                    "custContactPer": "string",
                    "active": "string",
                    "emailId": "string",
                    "custId": 0,
                    "showroomId": 0,
                    "influencerId": 0,
                    ...values,
                    ...values.customer
                }
                createProject(formData).then(res => alert(JSON.stringify(res)))
            }}>
            <Grid columns={2}>
                <Grid.Col span={1}>
                    <TextField label="Visible Number" name={'projectVisibleNo'} />
                </Grid.Col>
                <Grid.Col span={1}>
                    <DateField label="Date" name={'projectDate'} />
                </Grid.Col>
                <Grid.Col span={1}>
                    <TextField label="Version" name={'version'} />
                </Grid.Col>
                <Grid.Col>
                    <Title size={'h6'} > Customer Details </Title>
                </Grid.Col>
                <ProjectCustomerDetails />
                <Grid.Col span={1}>
                    <ShowroomDropdown name={'showroom'} />
                </Grid.Col>
                <Grid.Col span={1}>
                    <CustomerDropdown name={'customerSelect'} showroomID='showroomID' />
                </Grid.Col>
                <Grid.Col span={1}>
                    <InfluencerDropdown name={'influencer'} />
                </Grid.Col>
                <Grid.Col>
                    <Button type='submit'>Submit</Button>
                </Grid.Col>
            </Grid>

        </Form>
    )
}

export default ProjectForm