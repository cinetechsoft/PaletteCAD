import { Box, Button, CopyButton, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import { useGetAllCustomersQuery, useLazyGetCustomerByCustomerIDQuery, useDeleteCustomerMutation } from "../../../services/api/master/customerAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import CustomerForm from "./CustomerForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Customer() {
  const { data } = useGetAllCustomersQuery();
  const [getCustomerByCustomerID, { isLoading: isGetCustomerLoading, data: customerData }] = useLazyGetCustomerByCustomerIDQuery();
  const [deleteCustomer] = useDeleteCustomerMutation()
  const [opened, setOpened] = useToggle();
  const [editOpened, setEditOpened] = useToggle();
  return (
    <Paper p="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mb={"lg"}
      >
        <Title size="h3">Customers</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("custID", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("custName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("custCode", {
              cell: (info) => <CopyButton value={info.getValue()}>
                {({ copied, copy }) => (
                  <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                    {copied ? 'Copied!' : info.getValue()}
                  </Button>
                )}
              </CopyButton>,
            }),
            columnHelper.accessor("address", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("showroomID", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("showroomName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("stateID", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("stateName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("cityID", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("cityName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("mobNo", { cell: (info) => info.getValue() }),
            columnHelper.accessor("email", { cell: (info) => info.getValue() }),
            columnHelper.accessor("contactPerson", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("active", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("customerNumber", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button loading={isGetCustomerLoading} onClick={async () => {
                    await getCustomerByCustomerID(info?.row?.original?.custID)
                    await setEditOpened()
                  }} >
                    Edit
                  </Button>
                  <ConfirmButton label={"Delete"} variant="outline" color="red" onClick={(e) => {
                    deleteCustomer(info?.row?.original?.custID)
                  }} />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add Customer"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <CustomerForm
          setOpened={setOpened}
          initialValues={{
            custID: 0,
            custName: "",
            custCode: "",
            address: "",
            showroomID: 0,
            showroomName: "",
            stateID: 0,
            stateName: "",
            cityID: 0,
            cityName: "",
            mobNo: "",
            email: "",
            contactPerson: "",
            active: "Y",
            customerNumber: "",
          }}
        />
      </Modal>
      <Modal
        title="Edit Customer"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <CustomerForm
          setOpened={setEditOpened}
          initialValues={{ ...customerData, State: { label: customerData?.stateName, value: `${customerData?.stateID}` }, City: { label: customerData?.cityName, value: `${customerData?.cityID}` }, Showroom: { label: customerData?.showroomName, value: `${customerData?.showroomID}` } }}
        />
      </Modal>
    </Paper>
  );
}

export default Customer;
