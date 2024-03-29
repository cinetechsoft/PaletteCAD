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
import TextAreaField from "../../../components/common/Inputs/TextAreaField";

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
        const apiToCall = initialValues?.itemId != 0 ? updateItem : createItem;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.itemId != 0
            ? notifications.show({
                message: `Item #${initialValues?.itemName} was Updated`,
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
          <TextField label="Visible No." name="itemVisibleNo" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Article Code" name="articleCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Sales item Code" name="salesItemCode" />
        </Grid.Col>

        <Grid.Col span={2}>
          <TextField label="Manufacturing Code" name="salesCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Vendor Code" name="venderCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Item" name="itemName" />
        </Grid.Col>
        <Grid.Col span={2}>
          <ItemGroupsDropdown name="ItemGroup" />
        </Grid.Col>
        <Grid.Col span={2}>
          <SubItemGroupsDropdown
            name="ItemGroup1"
            ItemGroupFieldName="itemGroupId"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <SubsubItemGroupsDropdown
            name="ItemGroup2"
            ItemGroup1FieldName="itemGroupId1"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <ColorShadeDropdown name="EdgeBandColor" />
        </Grid.Col>
        <Grid.Col span={2}>
          <ThicknessDropdown name="Thickness" />
        </Grid.Col>

        <Grid.Col span={2}>
          <NumberField label="Width" name="width" />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberField label="Length" name="length" />
        </Grid.Col>

        <Grid.Col span={2}>
          <ProductDropdown name="Product" />
        </Grid.Col>
        <Grid.Col span={2}>
          <BrandDropdown name="Brand" />
        </Grid.Col>
        <Grid.Col span={2}>
          <UnitDropdown name="Unit" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="HSN Code" name="hsnCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextAreaField label="Description" name="itemDescription" />
        </Grid.Col>
        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default ItemForm;
