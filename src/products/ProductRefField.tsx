import { Link as MuiLink } from "@mui/material";
import * as React from "react";
import { useRecordContext } from "react-admin";
import { Link } from "react-router-dom";

import { Product } from "../types";

const ProductRefField = () => {
  const record = useRecordContext<Product>();
  return record ? (
    <MuiLink component={Link} to={`/products/${record.id}`} underline="none">
      {record.reference}
    </MuiLink>
  ) : null;
};

ProductRefField.defaultProps = {
  source: "id",
  label: "Reference",
};

export default ProductRefField;
