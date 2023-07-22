import { Button, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import TextField from "../../../components/common/Inputs/TextField";
import { Form } from "../../../components/common/Form";
import {
  useCreateDesignationMutation,
  useUpdateDesignationMutation,
} from "../../../services/api/master/designationAPI";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import NumberField from "../../../components/common/Inputs/NumberField";

function DesignationForm({
  initialValues,
  setOpened,
}: {
  initialValues: Designation;
  setOpened: () => {};
}) {
  console.log(initialValues);
  const [createDesignation] = useCreateDesignationMutation();
  const [updateDesignation] = useUpdateDesignationMutation();
  // State variable to track the checkbox status
  const [allowtoChangeQuotStatus, setAllowtoChangeQuotStatus] = useState(
    initialValues.allowtoChangeQuotStatus === "Y"
  );
  return (
    <Form
      initialValues={initialValues}
      schema={z.object({
        designationId: z.number(),
        designationCode: z.string(),
        designation: z.string(),
        rank: z.number(),
        maxDiscountAllowed: z.number(),
        allowtoChangeQuotStatus: z.string(),
      })}
      onSubmit={(values) => {
        values.allowtoChangeQuotStatus = allowtoChangeQuotStatus ? "Y" : "N";

        const apiToCall =
          initialValues?.designationId != 0
            ? updateDesignation
            : createDesignation;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.designationId != 0
            ? notifications.show({
                message: `Designation #${initialValues?.designationCode} was Updated`,
                title: "Designation Updated",
                autoClose: 2000,
              })
            : notifications.show({
                message: "New Designation was added",
                title: "Designation Added",
                autoClose: 2000,
              });
        });
      }}
    >
      <Grid columns={4}>
        <Grid.Col span={2}>
          <TextField label="Code" name="designationCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Designation" name="designation" />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberField label="Rank" name="rank" />
        </Grid.Col>

        <Grid.Col span={2}>
          <NumberField label="MaxDiscountAllowed" name="maxDiscountAllowed" />
        </Grid.Col>
        <Grid.Col span={2}>
          <label>
            <input
              type="checkbox"
              checked={allowtoChangeQuotStatus}
              onChange={() =>
                setAllowtoChangeQuotStatus(!allowtoChangeQuotStatus)
              }
            />{" "}
            Allow to Change Quotation Status
          </label>
        </Grid.Col>

        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default DesignationForm;
