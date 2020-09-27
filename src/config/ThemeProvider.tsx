import React from 'react';
import { useColorScheme } from 'react-native';

import colors from './colors';
import colorsDark from './colorsDark';

export const ThemeContext = React.createContext<{
  colors: typeof colors;
  theme: 'light' | 'dark';
}>({
  colors: colors,
  theme: 'light',
});

const ThemeProvider: React.FC = ({ children }) => {
  let color = useColorScheme() || 'light';
  const co = color === 'dark' ? colorsDark : colors;
  return (
    <ThemeContext.Provider value={{ colors: co, theme: color }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
