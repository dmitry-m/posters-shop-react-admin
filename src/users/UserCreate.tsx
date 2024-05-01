/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import { Typography } from "@mui/material";
import * as React from "react";
import { Create, SimpleForm, useTranslate, email } from "react-admin";

import { UserForm } from "./UserForm";

import { User } from "../types";

interface Errors {
  [key: string]:
    | string
    | {
        message: string;
        args: Record<string, string | number>;
      };
}

export const validateForm = (values: Record<string, string>): Errors => {
  const errors: Errors = {};

  const requiredFields = ["name", "password", "confirm_password", "email"] as const;
  const minLengthFields = ["password", "confirm_password"] as const;

  for (const field of requiredFields) {
    if (!values[field]) errors[field] = "ra.validation.required";
  }

  for (const field of minLengthFields) {
    if (values[field]?.length < 6) {
      errors[field] = { message: "ra.validation.minLength", args: { min: 6 } };
    }
  }

  if (values.confirm_password !== values.password) {
    errors.password = "ra.validation.notMatch";
    errors.confirm_password = "ra.validation.notMatch";
  }

  if (values.email && email()(values.email)) {
    errors.email = email()(values.email);
  }

  return errors;
};

const SectionTitle = ({ label }: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {translate(label)}
    </Typography>
  );
};

export const transform = (data: User & { confirm_password?: string }) => {
  const { confirm_password, ...dataWithoutConfirmPassword } = data;

  return dataWithoutConfirmPassword;
};

const UserCreate = () => {
  return (
    <Create transform={transform} title={<SectionTitle label="resources.users.page.create" />}>
      <SimpleForm
        defaultValues={{
          is_admin: false,
          role: "user",
        }}
        validate={validateForm}
      >
        <UserForm />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
