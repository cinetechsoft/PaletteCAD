import { Box, Button, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import {
  useGetAllInfluencersQuery,
  useLazyGetInfluencerByInfluencerIDQuery,
  useDeleteInfluencerMutation,
} from "../../../services/api/master/influencerAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import InfluencerForm from "./InfluencerForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Influencer() {
  const { data } = useGetAllInfluencersQuery();
  const [
    getInfluencerByInfluencerID,
    { isLoading: isGetInfluencerLoading, data: influencerData },
  ] = useLazyGetInfluencerByInfluencerIDQuery();
  const [deleteInfluencer] = useDeleteInfluencerMutation();
  const [editOpened, setEditOpened] = useToggle();
  const [opened, setOpened] = useToggle();
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
        <Title size="h3">Influencers</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("influencer_Mast_id", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("influencerType_id", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("influencerType_Name", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("firm_Name", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("address", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("mob_No", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("email_id", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("influencerCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button
                    loading={isGetInfluencerLoading}
                    onClick={async () => {
                      await getInfluencerByInfluencerID(
                        info?.row?.original?.influencer_Mast_id
                      );
                      await setEditOpened();
                    }}
                  >
                    Edit
                  </Button>
                  <ConfirmButton
                    label={"Delete"}
                    variant="outline"
                    color="red"
                    onClick={(e) => {
                      deleteInfluencer(info?.row?.original?.influencer_Mast_id);
                    }}
                  />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add Influencer"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <InfluencerForm
          setOpened={setOpened}
          initialValues={{
            influencer_Mast_id: 0,
            influencerType_id: 0,
            influencerType_Name: "",
            firm_Name: "",
            influencer_Name: "",
            address: "",
            mob_No: "",
            email_id: "",
            influencerCode: "",
          }}
        />
      </Modal>
      <Modal
        title="Edit Influencer"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <InfluencerForm
          setOpened={setEditOpened}
          initialValues={{
            ...influencerData,
            InfluencerType: {
              label: influencerData?.influencerType_Name,
              value: `${influencerData?.influencerType_id}`,
            },
          }}
        />
      </Modal>
    </Paper>
  );
}

export default Influencer;
