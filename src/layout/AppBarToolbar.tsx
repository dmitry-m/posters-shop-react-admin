import { LoadingIndicator, LocalesMenuButton } from "react-admin";

import { ThemeSwapper } from "../themes";

export const AppBarToolbar = () => (
  <>
    <LocalesMenuButton />
    <ThemeSwapper />
    <LoadingIndicator />
  </>
);

export default AppBarToolbar;
