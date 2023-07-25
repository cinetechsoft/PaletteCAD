import { Button, Grid } from "@mantine/core";
import React, { useEffect } from "react";
import TextField from "../../../components/common/Inputs/TextField";
import { Form } from "../../../components/common/Form";
import {
  useCreateItemMutation,
  useUpdateItemMutation,
} from "../../../services/api/master/ItemAPI";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import NumberField from "../../../components/common/Inputs/NumberField";
import ItemGroupsDropdown from "../../../components/common/GenericDropdowns/ItemGroupsDropdown";
import SubItemGroupsDropdown from "../../../components/common/GenericDropdowns/SubItemGroupsDropdown";
import SubsubItemGroupsDropdown from "../../../components/common/GenericDropdowns/SubsubItemGroupsDropdown";
import ColorShadeDropdown from "../../../components/common/GenericDropdowns/ColorShadeDropdown";
import ThicknessDropdown from "../../../components/common/GenericDropdowns/ThicknessDropdown";
import ProductDropdown from "../../../components/common/GenericDropdowns/ProductDropdown";
import BrandDropdown from "../../../components/common/GenericDropdowns/BrandDropdown";
import UnitDropdown from "../../../components/common/GenericDropdowns/UnitDropdown";

function ItemForm({ initialValues, setOpened }) {
  console.log(initialValues);
  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  return (
    <Form
      initialValues={initialValues}
      schema={z.object({
        itemId: z.number(),
        itemName: z.string(),
        itemVisibleNo: z.string(),
        salesItemCode: z.string(),
        articleCode: z.string(),
        salesCode: z.string(),
        venderCode: z.string(),
        itemGroupId: z.number(),
        itemGroup: z.string(),
        itemGroupId1: z.number(),
        itemGroup1: z.string(),
        itemGroupId2: z.number(),
        itemGroup2: z.string(),
        unitId: z.number(),
        unit: z.string(),
        hsnCode: z.string(),
        itemDescription: z.string(),
        productId: z.number(),
        productName: z.string(),
        brandId: z.number(),
        brandName: z.string(),
        edgeBandColorId: z.number(),
        edgeBandColor: z.string(),
        thicknessInMMId: z.number(),
        thicknessInMM: z.string(),
        width: z.number(),
        length: z.number(),
      })}
      onSubmit={(values) => {
        console.log(values);
        const apiToCall = initialValues?.itemid != 0 ? updateItem : createItem;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.itemid != 0
            ? notifications.show({
                message: `Item #${initialValues?.Item_Name} was Updated`,
                title: "Item Updated",
                autoClose: 2000,
              })
            : notifications.show({
                message: "New Item was added",
                title: "Item Added",
                autoClose: 2000,
              });
        });
      }}
    >
      <Grid columns={4}>
        <Grid.Col span={2}>
          <TextField label="Article Code" name="articleCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Sales item Code" name="salesItemcode" />
        </Grid.Col>

        <Grid.Col span={2}>
          <TextField label="Manufacturing Code" name="salesCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Vendor Code" name="vendorCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Item" name="itemName" />
        </Grid.Col>
        <Grid.Col span={2}>
          <ItemGroupsDropdown name="itemGroup" />
        </Grid.Col>
        <Grid.Col span={2}>
          <SubItemGroupsDropdown
            name="itemGroup1"
            ItemGroupFieldName="itemGroupId"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <SubsubItemGroupsDropdown
            name="itemGroup2"
            ItemGroup1FieldName="itemGroupId1"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <ColorShadeDropdown name="edgeBandColor" />
        </Grid.Col>
        <Grid.Col span={2}>
          <ThicknessDropdown name="thicknessInMM" />
        </Grid.Col>

        <Grid.Col span={2}>
          <NumberField label="Width" name="width" />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberField label="Length" name="length" />
        </Grid.Col>

        <Grid.Col span={2}>
          <ProductDropdown name="productName" />
        </Grid.Col>
        <Grid.Col span={2}>
          <BrandDropdown name="brandName" />
        </Grid.Col>
        <Grid.Col span={2}>
          <UnitDropdown name="unit" />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberField label="HSN Code" name="hsnCode" />
        </Grid.Col>

        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default ItemForm;
