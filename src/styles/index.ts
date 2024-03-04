import { UnistylesRegistry } from "react-native-unistyles";

import { colours } from "./colours";

/**
 * The default theme of the app.
 *
 * `darkTheme` extends from this theme, so `spacing` and `radius` settings are
 * inherited by it.
 */
const lightTheme = Object.freeze({
  colours: {
    ...colours,

    app: Object.freeze({
      background: colours.white,
      foreground: colours.slate[950],
      card: colours.white,
      cardForeground: colours.slate[950],
      popover: colours.white,
      popoverForeground: colours.slate[950],
      primary: colours.blue[600], // default primary colour is blue
      primaryForeground: colours.slate[50],
      secondary: colours.slate[100],
      secondaryForeground: colours.slate[900],
      muted: colours.slate[100],
      mutedForeground: colours.slate[500],
      accent: colours.slate[100],
      accentForeground: colours.slate[900],
      destructive: colours.red[500],
      destructiveForeground: colours.slate[50],
      border: colours.slate[200],
      input: colours.slate[200],
      ring: colours.blue[600], // default primary colour is blue
    }),
  },

  spacing: Object.freeze({
    nil: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    full: "100%",
  }),

  radius: Object.freeze({
    nil: 0,
    sm: 3,
    md: 6,
    lg: 9,
    xl: 12,
  }),
});

/**
 * The dark theme of the app.
 *
 * Inherits all settings from the default theme, except for the app colours.
 */
const darkTheme = Object.freeze({
  ...lightTheme,

  colours: {
    ...colours,

    app: Object.freeze({
      background: colours.slate[950],
      foreground: colours.slate[50],
      card: colours.slate[950],
      cardForeground: colours.slate[50],
      popover: colours.slate[950],
      popoverForeground: colours.slate[50],
      primary: colours.blue[500], // default primary colour is blue
      primaryForeground: colours.slate[900],
      secondary: colours.slate[800],
      secondaryForeground: colours.slate[50],
      muted: colours.slate[800],
      mutedForeground: colours.slate[400],
      accent: colours.slate[800],
      accentForeground: colours.slate[50],
      destructive: colours.red[900],
      destructiveForeground: colours.slate[50],
      border: colours.slate[800],
      input: colours.slate[800],
      ring: colours.blue[700], // default primary colour is blue
    }),
  },
});

/** Function to register themes that needs to be called once at the app root. */
export function registerThemes() {
  UnistylesRegistry.addThemes({
    light: lightTheme,
    dark: darkTheme,
  }).addConfig({ adaptiveThemes: true });
}

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
