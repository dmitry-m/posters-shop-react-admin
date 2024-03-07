/* eslint-disable react/jsx-key */
import { useMediaQuery, Theme } from "@mui/material";
import * as React from "react";
import { BooleanField, Datagrid, List, SearchInput, TextField } from "react-admin";

import MobileGrid from "./MobileGrid";
import RoleField from "./RoleField";
import RoleInput from "./RoleInput";
import UserLinkField from "./UserLinkField";

const userFilters = [<SearchInput source="q" alwaysOn />, <RoleInput source="role" alwaysOn />];

const UserList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={userFilters} sort={{ field: "email", order: "DESC" }} perPage={50}>
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid
          optimized
          rowClick="edit"
          sx={{
            "& .column-groups": {
              md: { display: "none" },
              lg: { display: "table-cell" },
            },
          }}
        >
          <UserLinkField />
          <TextField source="email" />
          <BooleanField source="isAdmin" label="Администратор" />
          <RoleField source="role" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
