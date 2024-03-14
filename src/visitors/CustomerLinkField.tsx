import * as React from "react";
import { Link, FieldProps, useRecordContext } from "react-admin";

import FullNameField from "./FullNameField";

import { Customer } from "../types";

const CustomerLinkField = (_: FieldProps<Customer>): JSX.Element => {
  const record = useRecordContext<Customer>();
  if (!record) {
    return <> </>;
  }
  return (
    <Link to={`/customers/${record.id}`}>
      <FullNameField size="25" />
    </Link>
  );
};

CustomerLinkField.defaultProps = {
  source: "id",
  label: "resources.customers.fields.name",
};

export default CustomerLinkField;
