import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import {
  TextInput,
  useTranslate,
  PasswordInput,
  SelectInput,
  NullableBooleanInput,
} from "react-admin";

import roles from "./roles";

export const UserForm = () => {
  const translate = useTranslate();

  return (
    <Grid container width={{ xs: "100%", xl: 800 }} spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {translate("resources.customers.fieldGroups.identity")}
        </Typography>
        <TextInput source="name" isRequired fullWidth />
        <TextInput type="email" source="email" isRequired fullWidth />
        <TextInput type="avatar" source="avatar" isRequired fullWidth />
        <SelectInput source="role" translateChoice choices={roles} />
        <NullableBooleanInput fullWidth source="is_admin" />
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
    </Grid>
  );
};

export default UserForm;
