import { Box, Button, Modal, Paper, Title } from '@mantine/core'
import React from 'react'
import DataTable from '../../../components/common/DataTable'
import { useGetAllCustomersQuery } from '../../../services/api/master/customerAPI'
import { createColumnHelper } from '@tanstack/react-table'
import { useToggle } from '@mantine/hooks'
import CustomerForm from './CustomerForm'
const columnHelper = createColumnHelper()
function Customer() {
    const { data } = useGetAllCustomersQuery()
    const [opened, setOpened] = useToggle()
    return (
        <Paper p="lg">
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} mb={"lg"}>
                <Title size="h3">Customers</Title>
                <Button onClick={() => setOpened()}>Add</Button>
            </Box>

            <Paper style={{ overflow: "auto" }}>
                <DataTable data={data ?? []} columns={[
                    columnHelper.accessor("custID", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("custName", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("custCode", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("address", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("showroomID", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("showroomName", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("stateID", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("stateName", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("cityID", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("cityName", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("mobNo", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("email", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("contactPerson", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("active", { cell: (info) => info.getValue() }),
                    columnHelper.accessor("customerNumber", { cell: (info) => info.getValue() }),

                ]} />
            </Paper>
            <Modal title="Add Customer" size={"lg"} opened={opened} onClose={setOpened}>
                <CustomerForm initialValues={{
                    "custID": 0,
                    "custName": "string",
                    "custCode": "string",
                    "address": "string",
                    "showroomID": 0,
                    "showroomName": "string",
                    "stateID": 0,
                    "stateName": "string",
                    "cityID": 0,
                    "cityName": "string",
                    "mobNo": "string",
                    "email": "string",
                    "contactPerson": "string",
                    "active": "string",
                    "customerNumber": "string"
                }} />
            </Modal>
        </Paper>
    )
}

export default Customer