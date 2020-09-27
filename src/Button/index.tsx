import React, { Component } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = {
  disabledBackgroundColor?: string;
} & TouchableOpacityProps;

export default class Button extends Component<Props> {
  render() {
    const {
      style,
      disabled,
      disabledBackgroundColor = 'gray',
      ...otherProps
    } = this.props;

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          { justifyContent: 'center', alignItems: 'center' },
          style,
          disabled && { backgroundColor: disabledBackgroundColor },
        ]}
        activeOpacity={0.8}
        {...otherProps}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
