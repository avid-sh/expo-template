import { UnistylesRegistry } from "react-native-unistyles";

import { darkTheme, lightTheme } from "./themes";

export { useNavigationTheme, useTheme } from "./useTheme";

/** Function to register all themes that needs to be called once at the app root. */
export function registerThemes(adaptive: boolean = true) {
  UnistylesRegistry.addThemes({
    light: lightTheme,
    dark: darkTheme,
  }).addConfig({ adaptiveThemes: adaptive });
}

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
