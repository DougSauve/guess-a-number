import React from 'react';
import { Platform, StyleSheet, Text, View, } from 'react-native';

import { colors, } from '../style/theme';

const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

const DecoratedNumber = props => {
  return (
    <View
      style={styles.numberToGuessView}
    >
      <Text
        style={styles.numberToGuessText}
      >
        {props.number}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberToGuessText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  numberToGuessView: {
    marginBottom: os === 'android'
      ? 7
      : 0,
    marginTop: os === 'ios'
    ? 7
    : 5,
  },
})

export default DecoratedNumber;