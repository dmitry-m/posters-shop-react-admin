import { Theme, useMediaQuery } from "@mui/material";
import { LoadingIndicator, LocalesMenuButton } from "react-admin";

import { ThemeSwapper } from "../themes";

export const AppBarToolbar = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!isSmall && <LocalesMenuButton />}
      <ThemeSwapper />
      <LoadingIndicator />
    </>
  );
};

export default AppBarToolbar;
