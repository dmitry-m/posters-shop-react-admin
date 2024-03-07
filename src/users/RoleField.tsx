import { Stack, Chip } from "@mui/material";
import * as React from "react";
import { FieldProps, useTranslate, useRecordContext } from "react-admin";

import { User } from "../types";

const RoleField = (_: FieldProps) => {
  const translate = useTranslate();
  const record = useRecordContext<User>();
  if (!record || !record.role) {
    return null;
  }
  return (
    <Chip size="small" key={record.role} label={translate(`resources.roles.${record.role}`)} />
  );
};

export default RoleField;
