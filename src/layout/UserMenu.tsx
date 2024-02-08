import * as React from "react";
import { Logout, UserMenu, useUserMenu, Link } from "react-admin";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SettingsMenuItem = React.forwardRef((props, ref) => {
  const { onClose } = useUserMenu();

  return (
    <MenuItem onClick={onClose} ref={ref} {...props}>
      <ListItemIcon>
        <AccountCircleOutlinedIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>
        <Link to="./profile">Profile</Link>
      </ListItemText>
    </MenuItem>
  );
});

SettingsMenuItem.displayName = "SettingsMenuItem";

export const CustomUserMenu = () => {
  return (
    <UserMenu>
      <SettingsMenuItem />
      <Logout />
    </UserMenu>
  );
};

export default CustomUserMenu;
