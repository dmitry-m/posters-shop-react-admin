/* eslint-disable react/jsx-key */
import { ManageAccounts } from "@mui/icons-material";
import { useMediaQuery, Theme, Chip } from "@mui/material";
import * as React from "react";
import {
  BooleanField,
  BulkDeleteButton,
  BulkExportButton,
  BulkUpdateButton,
  Datagrid,
  List,
  SearchInput,
  TextField,
  useListContext,
  useTranslate,
} from "react-admin";

import MobileGrid from "./MobileGrid";
import RoleField from "./RoleField";
import RoleInput from "./RoleInput";
import UserLinkField from "./UserLinkField";

import { User } from "../types";

const QuickFilter = ({
  label,
  source,
  defaultValue,
}: {
  label: string;
  source: string;
  defaultValue: boolean | string;
}) => {
  const translate = useTranslate();
  return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const userFilters = [
  <SearchInput source="search" alwaysOn />,
  <RoleInput source="role" alwaysOn />,
  <QuickFilter source="is_admin" label="resources.users.roles.admin" defaultValue />,
];
const PostBulkActionButtons = () => {
  const { selectedIds, data } = useListContext();
  const selectedRows = data.filter((row: User) => selectedIds.includes(row.id));
  const admins = selectedRows.some((row: User) => row.is_admin);
  const users = selectedRows.some((row: User) => !row.is_admin);

  return (
    <>
      {users && (
        <BulkUpdateButton
          label="resources.users.actions.make_admin"
          data={{ is_admin: true, role: "admin" }}
          icon={<ManageAccounts />}
        />
      )}
      {admins && (
        <BulkUpdateButton
          label="resources.users.actions.make_user"
          data={{ is_admin: false, role: "user" }}
          icon={<ManageAccounts />}
        />
      )}
      <BulkDeleteButton />
      <BulkExportButton />
    </>
  );
};
const UserList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={userFilters} sort={{ field: "email", order: "DESC" }} perPage={50}>
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid
          bulkActionButtons={<PostBulkActionButtons />}
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
          <BooleanField source="is_admin" label="resources.users.fields.is_admin" />
          <RoleField source="role" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
