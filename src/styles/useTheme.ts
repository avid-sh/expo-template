import { useCallback, useMemo } from "react";
import { useColorScheme } from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { navigationTheme } from "./themes";
import type { AppThemes } from "./index";

/** Returns the current theme of the app. */
export function useTheme() {
  const { theme } = useStyles();

  const currentThemeName = UnistylesRuntime.themeName as keyof AppThemes;
  const hasAdaptiveThemes = UnistylesRuntime.hasAdaptiveThemes;

  const toggleThemes = useCallback(() => {
    UnistylesRuntime.setTheme(currentThemeName === "light" ? "dark" : "light");
  }, [currentThemeName]);

  const toggleAdaptiveThemes = useCallback(() => {
    UnistylesRuntime.setAdaptiveThemes(!hasAdaptiveThemes);
  }, [hasAdaptiveThemes]);

  return {
    theme,
    currentThemeName,
    hasAdaptiveThemes,
    toggleThemes,
    toggleAdaptiveThemes,
  };
}

/** Returns the current theme for use with `react-navigation` components. */
export function useNavigationTheme() {
  const colourScheme = useColorScheme();

  const navTheme = useMemo(
    () =>
      colourScheme === "dark" ? navigationTheme.dark : navigationTheme.light,
    [colourScheme],
  );

  return { navTheme, colourScheme };
}
