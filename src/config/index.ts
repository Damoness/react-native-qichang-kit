import ThemeProvider, { ThemeContext } from './ThemeProvider';
import colors from './colors';
import colorsDark from './colorsDark';
import withTheme from './withTheme';

export type Theme = {
  colors: typeof colors;
  theme: 'light' | 'dark';
};

export type ThemeProps = {
  theme: Theme;
};

const ThemeConstants = {
  light: colors,
  dark: colorsDark,
};

export {
  ThemeProvider,
  colors,
  colorsDark,
  withTheme,
  ThemeContext,
  ThemeConstants,
};
