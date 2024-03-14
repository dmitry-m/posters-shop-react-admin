import { SxProps, Typography } from "@mui/material";
import * as React from "react";
import { memo } from "react";
import { FieldProps, useRecordContext } from "react-admin";

import AvatarField from "./AvatarField";

import { User } from "../types";

interface Props extends FieldProps<User> {
  size?: string;
  sx?: SxProps;
  label?: string;
  source?: string;
}

const FullNameField = (props: Props) => {
  const { size } = props;
  const record = useRecordContext<User>();
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
  size: "small",
  sx: {},
};

export default memo<Props>(FullNameField);
