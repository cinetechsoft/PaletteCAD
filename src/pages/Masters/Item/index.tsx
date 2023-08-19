import { Box, Button, Modal, Paper, Title } from "@mantine/core";
import React from "react";
import DataTable from "../../../components/common/DataTable";
import {
  useGetAllItemsQuery,
  useDeleteItemMutation,
  useLazyGetItemByItemIDQuery,
} from "../../../services/api/master/ItemAPI";
import { createColumnHelper } from "@tanstack/react-table";
import { useToggle } from "@mantine/hooks";
import ItemForm from "./ItemForm";
import ConfirmButton from "../../../components/common/ConfirmButton";
const columnHelper = createColumnHelper();
function Item() {
  const { data } = useGetAllItemsQuery();
  const [getItemByItemID, { isLoading: isGetItemLoading, data: itemData }] =
    useLazyGetItemByItemIDQuery();
  const [deleteItem] = useDeleteItemMutation();
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
        <Title size="h3">Items</Title>
        <Button onClick={() => setOpened()}>Add</Button>
      </Box>

      <Paper style={{ overflow: "auto" }}>
        <DataTable
          data={data ?? []}
          columns={[
            columnHelper.accessor("itemId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemVisibleNo", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("salesItemCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("salesCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("venderCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("articleCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemName", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemGroup", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("productId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("brandId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("unitId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("hsnCode", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemDescription", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("edgeBandColorId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("thicknessInMMId", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("width", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("length", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemGroup1", {
              cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("itemGroup2", {
              cell: (info) => info.getValue(),
            }),

            // columnHelper.accessor("active", {
            //   cell: (info) => info.getValue(),
            // }),
            columnHelper.accessor("action", {
              cell: (info) => (
                <Box display={"flex"} sx={{ gap: 2 }}>
                  <Button
                    loading={isGetItemLoading}
                    onClick={async () => {
                      await getItemByItemID(info?.row?.original?.itemId);
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
                      deleteItem(info?.row?.original?.itemId);
                    }}
                  />
                </Box>
              ),
            }),
          ]}
        />
      </Paper>
      <Modal title="Add Item" size={"lg"} opened={opened} onClose={setOpened}>
        <ItemForm
          setOpened={setOpened}
          initialValues={{
            itemId: 0,
            itemName: "",
            itemVisibleNo: "",
            salesItemCode: "",
            articleCode: "",
            salesCode: "",
            venderCode: "",
            itemGroupId: 0,
            itemGroup: "",
            itemGroupId1: 0,
            itemGroup1: "",
            itemGroupId2: 0,
            itemGroup2: "",
            unitId: 0,
            unit: "",
            hsnCode: "",
            itemDescription: "",
            productId: 0,
            productName: "",
            brandId: 0,
            brandName: "",
            edgeBandColorId: 0,
            edgeBandColor: "",
            thicknessInMMId: 0,
            thicknessInMM: "",
            width: 0,
            length: 0,
          }}
        />
      </Modal>
      <Modal
        title="Edit Item"
        size={"lg"}
        opened={editOpened}
        onClose={setEditOpened}
      >
        <ItemForm
          setOpened={setEditOpened}
          initialValues={{
            ...itemData,
            ItemGroup: {
              lable: itemData?.itemGroup,
              value: `${itemData?.itemGroupId}`,
            },
            ItemGroup1: {
              lable: itemData?.itemGroup1,
              value: `${itemData?.itemGroupId1}`,
            },
            ItemGroup2: {
              lable: itemData?.itemGroup2,
              value: `${itemData?.itemGroupId2}`,
            },
            Product: {
              lable: itemData?.productName,
              value: `${itemData?.productId}`,
            },
            Brand: {
              lable: itemData?.brandName,
              value: `${itemData?.brandId}`,
            },
            Thickness: {
              lable: itemData?.thicknessInMM,
              value: `${itemData?.thicknessInMMId}`,
            },
            EdgeBandColor: {
              lable: itemData?.edgeBandColor,
              value: `${itemData?.edgeBandColorId}`,
            },
            Unit: {
              lable: itemData?.unit,
              value: `${itemData?.unitId}`,
            },
          }}
        />
      </Modal>
    </Paper>
  );
}

export default Item;
