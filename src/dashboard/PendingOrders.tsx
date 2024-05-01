import { Card, CardHeader, List } from "@mui/material";
import * as React from "react";
import { useTranslate } from "react-admin";

import { PendingOrder } from "./PendingOrder";

import { Order } from "../types";

interface Props {
  orders?: Order[];
}

const PendingOrders = ({ orders = [] }: Props) => {
  const translate = useTranslate();

  return (
    <Card sx={{ flex: 1 }}>
      <CardHeader title={translate("pos.dashboard.pending_orders")} />
      <List dense>
        {orders.map((record) => (
          <PendingOrder key={record.id} order={record} />
        ))}
      </List>
    </Card>
  );
};

export default PendingOrders;
