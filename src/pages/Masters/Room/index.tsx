import { Box, Button, CopyButton, Modal, Paper, Title } from "@mantine/core";
//import React from "react";
import DataTable from "../../../components/common/DataTable";
import { useGetAllRoomsQuery, useLazyGetRoomByroomIDQuery,useCreateRoomMutation,useUpdateRoomMutation,useDeleteRoomMutation} from "../../../services/api/master/RoomAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import RoomForm from "./RoomForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Room() {
  const { data } = useGetAllRoomsQuery();
  const [getRoomByroomID, { isLoading: isGetRoomLoading, data: RoomData }] = useLazyGetRoomByroomIDQuery();
  const [deleteShowroom] = useDeleteRoomMutation()
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
        <Title size="h3">Rooms</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("roomId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("roomName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("roomVisibleNo", {
              cell: (info) => <CopyButton value={info.getValue()}>
                {({ copied, copy }) => (
                  <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                    {copied ? 'Copied!' : info.getValue()}
                  </Button>
                )}
              </CopyButton>,
            }),
            columnHelper.accessor("abbreviatedName", {
                cell: (info) => info.getValue(),
              }), 
           
             
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button loading={isGetRoomLoading} onClick={async () => {
                    await getRoomByroomID(info?.row?.original?.roomId)
                    await setEditOpened()
                  }} >
                    Edit
                  </Button>
                  <ConfirmButton label={"Delete"} variant="outline" color="red" onClick={(e) => {
                    deleteShowroom(info?.row?.original?.roomId)
                  }} />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add Room"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <RoomForm
          setOpened={setOpened}
          initialValues={{
            roomId: 0,
            roomName: "",
            roomVisibleNo: "",
            abbreviatedName: "",
            active:"Y"          
          }}
        />
      </Modal>
      <Modal
        title="Edit Room"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <RoomForm
          setOpened={setEditOpened}
          initialValues={{ ...RoomData, } }
        />
      </Modal>
    </Paper>
  );
        }

export default Room;