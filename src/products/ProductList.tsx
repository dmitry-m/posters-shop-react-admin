import { Box, Chip, useMediaQuery, Theme } from "@mui/material";
import * as React from "react";
import {
  CreateButton,
  ExportButton,
  FilterButton,
  FilterForm,
  FilterContext,
  InputProps,
  ListBase,
  NumberInput,
  Pagination,
  ReferenceInput,
  SearchInput,
  SelectInput,
  SortButton,
  Title,
  TopToolbar,
  useTranslate,
  useGetResourceLabel,
} from "react-admin";

import Aside from "./Aside";
import ImageList from "./GridList";

const QuickFilter = ({ label }: InputProps) => {
  const translate = useTranslate();
  return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
};

export const productFilters = [
  <SearchInput source="search" alwaysOn key="search" />,
  <ReferenceInput
    source="category_id"
    reference="categories"
    sort={{ field: "id", order: "ASC" }}
    key="id"
  >
    <SelectInput source="name" />
  </ReferenceInput>,
  <NumberInput source="width_gte" key="wGte" />,
  <NumberInput source="width_lte" key="wLte" />,
  <NumberInput source="height_gte" key="hGte" />,
  <NumberInput source="height_lte" key="hLte" />,
  <QuickFilter
    label="resources.products.fields.stock_lte"
    source="stock_lte"
    defaultValue={10}
    key="sLte"
  />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar>
    {isSmall && <FilterButton />}
    <SortButton fields={["reference", "sales", "stock"]} />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const ProductList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <ListBase perPage={24} sort={{ field: "reference", order: "ASC" }}>
      <Title defaultTitle={getResourceLabel("products", 2)} />
      <Box display="flex" flexWrap="nowrap">
        <Aside />
        <Box
          sx={{
            mt: 1.2,
            display: "flex",
            flexWrap: "wrap",
            flex: "1 1 auto",
            alignContent: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <FilterContext.Provider value={productFilters}>
            <ListActions isSmall={isSmall} />
            {isSmall && (
              <Box m={1}>
                <FilterForm />
              </Box>
            )}
          </FilterContext.Provider>
          <Box sx={{ marginTop: 1 }}>
            <ImageList />
            <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
          </Box>
        </Box>
      </Box>
    </ListBase>
  );
};

export default ProductList;
