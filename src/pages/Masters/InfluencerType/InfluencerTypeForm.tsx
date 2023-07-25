import { Button, Grid } from "@mantine/core";
import React, { useEffect } from "react";
import TextField from "../../../components/common/Inputs/TextField";
import { Form } from "../../../components/common/Form";
import {
  useCreateInfluencerTypeMutation,
  useUpdateInfluencerTypeMutation,
} from "../../../services/api/master/influencerTypeAPI";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import NumberField from "../../../components/common/Inputs/NumberField";

function InfluencerTypeForm({ initialValues, setOpened }) {
  console.log(initialValues);
  const [createInfluencerType] = useCreateInfluencerTypeMutation();
  const [updateInfluencerType] = useUpdateInfluencerTypeMutation();
  return (
    <Form
      initialValues={initialValues}
      schema={z.object({
        influencerType_id: z.number(),
        influencerType_Name: z.string(),
        percentDiscountMarkup: z.number(),
        active: z.string(),
      })}
      onSubmit={(values) => {
        console.log(values);
        const apiToCall =
          initialValues?.influencerType_id != 0
            ? updateInfluencerType
            : createInfluencerType;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.influencerType_id != 0
            ? notifications.show({
                message: `InfluencerType #${initialValues?.influencerType_Name} was Updated`,
                title: "InfluencerType Updated",
                autoClose: 2000,
              })
            : notifications.show({
                message: "New InfluencerType was added",
                title: "InfluencerType Added",
                autoClose: 2000,
              });
        });
      }}
    >
      <Grid columns={4}>
        <Grid.Col span={2}>
          <TextField label="InfluencerType" name="influencerType_Name" />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberField label="% Discount Markup" name="percentDiscountMarkup" />
        </Grid.Col>
        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default InfluencerTypeForm;
