import { Card, CardHeader, List } from "@mui/material";
import * as React from "react";
import { useTranslate } from "react-admin";

import { PendingOrder } from "./PendingOrder";

import { Order } from "../types";

interface Props {
  orders?: Order[];
}

const PendingOrders = (props: Props) => {
  const { orders = [] } = props;
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

PendingOrders.defaultProps = {
  orders: [],
};

export default PendingOrders;
