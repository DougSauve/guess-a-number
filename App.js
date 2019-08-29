import React, { useState, } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import osContext from './context/osContext';

import Header from './components/Header';
import StartGameScreen from './views/StartGameScreen';
import GameScreen from './views/GameScreen';
import GameOverScreen from './views/GameOverScreen';

const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

const App = () => {
  const [numberOfGuesses, setNumberOfGuesses, ] = useState(1); // 1 for the initial guess
  const [numberToGuess, setNumberToGuess, ] = useState(null);
  const [isGameOver, setIsGameOver, ] = useState(false);

  handleMoveToStartScreen = () => {
    setNumberToGuess(null);
    setNumberOfGuesses(1);
    setIsGameOver(false);
  }

  return (
    <osContext.Provider
      value={os}
    >
      <View style={styles.app}>
        <Header 
          title={"Guess A Number"}
        />

        {
          isGameOver
          ? <GameOverScreen
            moveToStartScreen={handleMoveToStartScreen}
            numberOfGuesses={numberOfGuesses}
          /> 
          : numberToGuess
              ? <GameScreen 
                moveToGameOverScreen={() => setIsGameOver(true)}
                numberToGuess={numberToGuess} 
                incrementNumberOfGuesses={() => setNumberOfGuesses(numberOfGuesses + 1)}
                setNumberToGuess={setNumberToGuess}  
              />
              : <StartGameScreen 
                setNumberToGuess={setNumberToGuess} 
              />
        }
      </View>
    </osContext.Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});

export default App;