import * as React from "react";
import { SelectInput, SelectInputProps } from "react-admin";

const roles = [
  { id: "admin", name: "resources.roles.admin" },
  { id: "user", name: "resources.roles.user" },
];

const RoleInput = (props: SelectInputProps) => (
  <SelectInput {...props} source="role" translateChoice choices={roles} />
);

export default RoleInput;
