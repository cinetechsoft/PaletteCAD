import React, { useEffect } from 'react'
import { useLazyGetQuotationByProjectIDQuery } from '../../services/api/quotationAPI'
import { useParams } from 'react-router-dom'
import { useLazyGetProjectByProjectIDQuery } from '../../services/api/projectAPI'
import QuotationAccordion from './QuotationDetails/QuotationAccordion'
import { Paper, SimpleGrid, Title, Skeleton, Box } from '@mantine/core'

function Quotation() {
    const { projectID = "" } = useParams()
    const [getQuotationByProjectID, { data: quotationData, isLoading: isQuotationLoading }] = useLazyGetQuotationByProjectIDQuery()
    const [getProjectByProjectID, { data: projectData, isLoading: isProjectLoading }] = useLazyGetProjectByProjectIDQuery()
    useEffect(() => {
        getProjectByProjectID(projectID)
        getQuotationByProjectID(projectID)
    }, [])
    /* 
    active
: 
"Y"
custAddress
: 
"Raichur"
custContactNo
: 
"9087568799"
custContactPer
: 
"Vishal"
custId
: 
11
custName
: 
"Amit Karmarkar"
emailId
: 
""
influencerId
: 
5
pVisibleNo
: 
"20222023PMKW~1^"
prDate
: 
"2023-06-11T18:04:01.187"
showroomId
: 
2
version
: 
"1.0" */
    return (
        <Paper p="lg">
            <Title order={3}>Project #{projectID}</Title>
            <SimpleGrid cols={3}>
                <Paper shadow='xs'>
                    {isProjectLoading ? <Skeleton /> :
                        <SimpleGrid breakpoints={[{cols:1},{cols:2},{cols:3}]} p="sm">
                            <Title order={5} >Company Details</Title>
                            <div></div>
                            <span>Name: {projectData?.custName}</span>
                            <div></div>
                            <div style={{ columnSpan: "all" }}>Address: {projectData?.custAddress}</div>
                        </SimpleGrid>
                    }
                </Paper>
            </SimpleGrid>
            <Paper shadow='xs' mt="lg" >
                {isQuotationLoading ? <Skeleton width={"100%"} height={"400px"} /> :
                    <QuotationAccordion quotationItems={quotationData} />
                }

            </Paper>
        </Paper >
    )
}

export default Quotation