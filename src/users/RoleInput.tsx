import * as React from "react";
import { SelectInput, SelectInputProps } from "react-admin";

import roles from "./roles";

const RoleInput = (props: SelectInputProps) => (
  <SelectInput {...props} source="role" translateChoice choices={roles} />
);

export default RoleInput;
