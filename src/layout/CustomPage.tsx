import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useAuthProvider, useRedirect } from "react-admin";

import { MyAuthProvider } from "../providers/authProvider";
import { customDarkTheme, customLightTheme } from "../themes";

const CustomPage = ({ children }: { children: React.ReactNode }) => {
  const redirect = useRedirect();
  const authProvider = useAuthProvider<MyAuthProvider>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });
  const savedThemeName = localStorage.getItem("themeName");
  const savedThemeColor = localStorage.getItem("themeColor");

  useEffect(() => {
    if (!savedThemeColor) localStorage.setItem("themeColor", prefersDarkMode ? "dark" : "light");
    void authProvider.getPermissions({}).then((permissions) => {
      if (permissions) redirect("/");
    });
  }, []);

  if (savedThemeName && savedThemeName !== "custom") {
    return children;
  }

  const theme =
    savedThemeColor === "dark" || (!savedThemeColor && prefersDarkMode)
      ? customDarkTheme
      : customLightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomPage;
