import React from "react";
import { useGetAllInfluencerTypesQuery } from "../../../services/api/master/influencerTypeAPI";
import AutoCompleteField from "../Inputs/AutoCompleteField";
import { useFormContext } from "react-hook-form";

function InfluencerTypeDropdown({ name }: { name: string }) {
  const { data: allInfluencerTypes } = useGetAllInfluencerTypesQuery();
  const { setValue } = useFormContext();
  const onItemSelect = (item: InfluencerType) => {
    setValue("influencerType_id", item.influencerType_id);
    setValue("influencerType_Name", item.influencerType_Name);
  };
  return (
    <AutoCompleteField
      label="InfluencerType"
      {...{ name, onItemSelect }}
      data={
        allInfluencerTypes?.map((e) => ({
          ...e,
          value: `${e.influencerType_id}`,
          label: `${e.influencerType_Name}`,
        })) ?? []
      }
    />
  );
}

export default InfluencerTypeDropdown;
