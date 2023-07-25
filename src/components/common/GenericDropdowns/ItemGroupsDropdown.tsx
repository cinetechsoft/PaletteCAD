import React from "react";
import { useGetItemGroupsQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function ItemGroupsDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetItemGroupsQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Item) => {
    setValue("itemGroupId", item.itemGroupId);
    setValue("itemGroup", item.itemGroup);
  };
  return (
    <AutoCompleteField
      label="ItemGroup"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.itemGroupId}`,
          label: `${e.itemGroup}`,
        })) ?? []
      }
    />
  );
}

export default ItemGroupsDropdown;
