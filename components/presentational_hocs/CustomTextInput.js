import React from 'react';
import { TextInput, View, StyleSheet, } from 'react-native';
import theme from '../../style/theme';

const CustomTextInput = props => (
  <View
    style={{
      ...styles.textInputWrapper,
      ...props.wrapperStyle,
    }}
  >
    <TextInput
      {...props}
      style={{
        ...styles.textInput,
        ...props.style,
      }}
    />
  </View>
);

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: 300,
  },
  textInputWrapper: {
    backgroundColor: 'white',
    borderBottomColor: theme.secondary,
    borderBottomWidth: 1,
    elevation: 5,
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
})