import {
  useTheme,
  useMediaQuery,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import * as React from "react";
import { useCreatePath, NumberField, useListContext } from "react-admin";
import { Link } from "react-router-dom";

import { Product } from "../types";

const useColsForWidth = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  if (xl) return 8;
  if (lg) return 6;
  if (md) return 4;
  if (sm) return 3;
  return 2;
};

const times = (nbChildren: number, fn: (key: number) => JSX.Element) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = () => {
  const { perPage } = useListContext();
  const cols = useColsForWidth();
  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {times(perPage, (key) => (
        <ImageListItem key={key}>
          <Box bgcolor="grey.300" height="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const LoadedGridList = () => {
  const { data } = useListContext();
  const cols = useColsForWidth();
  const createPath = useCreatePath();

  if (!data) return null;

  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {data.map((record: Product) => (
        <ImageListItem
          component={Link}
          key={record.id}
          to={createPath({
            resource: "products",
            id: record.id,
            type: "edit",
          })}
        >
          <img src={record.thumbnail} alt="" />
          <ImageListItemBar
            title={record.reference}
            subtitle={
              <span>
                {record.width}x{record.height},{" "}
                <NumberField
                  source="price"
                  record={record}
                  color="inherit"
                  options={{
                    style: "currency",
                    currency: "USD",
                  }}
                  sx={{
                    display: "inline",
                    fontSize: "1em",
                  }}
                />
              </span>
            }
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const GridList = () => {
  const { isLoading } = useListContext();
  return isLoading ? <LoadingGridList /> : <LoadedGridList />;
};

export default GridList;
