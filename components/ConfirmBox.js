import React from 'react';
import { 
  Button,
  Platform,
  View, 
  Text, 
  StyleSheet, 
} from 'react-native';

import DecoratedNumber from './DecoratedNumber';

const ConfirmBox = (props) => {

  return (
    <View
      style={styles.component}
    >
      <View
        style={styles.messageView}
      >
        <Text
          style={styles.messageText}
        >
          Your number will be
        </Text>
      </View>

      <DecoratedNumber number={props.number} />

      <View
        style={styles.buttonContainer}
      >
        <Button 
          onPress={() => props.setNumberToGuess(props.number)}
          title="Start Game"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    padding: 10,
  },
  messageView: {

  },
  messageText: {
    textAlign: 'center',
  },
  buttonContainer: {

  },
})

export default ConfirmBox;