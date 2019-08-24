import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const Card = (props) => (
  <View style={{
    ...styles.component,
    ...props.style,
  }}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'white',
    elevation: 5,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  }
});

export default Card;