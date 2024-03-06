import * as React from "react";
import {
  DateInput,
  Edit,
  NullableBooleanInput,
  TextInput,
  PasswordInput,
  SimpleForm,
  useTranslate,
} from "react-admin";
import { Grid, Box, Typography } from "@mui/material";

import FullNameField from "./FullNameField";
import { validateForm } from "./UserCreate";

const UserEdit = () => {
  const translate = useTranslate();
  return (
    <Edit title={<UserTitle />}>
      <SimpleForm validate={validateForm}>
        <div>
          <Grid container width={{ xs: "100%", xl: 800 }} spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                {translate("resources.customers.fieldGroups.identity")}
              </Typography>
              <TextInput source="fullName" isRequired fullWidth />
              <TextInput type="email" source="email" isRequired fullWidth />

              <Typography variant="h6" gutterBottom>
                {translate("resources.customers.fieldGroups.change_password")}
              </Typography>
              <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                  <PasswordInput source="password" fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <PasswordInput source="confirm_password" fullWidth />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                {translate("resources.customers.fieldGroups.stats")}
              </Typography>

              <NullableBooleanInput fullWidth source="has_newsletter" />
            </Grid>
          </Grid>
        </div>
      </SimpleForm>
    </Edit>
  );
};

const UserTitle = () => <FullNameField size="32" sx={{ margin: "5px 0" }} />;

export default UserEdit;
