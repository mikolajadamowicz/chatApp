import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet, ViewPropTypes} from 'react-native';
import colors from '../config/colors';

const AppButton = ({style, outline, text, ...props}) => {
  const styleType = outline ? styles.outline : styles.normal;
  return (
    <TouchableOpacity style={[styles.button, styleType, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// TODO: pick font that is created for better reading and mood
// TODO: padding and border radius scale to different sizes
// TODO: scale text to different sizes

const styles = StyleSheet.create({
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.text.icons,
    borderWidth: 1,
  },
  normal: {backgroundColor: colors.primary.basic},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    color: colors.text.icons,
  },
});

AppButton.defaultProps = {
  text: 'Start searching',
  outline: false,
};

AppButton.propTypes = {
  text: PropTypes.string,
  style: ViewPropTypes.style,
  outline: PropTypes.bool,
};

export default AppButton;
