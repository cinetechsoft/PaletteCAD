import { Box, Button, CopyButton, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import {
  useGetAllDesignationsQuery,
  useLazyGetDesignationByDesignationIDQuery,
  useDeleteDesignationMutation,
} from "../../../services/api/master/designationAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import DesignationForm from "./DesignationForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Designation() {
  const { data } = useGetAllDesignationsQuery();
  const [
    getDesignationByDesignationID,
    { isLoading: isGetDesignationLoading, data: designationData },
  ] = useLazyGetDesignationByDesignationIDQuery();
  const [deleteDesignation] = useDeleteDesignationMutation();
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
        <Title size="h3">Designations</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("designationId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("designationCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("designation", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("rank", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("maxDiscountAllowed", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("allowtoChangeQuotStatus", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button
                    loading={isGetDesignationLoading}
                    onClick={async () => {
                      await getDesignationByDesignationID(
                        info?.row?.original?.designationId
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
                      deleteDesignation(info?.row?.original?.designationId);
                    }}
                  />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal
        title="Add Designation"
        size={"lg"}
        opened={opened}
        onClose={setOpened}
      >
        <DesignationForm
          setOpened={setOpened}
          initialValues={{
            designationId: 0,
            designationCode: "",
            designation: "",
            rank: 0,
            maxDiscountAllowed: 0,
            allowtoChangeQuotStatus: "",
          }}
        />
      </Modal>
      <Modal
        title="Edit Designation"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <DesignationForm
          setOpened={setEditOpened}
          initialValues={{
            ...designationData,
          }}
        />
      </Modal>
    </Paper>
  );
}

export default Designation;
