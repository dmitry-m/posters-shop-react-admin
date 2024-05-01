import * as React from "react";
import { ReferenceField, ReferenceFieldProps } from "react-admin";

import FullNameField from "./FullNameField";

const CustomerReferenceField = ({
  source = "customer_id",
  ...props
}: Omit<ReferenceFieldProps, "reference" | "children" | "source"> & {
  source?: string;
}) => (
  <ReferenceField source="customer_id" reference="customers" {...props}>
    <FullNameField />
  </ReferenceField>
);

export default CustomerReferenceField;
