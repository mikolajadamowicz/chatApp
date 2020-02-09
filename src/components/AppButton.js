import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, ViewPropTypes} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import colors from '../config/colors';

const AppButton = ({style, outline, text, ...props}) => {
  const styleType = outline ? styles.outline : styles.normal;
  return (
    <TouchableOpacity
      accessibilityLabel="App Button"
      style={[styles.button, styleType, style]}
      {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.text.icons,
    borderWidth: 1,
  },
  normal: {backgroundColor: colors.primary.basic},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20@ms',
    borderRadius: '25@s',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: '5@vs',
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: '8@vs',
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

export {styles};

export default AppButton;
