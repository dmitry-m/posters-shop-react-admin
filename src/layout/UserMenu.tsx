import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { MenuItem, ListItemIcon, ListItemText, useMediaQuery, Theme } from "@mui/material";
import * as React from "react";
import { Ref } from "react";
import {
  Logout,
  UserMenu,
  useUserMenu,
  Link,
  useTranslate,
  useGetIdentity,
  LocalesMenuButton,
} from "react-admin";

const SettingsMenuItem = React.forwardRef((props, ref: Ref<HTMLLIElement>) => {
  const { onClose } = useUserMenu();
  const translate = useTranslate();
  const { data } = useGetIdentity();

  return (
    <Link to={`./users/${data?.id ?? ""}`}>
      <MenuItem onClick={onClose} ref={ref} {...props} style={{ width: "100%" }}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText> {translate(`ra.auth.user_menu`)}</ListItemText>
      </MenuItem>
    </Link>
  );
});

SettingsMenuItem.displayName = "SettingsMenuItem";

export const CustomUserMenu = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <UserMenu>
      <SettingsMenuItem />
      {isSmall && (
        <MenuItem style={{ padding: "0 0 0 12px" }}>
          <LocalesMenuButton />
        </MenuItem>
      )}
      <Logout />
    </UserMenu>
  );
};

export default CustomUserMenu;
