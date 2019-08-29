import React, { useState, useEffect, useRef, } from 'react';
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../components/presentational_hocs/Card';
import DecoratedNumber from '../components/DecoratedNumber';

const os = Platform.select({
  ios: 'ios',
  android: 'android',
});

const generateRandomNumber = (min, max, exclude = null) => {
  const randomNumber = Math.floor(Math.random() * ((max - 1) - (min + 1))) + (min + 1);
  
  if (randomNumber === exclude) {
    generateRandomNumber(max, min, exclude);
  }
  
  return randomNumber;
}

const GameScreen = props => {
  const isInitialRender = useRef(true); // mutable value that transcends rerenders

  const [guess, setGuess] = useState(generateRandomNumber(1, 99));
  const [lowest, setLowest] = useState(1);
  const [highest, setHighest] = useState(99);

  handlePressHigher = () => {
    setLowest(guess);
  }
  
  handlePressLower = () => {
    setHighest(guess);
  }

  handlePressCorrect = () => {
    if (guess === props.numberToGuess) props.moveToGameOverScreen();
    else console.log('tricksy little hobbitses');
  }

  makeNewGuess = () => {
    props.incrementNumberOfGuesses();
    setGuess(generateRandomNumber(lowest, highest, guess));
  }

  // make new guess
  useEffect(() => { 
    if (isInitialRender.current === false) makeNewGuess();
    else isInitialRender.current = false; // mutating is ok in useRef values - this is a valid use case
  }, [highest, lowest]);

  // win condition
  useEffect(() => {
    if (highest - lowest <= 1) console.log('you lie like a rug');
  }, [ guess, ])

  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Text style={styles.guessText}>
          {`I think your number is`}
        </Text>

        <DecoratedNumber number={guess} />
      </Card>

      <Card style={styles.card}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={handlePressHigher}
            title={"Higher"}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={handlePressCorrect}
            title={"Correct"}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={handlePressLower}
            title={"Lower"}
          />
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => props.setNumberToGuess(null)}
            title={"Just kidding, I cheated. Can we start over?"}
          />
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
  },
  card: {
    padding: 30,
    borderRadius: 15,
  },
  buttonWrapper: {
    margin: 10,
    maxWidth: os === 'ios' ? '75%' : '60%',
  },
  spacer: {
    height: 20,
  }
})

export default GameScreen;