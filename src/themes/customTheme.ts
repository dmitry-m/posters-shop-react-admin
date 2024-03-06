import { alpha, createTheme, PaletteOptions, Theme } from "@mui/material";
import { ThemeOptions as MuiThemeOptions } from "@mui/material";

export type ComponentsTheme = {
  [key: string]: any;
};

export interface RaThemeOptions extends MuiThemeOptions {
  sidebar?: {
    width?: number;
    closedWidth?: number;
  };
  components?: ComponentsTheme;
}

export type ThemeType = "light" | "dark";

const componentsOverrides = (theme: Theme) => {
  const shadows = [
    alpha(theme.palette.primary.main, 0.2),
    alpha(theme.palette.primary.main, 0.1),
    alpha(theme.palette.primary.main, 0.05),
  ];
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined" as const,
      },
      styleOverrides: {
        sizeSmall: {
          padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          backgroundColor: theme.palette.background.paper,
          backgroundClip: "padding-box",
          "&.MuiCard-root": {
            backgroundColor: theme.palette.background.default,
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1.5),
          "&.MuiTableCell-sizeSmall": {
            padding: theme.spacing(1),
          },
          "&.MuiTableCell-paddingNone": {
            padding: 0,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { border: 0 },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    RaList: {
      styleOverrides: {
        root: {
          "& .RaList-content": {
            marginRight: 0 + "!important",
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-headerCell": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          },
        },
      },
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("sm")]: {
            minHeight: theme.spacing(6),
          },
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          "& .RaLayout-appFrame": { marginTop: theme.spacing(4) },
          "& .RaLayout-content": {
            borderRadius: theme.spacing(0.8),
            backgroundColor: theme.palette.background.paper,
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
              marginRight: 0,
            },
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: theme.spacing(1.35),
          "&:hover": {
            borderRadius: theme.spacing(0.8),
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiSvgIcon-root": {
            fill: theme.palette.text.primary,
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(1)} ${theme.spacing(1.6)} !important`,
          marginLeft: theme.spacing(1.4),
          marginTop: theme.spacing(0.6),
          color: theme.palette.text.primary,
          "&.RaMenuItemLink-active": {
            fontWeight: 500,
            borderRadius: theme.spacing(0.8),
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            "& .MuiSvgIcon-root": {
              fill: theme.palette.primary.main,
            },
          },
          "& .RaMenuItemLink-icon": {
            minWidth: theme.spacing(3.8),
          },
          "&:first-of-type": {
            marginTop: 0,
          },
        },
      },
    },
  };
};

const alert = {
  error: { main: "#DB488B" },
  warning: { main: "#F2E963" },
  info: { main: "#3ED0EB" },
  success: { main: "#0FBF9F" },
};

const darkPalette: PaletteOptions = {
  primary: { main: "#ec407a", light: "#4B1933", contrastText: "#0a0f23" },
  secondary: { main: "#fde8ef", light: "#ea7da1", dark: "#f15b8d" },
  background: { default: "#030614", paper: "#0a0f23" },
  text: { primary: "#fff" },
  ...alert,
  mode: "dark" as "dark",
};

const lightPalette: PaletteOptions = {
  primary: { main: "#ec407a", light: "#fde8ef", contrastText: "#fff" },
  secondary: { main: "#ec407a", light: "#eb6290", dark: "#c21f56" },
  background: { default: "#ffffff", paper: "#eef2f6" },
  text: {
    primary: "#364152",
    secondary: "#364152",
  },
  ...alert,
  mode: "light" as "light",
};

const createRadiantTheme = (palette: RaThemeOptions["palette"]) => {
  const themeOptions = {
    palette,
    shape: { borderRadius: 6 },
    sidebar: { width: 244, closedWidth: 82 },
    spacing: 10,
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontWeight: 500,
        fontSize: "6rem",
      },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 800 },
      h5: { fontWeight: 900 },
      button: { textTransform: undefined, fontWeight: 700 },
    },
  };
  const theme = createTheme(themeOptions);
  theme.components = componentsOverrides(theme);
  return theme;
};

export const customLightTheme = createRadiantTheme(lightPalette);
export const customDarkTheme = createRadiantTheme(darkPalette);
