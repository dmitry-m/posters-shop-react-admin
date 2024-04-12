/* eslint-disable no-param-reassign */
import { useMediaQuery, Theme } from "@mui/material";
import { subDays, startOfDay } from "date-fns";
import { useMemo, CSSProperties, useEffect } from "react";
import {
  Title,
  useAuthProvider,
  useGetIdentity,
  useGetList,
  usePermissions,
  useRedirect,
} from "react-admin";

import MonthlyRevenue from "./MonthlyRevenue";
import NbNewOrders from "./NbNewOrders";
import NewCustomers from "./NewCustomers";
import OrderChart from "./OrderChart";
import PendingOrders from "./PendingOrders";
import PendingReviews from "./PendingReviews";
import Welcome from "./Welcome";

import { MyAuthProvider } from "../providers/authProvider";
import { Order } from "../types";

interface OrderStats {
  revenue: number;
  nbNewOrders: number;
  pendingOrders: Order[];
}

interface State {
  nbNewOrders?: number;
  pendingOrders?: Order[];
  recentOrders?: Order[];
  revenue?: string;
}

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

const Spacer = () => <span style={{ width: "1em" }} />;
const VerticalSpacer = () => <span style={{ height: "1em" }} />;

const Dashboard = () => {
  const { isLoading, permissions } = usePermissions<"admin" | "user">();
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);
  const { data: orders } = useGetList<Order>(
    "commands",
    {
      filter: { date_gte: aMonthAgo.toISOString() },
      sort: { field: "date", order: "DESC" },
      pagination: { page: 1, perPage: 50 },
    },
    {
      enabled: permissions === "admin",
    },
  );

  const aggregation = useMemo<State>(() => {
    if (!orders) return {};
    const aggregations = orders
      .filter((order) => order.status !== "REVOKED")
      .reduce(
        (stats: OrderStats, order) => {
          if (order.status !== "REVOKED") {
            stats.revenue += order.total;
            stats.nbNewOrders += 1;
          }
          if (order.status === "ORDERED") {
            stats.pendingOrders.push(order);
          }
          return stats;
        },
        {
          revenue: 0,
          nbNewOrders: 0,
          pendingOrders: [],
        },
      );
    return {
      recentOrders: orders,
      revenue: aggregations.revenue.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      nbNewOrders: aggregations.nbNewOrders,
      pendingOrders: aggregations.pendingOrders,
    };
  }, [orders]);

  const { nbNewOrders, pendingOrders, revenue, recentOrders } = aggregation;

  if (isLoading) {
    return <div>Waiting for permissions...</div>;
  }

  if (permissions !== "admin") return <Welcome />;
  if (isXSmall) {
    return (
      <div>
        <div style={styles.flexColumn as CSSProperties}>
          <Welcome />
          <MonthlyRevenue value={revenue} />
          <VerticalSpacer />
          <NbNewOrders value={nbNewOrders} />
          <VerticalSpacer />
          <PendingOrders orders={pendingOrders} />
        </div>
      </div>
    );
  }

  if (isSmall) {
    return (
      <div style={styles.flexColumn as CSSProperties}>
        <div style={styles.singleCol}>
          <Welcome />
        </div>
        <div style={styles.flex}>
          <MonthlyRevenue value={revenue} />
          <Spacer />
          <NbNewOrders value={nbNewOrders} />
        </div>
        <div style={styles.singleCol}>
          <OrderChart orders={recentOrders} />
        </div>
        <div style={styles.singleCol}>
          <PendingOrders orders={pendingOrders} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Title title="ra.page.dashboard" />
      <Welcome />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <MonthlyRevenue value={revenue} />
            <Spacer />
            <NbNewOrders value={nbNewOrders} />
          </div>
          <div style={styles.singleCol}>
            <OrderChart orders={recentOrders} />
          </div>
          <div style={styles.singleCol}>
            <PendingOrders orders={pendingOrders} />
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            <PendingReviews />
            <Spacer />
            <NewCustomers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
