import { useMediaQuery, Divider, Tabs, Tab, Theme } from "@mui/material";
import * as React from "react";
import { useCallback } from "react";
import {
  AutocompleteInput,
  BooleanField,
  Count,
  DatagridConfigurable,
  DateField,
  DateInput,
  ExportButton,
  FilterButton,
  List,
  ListControllerResult,
  NullableBooleanInput,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SelectColumnsButton,
  TextField,
  TextInput,
  TopToolbar,
  useListContext,
} from "react-admin";

import MobileGrid from "./MobileGrid";
import NbItemsField from "./NbItemsField";

import { Customer, Order } from "../types";
import AddressField from "../visitors/AddressField";
import CustomerReferenceField from "../visitors/CustomerReferenceField";

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <ExportButton />
  </TopToolbar>
);

const orderFilters = [
  <SearchInput source="search" alwaysOn key="searchFilter" />,
  <ReferenceInput source="customer_id" reference="customers" key="customerFilter">
    <AutocompleteInput
      optionText={(choice?: Customer) =>
        choice?.id ? `${choice.first_name} ${choice.last_name}` : ""
      }
      sx={{ minWidth: 200 }}
    />
  </ReferenceInput>,
  <DateInput source="date_gte" key="dateGteFilter" />,
  <DateInput source="date_lte" key="dateLteFilter" />,
  <TextInput source="total_gte" key="totalGteFilter" />,
  <NullableBooleanInput source="returned" key="returnedFilter" />,
];

const tabs = [
  { id: "ORDERED", name: "ORDERED" },
  { id: "DELIVERED", name: "DELIVERED" },
  { id: "REVOKED", name: "REVOKED" },
];

interface MyOrderListController extends ListControllerResult {
  filterValues: Order;
  displayedFilters: { [key: keyof Order]: boolean };
}

const TabbedDatagrid = () => {
  const listContext = useListContext<Order>();
  const { filterValues, setFilters, displayedFilters } = listContext as MyOrderListController;
  const isXSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  const handleChange = useCallback(
    (event: React.ChangeEvent<object>, value: string) => {
      if (setFilters) {
        setFilters({ ...filterValues, status: value }, displayedFilters, false);
      }
    },
    [displayedFilters, filterValues, setFilters],
  );

  return (
    <>
      <Tabs
        variant="fullWidth"
        centered
        value={filterValues.status}
        indicatorColor="primary"
        onChange={handleChange}
      >
        {tabs.map((choice) => (
          <Tab
            key={choice.id}
            label={
              <span>
                {choice.name} (
                <Count
                  filter={{
                    ...filterValues,
                    status: choice.name,
                  }}
                  sx={{ lineHeight: "inherit" }}
                />
                )
              </span>
            }
            value={choice.id}
          />
        ))}
      </Tabs>
      <Divider />
      {isXSmall ? (
        <MobileGrid />
      ) : (
        <>
          {filterValues.status === "ORDERED" && (
            <DatagridConfigurable
              rowClick="edit"
              omit={["total_ex_taxes", "delivery_fees", "taxes"]}
            >
              <DateField source="date" showTime />
              <TextField source="reference" />
              <CustomerReferenceField />
              <ReferenceField
                source="customer_id"
                reference="customers"
                link={false}
                label="resources.commands.fields.address"
              >
                <AddressField />
              </ReferenceField>
              <NbItemsField />
              <NumberField
                source="total_ex_taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="delivery_fees"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="total"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                sx={{ fontWeight: "bold" }}
              />
            </DatagridConfigurable>
          )}
          {filterValues.status === "DELIVERED" && (
            <DatagridConfigurable
              rowClick="edit"
              omit={["total_ex_taxes", "delivery_fees", "taxes"]}
            >
              <DateField source="date" showTime />
              <TextField source="reference" />
              <CustomerReferenceField />
              <ReferenceField
                source="customer_id"
                reference="customers"
                link={false}
                label="resources.commands.fields.address"
              >
                <AddressField />
              </ReferenceField>
              <NbItemsField />
              <NumberField
                source="total_ex_taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="delivery_fees"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="total"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                sx={{ fontWeight: "bold" }}
              />
              <BooleanField source="returned" sx={{ mt: -0.5, mb: -0.5 }} />
            </DatagridConfigurable>
          )}
          {filterValues.status === "REVOKED" && (
            <DatagridConfigurable
              rowClick="edit"
              omit={["total_ex_taxes", "delivery_fees", "taxes"]}
            >
              <DateField source="date" showTime />
              <TextField source="reference" />
              <CustomerReferenceField />
              <ReferenceField
                source="customer_id"
                reference="customers"
                link={false}
                label="resources.commands.fields.address"
              >
                <AddressField />
              </ReferenceField>
              <NbItemsField />
              <NumberField
                source="total_ex_taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="delivery_fees"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="taxes"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
              />
              <NumberField
                source="total"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                sx={{ fontWeight: "bold" }}
              />
              <BooleanField source="returned" sx={{ mt: -0.5, mb: -0.5 }} />
            </DatagridConfigurable>
          )}
        </>
      )}
    </>
  );
};

const OrderList = () => (
  <List
    filterDefaultValues={{ status: "ORDERED" }}
    sort={{ field: "date", order: "DESC" }}
    perPage={25}
    filters={orderFilters}
    actions={<ListActions />}
  >
    <TabbedDatagrid />
  </List>
);

export default OrderList;
