import { Box, Button, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import { useGetAllInfluencerTypesQuery } from "../../../services/api/master/influencerTypeAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import InfluencerTypeForm from "./InfluencerTypeForm";
const columnHelper = createColumnHelper();
function InfluencerType() {
  const { data } = useGetAllInfluencerTypesQuery();
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
        <Title size="h3">InfluencerTypes</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("influencerType_id", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("influencerType_Name", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("percentDiscountMarkup", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("active", {
              cell: (info) => info.getValue(),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add InfluencerType"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <InfluencerTypeForm
          setOpened={setOpened}
          initialValues={{
            influencerType_id: 0,
            influencerType_Name: "",
            percentDiscountMarkup: 0,
            active: "Y",
          }}
        />
      </Modal>
    </Paper>
  );
}

export default InfluencerType;
