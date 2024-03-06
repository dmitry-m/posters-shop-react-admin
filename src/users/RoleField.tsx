import * as React from "react";
import { Stack, Chip } from "@mui/material";
import { FieldProps, useTranslate, useRecordContext } from "react-admin";
import { Customer } from "../types";

const RoleField = (_: FieldProps) => {
  const translate = useTranslate();
  const record = useRecordContext<Customer>();
  if (!record || !record.role) {
    return null;
  }
  return (
    <Chip
      size="small"
      key={record.role}
      label={translate("roles." + record.role)}
    />
  );
};

export default RoleField;
