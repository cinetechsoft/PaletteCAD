import React, { useEffect } from "react";
import { useLazyGetItemGroupsByItemGroupIdLevel1Query } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function SubItemGroupsDropdown({
  name,
  ItemGroupFieldName,
}: {
  name: string;
  ItemGroupFieldName: string;
}) {
  const [getItemGroupsLevel1, { data: allItemGroups }] =
    useLazyGetItemGroupsByItemGroupIdLevel1Query();
  const { getValues, watch, setValue } = useFormContext();

  useEffect(() => {
    const ItemGroupId = getValues(ItemGroupFieldName);
    getItemGroupsLevel1(ItemGroupId);
  }, [watch(ItemGroupFieldName)]);

  const onItemSelect = (item: ItemGroup1) => {
    setValue("itemGroupId1", item.itemGroupId1);
    setValue("itemGroup1", item.itemGroup1);
  };
  return (
    <AutoCompleteField
      label="Item Group Level 1"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.itemGroupId1}`,
          label: `${e.itemGroup1}`,
        })) ?? []
      }
    />
  );
}

export default SubItemGroupsDropdown;
