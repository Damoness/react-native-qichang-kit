import React from 'react';
import { useColorScheme } from 'react-native';

import colors from './colors';
import colorsDark from './colorsDark';

export const ThemeContext = React.createContext({
  colors: colors,
});

const ThemeProvider: React.FC = ({ children }) => {
  let color = useColorScheme();
  const co = color === 'dark' ? colorsDark : colors;
  return (
    <ThemeContext.Provider value={{ colors: co }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
