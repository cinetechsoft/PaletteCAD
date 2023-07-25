import React from "react";
import { useGetUnitsQuery } from "../../../services/api/master/itemAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function UnitDropdown({ name }: { name: string }) {
  const { data: allItemGroups } = useGetUnitsQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: Item) => {
    setValue("unitId", item.unitId);
    setValue("unit", item.unit);
  };
  return (
    <AutoCompleteField
      label="Unit"
      {...{ name, onItemSelect }}
      data={
        allItemGroups?.map((e) => ({
          ...e,
          value: `${e.unitId}`,
          label: `${e.unit}`,
        })) ?? []
      }
    />
  );
}

export default UnitDropdown;
