import { Button, Grid } from "@mantine/core";
import React, { useEffect } from "react";
import TextField from "../../../components/common/Inputs/TextField";
import { Form } from "../../../components/common/Form";
import {
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
} from "../../../services/api/master/customerAPI";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import ShowroomDropdown from "../../../components/common/GenericDropdowns/ShowroomDropdown";
import StateDropdown from "../../../components/common/GenericDropdowns/StateDropdown";
import CityDropdown from "../../../components/common/GenericDropdowns/CityDropdown";

function CustomerForm({
  initialValues,
  setOpened,
}: {
  initialValues: Customer;
  setOpened: () => {};
}) {
  console.log(initialValues);
  const [createCustomer] = useCreateCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  return (
    <Form
      initialValues={initialValues}
      schema={z.object({
        custID: z.number(),
        custName: z.string(),
        custCode: z.string(),
        address: z.string(),
        showroomID: z.number(),
        showroomName: z.string(),
        stateID: z.number(),
        stateName: z.string(),
        cityID: z.number(),
        cityName: z.string(),
        mobNo: z.string(),
        email: z.string(),
        contactPerson: z.string(),
        active: z.string(),
        customerNumber: z.string(),
      })}
      onSubmit={(values) => {
        const apiToCall =
          initialValues?.custID != 0 ? updateCustomer : createCustomer;
        apiToCall(values).then((res) => {
          setOpened();
          initialValues?.custID != 0
            ? notifications.show({
                message: `Customer #${initialValues?.custCode} was Updated`,
                title: "Customer Updated",
                autoClose: 2000,
              })
            : notifications.show({
                message: "New Customer was added",
                title: "Customer Added",
                autoClose: 2000,
              });
        });
      }}
    >
      <Grid columns={4}>
        <Grid.Col span={2}>
          <TextField label="Name" name="custName" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Code" name="custCode" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField label="Address" name="address" />
        </Grid.Col>
        <Grid.Col span={2}>
          <StateDropdown name="State" />
        </Grid.Col>
        <Grid.Col span={2}>
          <CityDropdown name="City" stateFieldName={"stateID"} />
        </Grid.Col>
        <Grid.Col span={2}>
          <ShowroomDropdown name="Showroom" cityFieldName="cityID" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField name="mobNo" label="Mobile Number" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField name="email" label="Email" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField name="contactPerson" label="Contact person" />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextField name="customerNumber" label="Customer Number" />
        </Grid.Col>
        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid>
    </Form>
  );
}

export default CustomerForm;
