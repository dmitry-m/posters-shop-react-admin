// in src/comments.js
import { Box, Card, CardHeader } from "@mui/material";
import * as React from "react";
import { EditButton, useTranslate, RecordContextProvider, useListContext } from "react-admin";

import AvatarField from "./AvatarField";
import RoleField from "./RoleField";

import { User } from "../types";

const MobileGrid = () => {
  const translate = useTranslate();
  const { data, isLoading } = useListContext<User>();

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <Box margin="0.5em">
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Card sx={{ margin: "0.5rem 0" }}>
            <CardHeader
              title={`${record.name}`}
              subheader={
                <>
                  {translate("resources.users.fields.role")}
                  &nbsp;
                  <RoleField source="role" />
                </>
              }
              avatar={<AvatarField size="45" />}
              action={<EditButton />}
            />
          </Card>
        </RecordContextProvider>
      ))}
    </Box>
  );
};

export default MobileGrid;
