import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';

import DecoratedNumber from '../components/DecoratedNumber';
import theme from '../style/theme';

const GameOverScreen = props => {
  return (
    <View style={styles.view}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Congratulations! Weeeee
        </Text>
      </View>
      
      <View style={styles.message}>
        <Text>
          This game took
        </Text>
      </View>

      <View style={styles.message}>      
        <DecoratedNumber
          number={props.numberOfGuesses}
        />
      </View>

      <View style={styles.message}>
        <Text>
          guesses.
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          onPress={props.moveToStartScreen}
          title="Play Again"
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: theme.secondary,
    fontSize: 20,
    marginBottom: 50,
  },
  message: {
    fontWeight: 'bold',
    color: theme.primary,
  },
  button: {
    paddingTop: 50,
  }
})

export default GameOverScreen;