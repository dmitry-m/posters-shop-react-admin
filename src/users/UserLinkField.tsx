import * as React from "react";
import { Link, FieldProps, useRecordContext } from "react-admin";

import FullNameField from "./FullNameField";
import { User } from "../types";

const UserLinkField = (_: FieldProps<User>) => {
  const record = useRecordContext<User>();
  if (!record) {
    return null;
  }
  return (
    <Link to={`/users/${record.id}`}>
      <FullNameField />
    </Link>
  );
};

UserLinkField.defaultProps = {
  source: "name",
};

export default UserLinkField;
