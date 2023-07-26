import React from "react";
import { useGetProductsQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function ProductDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetProductsQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Product) => {
    setValue("productId", item.productId);
    setValue("productName", item.productName);
  };
  return (
    <AutoCompleteField
      label="Product Brand"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.productId}`,
          label: `${e.productName}`,
        })) ?? []
      }
    />
  );
}

export default ProductDropdown;
