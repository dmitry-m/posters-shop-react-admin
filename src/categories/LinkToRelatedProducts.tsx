import { Button } from "@mui/material";
import queryString from "query-string";
import * as React from "react";
import { useTranslate, useRecordContext } from "react-admin";
import { Link } from "react-router-dom";

import products from "../products";
import { Category } from "../types";

const LinkToRelatedProducts = () => {
  const record = useRecordContext<Category>();
  const translate = useTranslate();
  if (!record) return null;
  return (
    <Button
      size="small"
      color="primary"
      component={Link}
      to={{
        pathname: "/products",
        search: queryString.stringify({
          filter: JSON.stringify({ category_id: record.id }),
        }),
      }}
      sx={{ display: "inline-flex", alignItems: "center" }}
    >
      <products.icon sx={{ marginRight: "0.5em", fontSize: "1.5em" }} />
      {translate("resources.categories.fields.products")}
    </Button>
  );
};

export default LinkToRelatedProducts;
