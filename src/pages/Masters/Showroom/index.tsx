import { Box, Button, CopyButton, Modal, Paper, Title } from "@mantine/core";
//import React from "react";
import DataTable from "../../../components/common/DataTable";
import { useGetAllShowroomsQuery, useLazyGetShowroomByshowroomIDQuery,useCreateShowroomMutation,useUpdateShowroomMutation,useDeleteShowroomMutation} from "../../../services/api/master/showroomAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import ShowroomForm from "./ShowroomForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Showroom() {
  const { data } = useGetAllShowroomsQuery();
  const [getShowroomByShowroomID, { isLoading: isGetShowroomLoading, data: showroomData }] = useLazyGetShowroomByshowroomIDQuery();
  const [deleteShowroom] = useDeleteShowroomMutation()
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
        <Title size="h3">Showrooms</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("showroomId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("showroomName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("showroomCode", {
              cell: (info) => <CopyButton value={info.getValue()}>
                {({ copied, copy }) => (
                  <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                    {copied ? 'Copied!' : info.getValue()}
                  </Button>
                )}
              </CopyButton>,
            }),
            columnHelper.accessor("showroomAbbreviation", {
                cell: (info) => info.getValue(),
              }),
            columnHelper.accessor("showroomType", {
              cell: (info) => info.getValue(),
            }),
            
            columnHelper.accessor("address", {
                cell: (info) => info.getValue(),
              }),
            columnHelper.accessor("cityID", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("cityName", {
                cell: (info) => info.getValue(),
              }),
            
              columnHelper.accessor("stateID", {
                cell: (info) => info.getValue(),
              }),
              columnHelper.accessor("stateName", {
                cell: (info) => info.getValue(),
              }),
            columnHelper.accessor("phoneNo", { cell: (info) => info.getValue() }),
            columnHelper.accessor("email", { cell: (info) => info.getValue() }),
            columnHelper.accessor("gstNo", {
                cell: (info) => info.getValue(),
              }),
              columnHelper.accessor("panNo", {
                cell: (info) => info.getValue(),
              }),           
           
            columnHelper.accessor("percentDiscountMarkup", {
                cell: (info) => info.getValue(),
              }),
            
            columnHelper.accessor("showroomOverhead", {
                cell: (info) => info.getValue(),
              }),
              //columnHelper.accessor("active", {
               // cell: (info) => info.getValue(),
              //}),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button loading={isGetShowroomLoading} onClick={async () => {
                    await getShowroomByShowroomID(info?.row?.original?.showroomId)
                    await setEditOpened()
                  }} >
                    Edit
                  </Button>
                  <ConfirmButton label={"Delete"} variant="outline" color="red" onClick={(e) => {
                    deleteShowroom(info?.row?.original?.showroomId)
                  }} />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add Showroom"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <ShowroomForm
          setOpened={setOpened}
          initialValues={{
            showroomId: 0,
            showroomName: "",
            showroomCode: "",
            showroomType: "",
            gstNo: "",
            panNo: "",
            cityID: 0,  
            cityName: "",
            address:"",
            stateID: 0,
            stateName: "",            
            phoneNo: "",
            email: "",
            percentDiscountMarkup: 0,          
            showroomAbbreviation: "",
            showroomOverhead:0,
          }}
        />
      </Modal>
      <Modal
        title="Edit Showroom"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <ShowroomForm
          setOpened={setEditOpened}
          initialValues={{ ...showroomData, State: { label: showroomData?.stateName, value: `${showroomData?.stateID}` }, City: { label: showroomData?.cityName, value: `${showroomData?.cityID}` }} }
        />
      </Modal>
    </Paper>
  );
        }

export default Showroom;
