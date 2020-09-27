import React from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import { Theme, ThemeProps, withTheme } from '../config';

type Props = { url: string; size: number; style?: ImageStyle } & ThemeProps;

const Avatar: React.FC<Props> = ({ url, size, style, theme }) => (
  <Image
    source={{ uri: url }}
    style={[
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: StyleSheet.hairlineWidth,
      },
      styles.image(theme),
      style,
    ]}
  />
);

const styles = {
  image: (theme: Theme) => ({
    backgroundColor: 'gray',
    borderColor: theme.colors.lineColorC5,
  }),
};

export default withTheme(Avatar);
