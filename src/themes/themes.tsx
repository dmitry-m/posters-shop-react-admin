import { RaThemeOptions, defaultLightTheme, defaultDarkTheme } from "react-admin";

import { customDarkTheme, customLightTheme } from "./customTheme";
import { softLightTheme, softDarkTheme } from "./softTheme";

export type ThemeName = "custom" | "default" | "soft";

export interface Theme {
  name: ThemeName;
  light: RaThemeOptions;
  dark?: RaThemeOptions;
}

export const themes: Theme[] = [
  { name: "custom", light: customLightTheme, dark: customDarkTheme },
  { name: "soft", light: softLightTheme, dark: softDarkTheme },
  { name: "default", light: defaultLightTheme, dark: defaultDarkTheme },
];
