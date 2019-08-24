import React, { Component, } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import osContext from './context/osContext';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

export default class App extends Component {
  render() {
    return (
      <osContext.Provider
        value={os}
      >
        <View style={styles.app}>
          <Header 
            title={"Guess A Number"}
          />

          <StartGameScreen />
        </View>
      </osContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});
