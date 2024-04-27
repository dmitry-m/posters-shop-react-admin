import { ListItem, ListItemAvatar, ListItemText, Link as MuiLink } from "@mui/material";
import * as React from "react";
import {
  useCreatePath,
  ReferenceField,
  FunctionField,
  TextField,
  useRecordContext,
} from "react-admin";
import { Link } from "react-router-dom";

import { Customer, Review } from "../types";
import AvatarField from "../visitors/AvatarField";

export const ReviewItem = () => {
  const record = useRecordContext<Review>();
  const createPath = useCreatePath();
  if (!record) {
    return null;
  }
  return (
    <MuiLink
      to={createPath({
        resource: "reviews",
        type: "edit",
        id: record.id,
      })}
      component={Link}
      underline="none"
      color="inherit"
    >
      <ListItem button>
        <ListItemAvatar>
          <ReferenceField source="customer_id" reference="customers" link={false}>
            <AvatarField size="40" />
          </ReferenceField>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <ReferenceField source="customer_id" reference="customers" link={false}>
                <FunctionField<Customer>
                  render={(item) => `${item.first_name} ${item.last_name}`}
                  variant="subtitle1"
                />
              </ReferenceField>{" "}
              on{" "}
              <ReferenceField source="product_id" reference="products" link={false}>
                <TextField source="reference" variant="subtitle1" />
              </ReferenceField>
            </>
          }
          secondary={record.comment}
          secondaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </MuiLink>
  );
};

export default ReviewItem;
