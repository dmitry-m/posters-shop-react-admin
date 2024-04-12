import * as React from "react";
import { Edit, SimpleForm } from "react-admin";

import FullNameField from "./FullNameField";
import { transform, validateForm } from "./UserCreate";
import { UserForm } from "./UserForm";

const UserTitle = () => <FullNameField size="32" sx={{ margin: "5px 0" }} />;

const UserEdit = () => {
  return (
    <Edit transform={transform} title={<UserTitle />}>
      <SimpleForm validate={validateForm}>
        <UserForm />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
