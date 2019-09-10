import React from 'react';
import { Button, Image, StyleSheet, Text, View, } from 'react-native';

import defaultStyles, { colors, } from '../style/theme';

const GameOverScreen = props => {
  return (
    <View style={styles.view}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Congratulations! Weeeee
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          // source={require('../assets/images/success.png')}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}}
          style={styles.image}
        />
      </View>
      
      <View>
        <Text style={styles.message}>
          This game took <Text style={styles.highlightedNumber}>{props.guesses.length}</Text> {props.guesses.length > 1 ? 'guesses' : 'guess'}:
        </Text>
      </View>

      <View>
        {/* <Text> */}
          {props.guesses.map(guess => (
            <View>
              <Text>
                {guess}
              </Text>
            </View>
          ))}
        {/* </Text> */}
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
    ...defaultStyles.text,
    color: colors.secondary,
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    marginVertical: 25,
    width: 300,
    height: 300,
    borderRadius: 150,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 1,
    shadowOffset: {
      height: 2,
    },
    shadowRadius: 2,
    overflow: 'hidden', // this overrides the shadows on iOS. Good thing to dig into at some point
    elevation: 10,
  },
  message: {
    fontWeight: 'bold',
    color: colors.secondary,
    fontSize: 20,
  },
  highlightedNumber: {
    color: colors.primary,
  },
  button: {
    paddingTop: 50,
  }
})

export default GameOverScreen;