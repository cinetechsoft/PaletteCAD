import { Button, Grid } from "@mantine/core";
import React, { useEffect } from "react";
import TextField from "../../../components/common/Inputs/TextField";
import { Form } from "../../../components/common/Form";
import {
  useCreateInfluencerMutation,
  useUpdateInfluencerMutation,
} from "../../../services/api/master/influencerAPI";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import InfluencerTypeDropdown from "../../../components/common/GenericDropdowns/InfluencerTypeDropdown";

function InfluencerForm({
  initialValues,
  setOpened,
}: {
  initialValues: Influencer;
  setOpened: () => {};
}) {
  console.log(initialValues);
  const [createInfluencer] = useCreateInfluencerMutation();
  const [updateInfluencer] = useUpdateInfluencerMutation();
  return (
    <Form
      initialValues={initialValues}
      schema={z.object({
        influencer_Mast_id: z.number(),
        influencerType_id: z.number(),
        influencerType_Name: z.string(),
        firm_Name: z.string(),
        influencer_Name: z.string(),
        address: z.string(),
        mob_No: z.string(),
        email_id: z.string(),
        influencerCode: z.string(),
      })}
      onSubmit={(values) => {
        const apiToCall =
          initialValues?.influencer_Mast_id != 0
            ? updateInfluencer
            : createInfluencer;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.influencer_Mast_id != 0
            ? notifications.show({
                message: `Influencer #${initialValues?.influencerCode} was Updated`,
                title: "Influencer Updated",
                autoClose: 2000,
              })
            : notifications.show({
                message: "New Influencer was added",
                title: "Influencer Added",
                autoClose: 2000,
              });
        });
      }}
    >
      <Grid columns={4}>
        <Grid.Col span={2}>
          <InfluencerTypeDropdown name="InfluencerType" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="FirmName" name="firm_Name" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="InfluencerName" name="influencer_Name" />
        </Grid.Col>

        <Grid.Col span={2}>
          <TextField label="Address" name="address" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Mobile Number " name="mob_No" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Email" name="email_id" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="InfluencerCode" name="influencerCode" />
        </Grid.Col>
        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default InfluencerForm;
