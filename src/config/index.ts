import ThemeProvider from './ThemeProvider';
import colors from './colors';
import colorsDark from './colorsDark';
import type theme from './theme';
import withTheme from './withTheme';

export type Theme = typeof theme;
export type ThemeProps = {
  theme: Theme;
};

export { ThemeProvider, colors, colorsDark, withTheme };
