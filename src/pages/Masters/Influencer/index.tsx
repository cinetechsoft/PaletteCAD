import { Box, Button, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import { useGetAllInfluencersQuery } from "../../../services/api/master/influencerAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import InfluencerForm from "./InfluencerForm";
const columnHelper = createColumnHelper();
function Influencer() {
  const { data } = useGetAllInfluencersQuery();
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
    </Paper>
  );
}

export default Influencer;
