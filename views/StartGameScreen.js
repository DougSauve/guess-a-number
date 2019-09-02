import React, { useState, } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback,
  View, 
} from 'react-native';

import Card from '../components/presentational_hocs/Card';
import TextInput from '../components/presentational_hocs/CustomTextInput';
import ConfirmBox from '../components/ConfirmBox';

import theme from '../style/theme';


const StartGameScreen = props => {
  const [numberInput, setNumberInput, ] = useState('');
  const [confirmed, setConfirmed, ] = useState(false);
  const [chosenNumber, setChosenNumber, ] = useState(null);

  const validateUserInput = (value) => {
    console.log('value', value);
    setNumberInput(value.replace(/[^0-9]/g, ''));
  }

  const handleResetButton = () => {
    setNumberInput('');
    setConfirmed(false);
  }

  const handleSubmitButton = () => {
    
    if (numberInput === '') return;
    
    const number = parseInt(numberInput);

    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert(
        'Please enter a valid number.', // title
        'Choose a number between 0 and 99.', // message
        [
          {
            style: 'destructive',
            text: 'Poop', 
            onPress: () => setNumberInput(''),
          }, 
          {
            text: 'OK',
            onPress: () => console.log('thank you for your compliance.')
          },
        ]
      ) 
      return;
    }

    setChosenNumber(parseInt(numberInput));
    setNumberInput('');
    setConfirmed(true);

    Keyboard.dismiss();
  }

  const confirmedMessage = confirmed
    && <ConfirmBox 
      number={chosenNumber}
      setNumberToGuess={props.setNumberToGuess}
    />

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.component}>
          <View style={styles.newGameMessageWrapper}>
            <Text style={styles.newGameMessage}>
              Start a New Game
            </Text>
          </View>

          <Card style={styles.instructionsWrapper}>
            <Text>Select a Number</Text>

            {/* <View style={styles.TextInputWrapper}> */}
            <View
              style={styles.textInputWrapper}
              >
              <TextInput 
                autoCorrect={false}
                blurOnSubmit={true} // hides keyboard on Android
                keyboardType='number-pad'
                maxLength={2}
                style={styles.textInput}
                onChangeText={(text) => validateUserInput(text)}
                value={numberInput}
              />
            </View>  
            {/* </View> */}

            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button 
                  onPress={handleResetButton}
                  title="Reset"
                />
              </View>

              <View style={styles.buttonWrapper}>
                <Button 
                  onPress={handleSubmitButton}
                  title="Submit"
                />
              </View>
            </View>
          </Card>

          {
            confirmedMessage
            && <Card 
              style={styles.confirmMessage}
            >
              {confirmedMessage}
            </Card> 
          }
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    marginHorizontal: 5,
    width: '40%',
  },
  component: {
    flex: 1,
    alignItems: 'center',
    
    padding: 10,
  },
  confirmMessage: {
    marginVertical: 10,
  },
  instructionsWrapper: {
    alignItems: 'center',
    width: 300,
    padding: 10,
  },
  newGameMessage: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginVertical: 5,

    color: 'white',
  },
  newGameMessageWrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.secondary,
  },
  textInput: {
    width: 30,
    textAlign: 'center',
  },
  textInputWrapper: {
    
  },
});

export default StartGameScreen;