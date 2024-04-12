import { useMediaQuery, Theme } from "@mui/material";
import * as React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  List,
  NullableBooleanInput,
  NumberField,
  SearchInput,
} from "react-admin";

import ColoredNumberField from "./ColoredNumberField";
import CustomerLinkField from "./CustomerLinkField";
import MobileGrid from "./MobileGrid";
import SegmentInput from "./SegmentInput";
import SegmentsField from "./SegmentsField";
import VisitorListAside from "./VisitorListAside";

const visitorFilters = [
  <SearchInput source="search" alwaysOn key="search" />,
  <DateInput source="last_seen_gte" key="dateGte" />,
  <DateInput source="last_seen_lte" key="dateLte" />,
  <NullableBooleanInput source="has_ordered" key="ordered" />,
  <NullableBooleanInput source="has_newsletter" defaultValue key="news" />,
  <SegmentInput source="groups" key="segment" />,
];

const VisitorList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <List
      filters={isSmall ? visitorFilters : visitorFilters}
      sort={{ field: "last_seen", order: "DESC" }}
      perPage={25}
      aside={<VisitorListAside />}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid
          optimized
          rowClick="edit"
          sx={{
            "& .column-groups": {
              md: { display: "none" },
              lg: { display: "table-cell" },
            },
          }}
        >
          <CustomerLinkField />
          <DateField source="last_seen" />
          <NumberField source="nb_commands" label="resources.customers.fields.commands" />
          <ColoredNumberField
            source="total_spent"
            options={{ style: "currency", currency: "USD" }}
          />
          <DateField source="latest_purchase" showTime />
          <BooleanField source="has_newsletter" label="News." />
          <SegmentsField source="groups" />
        </Datagrid>
      )}
    </List>
  );
};

export default VisitorList;
