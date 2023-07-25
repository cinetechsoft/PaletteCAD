import { Box, Button, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import {
  useGetAllInfluencerTypesQuery,
  useDeleteInfluencerTypeMutation,
  useLazyGetInfluencerTypeByInfluencerTypeIDQuery,
} from "../../../services/api/master/influencerTypeAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import InfluencerTypeForm from "./InfluencerTypeForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function InfluencerType() {
  const { data } = useGetAllInfluencerTypesQuery();
  const [
    getInfluencerTypeByInfluencerTypeID,
    { isLoading: isGetInfluencerTypeLoading, data: influecerTypeData },
  ] = useLazyGetInfluencerTypeByInfluencerTypeIDQuery();
  const [deleteInfluencerType] = useDeleteInfluencerTypeMutation();
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

            // columnHelper.accessor("active", {
            //   cell: (info) => info.getValue(),
            // }),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button
                    loading={isGetInfluencerTypeLoading}
                    onClick={async () => {
                      await getInfluencerTypeByInfluencerTypeID(
                        info?.row?.original?.influencerType_id
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
                      deleteInfluencerType(
                        info?.row?.original?.influencerType_id
                      );
                    }}
                  />
                </Box>
              ),
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
      <Modal
        title="Edit InfluencerType"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <InfluencerTypeForm
          setOpened={setEditOpened}
          initialValues={{
            ...influecerTypeData,
          }}
        />
      </Modal>
    </Paper>
  );
}

export default InfluencerType;
