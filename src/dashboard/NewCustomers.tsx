/* eslint-disable react/jsx-no-useless-fragment */
import CustomerIcon from "@mui/icons-material/PersonAdd";
import { Avatar, Box, Button } from "@mui/material";
import { subDays } from "date-fns";
import { ListBase, WithListContext, SimpleList, useTranslate } from "react-admin";
import { Link } from "react-router-dom";

import CardWithIcon from "./CardWithIcon";

import { Customer } from "../types";

const renderAvatar = (customer: Customer) => (
  <Avatar
    src={`${customer.avatar}?size=32x32`}
    alt={`${customer.first_name} ${customer.last_name}`}
  />
);
const NewCustomers = () => {
  const translate = useTranslate();

  const aMonthAgo = subDays(new Date(), 30);
  aMonthAgo.setDate(aMonthAgo.getDate() - 30);
  aMonthAgo.setHours(0);
  aMonthAgo.setMinutes(0);
  aMonthAgo.setSeconds(0);
  aMonthAgo.setMilliseconds(0);

  return (
    <ListBase
      resource="customers"
      filter={{
        has_ordered: true,
        first_seen_gte: aMonthAgo.toISOString(),
      }}
      sort={{ field: "first_seen", order: "DESC" }}
      perPage={100}
      disableSyncWithLocation
    >
      <CardWithIcon
        to="/customers"
        icon={CustomerIcon}
        title={translate("pos.dashboard.new_customers")}
        subtitle={<WithListContext render={({ total }) => <>{total}</>} />}
      >
        <SimpleList<Customer> primaryText="%{first_name} %{last_name}" leftAvatar={renderAvatar} />
        <Box flexGrow={1}>&nbsp;</Box>
        <Button
          sx={{ marginBottom: 1 }}
          component={Link}
          to="/customers"
          size="small"
          color="primary"
        >
          <Box p={1} sx={{ color: "primary.main" }}>
            {translate("pos.dashboard.all_customers")}
          </Box>
        </Button>
      </CardWithIcon>
    </ListBase>
  );
};

export default NewCustomers;
