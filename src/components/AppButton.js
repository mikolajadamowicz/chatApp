import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const AppButton = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>Start searching</Text>
    </TouchableOpacity>
  );
};

// TODO: pick font that is creaated for better reading and mood
// TODO: padding and border radius scale to different sizes
// TODO: scale text to different sizes

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    color: 'white',
  },
});

export default AppButton;
