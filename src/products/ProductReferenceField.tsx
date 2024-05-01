import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const ProductReferenceField = ({
  source = "product_id",
  ...props
}: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">) => (
  <ReferenceField label="Product" source="product_id" reference="products" {...props}>
    <TextField source="reference" />
  </ReferenceField>
);

export default ProductReferenceField;
