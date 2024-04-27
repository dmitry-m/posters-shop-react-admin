import * as React from "react";
import {
  AutocompleteInput,
  DateInput,
  ReferenceInput,
  SearchInput,
  SelectInput,
} from "react-admin";

import { Customer } from "../types";

const reviewFilters = [
  <SearchInput source="search" alwaysOn key="searchFilter" />,
  <SelectInput
    source="status"
    choices={[
      { id: "accepted", name: "Accepted" },
      { id: "pending", name: "Pending" },
      { id: "rejected", name: "Rejected" },
    ]}
    key="statusFilter"
  />,
  <ReferenceInput source="customer_id" reference="customers" key="customerFilter">
    <AutocompleteInput
      optionText={(choice?: Customer) =>
        choice?.id ? `${choice.first_name} ${choice.last_name}` : ""
      }
      sx={{ minWidth: 200 }}
      key="customerAutocomplete"
    />
  </ReferenceInput>,
  <ReferenceInput source="product_id" reference="products" key="productFilter">
    <AutocompleteInput optionText="reference" key="productAutocomplete" />
  </ReferenceInput>,
  <DateInput source="date_gte" key="dateGteFilter" />,
  <DateInput source="date_lte" key="dateLteFilter" />,
];

export default reviewFilters;
