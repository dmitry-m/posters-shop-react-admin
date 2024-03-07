import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  Create,
  DateInput,
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  email,
} from "react-admin";

interface Errors {
  [key: string]:
    | string
    | {
        message: string;
        args: any;
      };
}

export const validateForm = (values: Record<string, any>): Record<string, any> => {
  const errors: Errors = {};
  if (!values.first_name) {
    errors.first_name = "ra.validation.required";
  }
  if (!values.last_name) {
    errors.last_name = "ra.validation.required";
  }
  if (!values.email) {
    errors.email = "ra.validation.required";
  } else {
    const error = email()(values.email);
    if (error) {
      errors.email = error;
    }
  }
  return errors;
};

const Separator = () => <Box pt="1em" />;

const SectionTitle = ({ label }: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {translate(label)}
    </Typography>
  );
};

const UserCreate = () => (
  <Create>
    <SimpleForm
      sx={{ maxWidth: 500 }}
      // Here for the GQL provider
      defaultValues={{
        birthday: new Date(),
        first_seen: new Date(),
        // last_seen: new Date(),
        has_ordered: false,
        latest_purchase: new Date(),
        has_newsletter: false,
        groups: [],
        nb_commands: 0,
        total_spent: 0,
      }}
      validate={validateForm}
    >
      <SectionTitle label="resources.customers.fieldGroups.identity" />
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="first_name" isRequired fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="last_name" isRequired fullWidth />
        </Box>
      </Box>
      <TextInput type="email" source="email" isRequired fullWidth />
      <DateInput source="birthday" />
      <Separator />
      <SectionTitle label="resources.customers.fieldGroups.address" />
      <TextInput source="address" multiline fullWidth helperText={false} />
      <Box display={{ xs: "block", sm: "flex" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="city" fullWidth helperText={false} />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="stateAbbr" fullWidth helperText={false} />
        </Box>
        <Box flex={2}>
          <TextInput source="zipcode" fullWidth helperText={false} />
        </Box>
      </Box>
      <Separator />
      <SectionTitle label="resources.customers.fieldGroups.password" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
