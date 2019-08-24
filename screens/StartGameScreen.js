import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
} from 'react-native';

import Card from '../components/presentational_hocs/Card';
import theme from '../style/theme';

const StartGameScreen = () => {
  return (
    <View style={styles.component}>
        <View style={styles.newGameMessageWrapper}>
          <Text style={styles.newGameMessage}>
            Start a New Game
          </Text>
        </View>

        <Card style={styles.instructionsWrapper}>
          <Text>Select a Number</Text>

          {/* <View style={styles.TextInputWrapper}> */}
          <View style={styles.textInputWrapper}>
            <TextInput />
          </View>  
          {/* </View> */}

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button 
                title="Reset"
              />
            </View>

            <View style={styles.buttonWrapper}>
              <Button 
                title="Submit"
              />
            </View>
          </View>
        </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    
    padding: 10,
  },
  newGameMessageWrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.secondary,
  },
  instructionsWrapper: {
    alignItems: 'center',
    width: 300,
    padding: 10,
  },
  textInputWrapper: {
    width: 100,
  },
  newGameMessage: {
    fontSize: 20,
    marginVertical: 5,

    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    marginHorizontal: 5,
    width: '40%',
  }
});

export default StartGameScreen;