import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { colors, } from '../../style/theme';

const CustomButton = props => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={props.onPress}
    style={{
      ...styles.touchable,
      ...props.touchableStyle,
    }}
  >
    <View
      style={{
        ...styles.view,
        ...props.viewStyle,
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...props.textStyle,
        }}
      >
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {},
  view: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CustomButton;