import React, { useEffect } from "react";
import { useLazyGetItemGroupsByItemGroupIdLevel2Query } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function SubsubItemGroupsDropdown({
  name,
  ItemGroup1FieldName,
}: {
  name: string;
  ItemGroup1FieldName: string;
}) {
  const [getItemGroupsLevel2, { data: allItemGroups }] =
    useLazyGetItemGroupsByItemGroupIdLevel2Query();
  const { getValues, watch, setValue } = useFormContext();

  useEffect(() => {
    const ItemGroupId = getValues(ItemGroup1FieldName);
    getItemGroupsLevel2(ItemGroupId);
  }, [watch(ItemGroup1FieldName)]);

  const onItemSelect = (item: Item) => {
    setValue("itemGroupId2", item.itemGroupId2);
    setValue("itemGroup2", item.itemGroup2);
  };
  return (
    <AutoCompleteField
      label="Item Group Level 2"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.itemGroupId2}`,
          label: `${e.itemGroup2}`,
        })) ?? []
      }
    />
  );
}

export default SubsubItemGroupsDropdown;
