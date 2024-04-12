import { SxProps, Typography } from "@mui/material";
import * as React from "react";
import { memo } from "react";
import { FieldProps, useRecordContext } from "react-admin";

import AvatarField from "./AvatarField";

import { User } from "../types";

interface Props extends FieldProps<User> {
  size?: string;
  sx?: SxProps;
}

const FullNameField = (props: Props): JSX.Element => {
  const { size, sx } = props;
  const record = useRecordContext<User>();
  return record ? (
    <Typography
      variant="body2"
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      component="div"
      sx={sx}
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
      {record.name}
    </Typography>
  ) : (
    <> </>
  );
};

export default memo<Props>(FullNameField);
