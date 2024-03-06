import * as React from "react";
import { SxProps, Typography } from "@mui/material";
import { memo } from "react";

import { FieldProps, useRecordContext } from "react-admin";
import AvatarField from "./AvatarField";
import { Customer } from "../types";

interface Props extends FieldProps<Customer> {
  size?: string;
  sx?: SxProps;
}

const FullNameField = (props: Props) => {
  const { size } = props;
  const record = useRecordContext<Customer>();
  return record ? (
    <Typography
      variant="body2"
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      component="div"
      sx={props.sx}
    >
      <AvatarField
        record={record}
        size={size}
        sx={{
          mr: 1,
          mt: -0.5,
          mb: -0.5,
        }}
      />
      {record.fullName}
    </Typography>
  ) : null;
};

FullNameField.defaultProps = {
  source: "fullName" as const,
  label: "resources.users.fields.name",
};

export default memo<Props>(FullNameField);
