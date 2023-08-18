import React from "react";
import { useGetBrandsQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function BrandDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetBrandsQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Brand) => {
    setValue("brandId", item.brandId);
    setValue("brandName", item.brandName);
  };
  return (
    <AutoCompleteField
      label="Product Brand"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.brandId}`,
          label: `${e.brandName}`,
        })) ?? []
      }
    />
  );
}

export default BrandDropdown;
