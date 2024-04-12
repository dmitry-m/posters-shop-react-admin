import { Box, useMediaQuery, Theme } from "@mui/material";
import * as React from "react";
import { AppBar, TitlePortal } from "react-admin";

import { AppBarToolbar } from "./AppBarToolbar";
import Logo from "./Logo";
import CustomUserMenu from "./UserMenu";

const CustomAppBar = () => {
  const isLargeEnough = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return (
    <AppBar color="secondary" toolbar={<AppBarToolbar />} userMenu={<CustomUserMenu />}>
      <TitlePortal />
      {isLargeEnough && <Logo />}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
