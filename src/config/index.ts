import ThemeProvider from './ThemeProvider';
import colors from './colors';
import colorsDark from './colorsDark';
import withTheme from './withTheme';

export type Theme = {
  colors: typeof colors;
};

export type ThemeProps = {
  theme: Theme;
};

export { ThemeProvider, colors, colorsDark, withTheme };
