import LabelIcon from "@mui/icons-material/Label";
import Box from "@mui/material/Box";
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import categories from "../categories";
import invoices from "../invoices";
import orders from "../orders";
import products from "../products";
import reviews from "../reviews";
import visitors from "../visitors";

type MenuName = "menuCatalog" | "menuSales" | "menuCustomers" | "menuDashboard";

const Menu = ({ dense = false }: MenuProps) => {
  const translate = useTranslate();
  const [open] = useSidebarState();

  return (
    <Box
      sx={{
        width: open ? 230 : 68,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <MenuItemLink
        to="/users"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.users.name`, {
          smart_count: 2,
        })}
        leftIcon={<visitors.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/commands"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.commands.name`, {
          smart_count: 2,
        })}
        leftIcon={<orders.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/invoices"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.invoices.name`, {
          smart_count: 2,
        })}
        leftIcon={<invoices.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/products"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.products.name`, {
          smart_count: 2,
        })}
        leftIcon={<products.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/categories"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.categories.name`, {
          smart_count: 2,
        })}
        leftIcon={<categories.icon />}
        dense={dense}
      />

      <MenuItemLink
        to="/customers"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.customers.name`, {
          smart_count: 2,
        })}
        leftIcon={<visitors.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/segments"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.segments.name`, {
          smart_count: 2,
        })}
        leftIcon={<LabelIcon />}
        dense={dense}
      />
      <MenuItemLink
        to="/reviews"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.reviews.name`, {
          smart_count: 2,
        })}
        leftIcon={<reviews.icon />}
        dense={dense}
      />
    </Box>
  );
};

export default Menu;
