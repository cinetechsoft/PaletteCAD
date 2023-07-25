import React from "react";
import { useGetColorShadesQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function ColorShadeDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetColorShadesQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Item) => {
    setValue("edgeBandColorId", item.edgeBandColorId);
    setValue("edgeBandColor", item.edgeBandColor);
  };
  return (
    <AutoCompleteField
      label="Color Shades"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.edgeBandColorId}`,
          label: `${e.edgeBandColor}`,
        })) ?? []
      }
    />
  );
}

export default ColorShadeDropdown;
