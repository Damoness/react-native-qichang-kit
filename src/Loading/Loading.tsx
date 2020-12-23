import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeProps, withTheme } from '../config';

type Props = {
  style?: ViewStyle;
} & ThemeProps;

class Loading extends React.Component<Props> {
  render() {
    const { backgroundColorC11 } = this.props.theme.colors;

    const style = this.props.style;
    return (
      <View
        style={[
          styles.loadingView,
          { backgroundColor: backgroundColorC11 },
          style,
        ]}
      >
        <Image
          style={styles.image}
          source={require('./assets/qichang_logo_loading.gif')}
        />
      </View>
    );
  }
}

export default withTheme(Loading);

let styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 142.88, height: 48 },
});
