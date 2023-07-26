import React from "react";
import { useGetThicknessQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function ThicknessDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetThicknessQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Thickness) => {
    setValue("thicknessInMMId", item.thicknessInMMId);
    setValue("thicknessInMM", item.thicknessInMM);
  };
  return (
    <AutoCompleteField
      label="Thickness"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.thicknessInMMId}`,
          label: `${e.thicknessInMM}`,
        })) ?? []
      }
    />
  );
}

export default ThicknessDropdown;
