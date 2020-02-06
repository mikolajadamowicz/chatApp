import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import AppButton from './AppButton';
import colors from '../config/colors';

const TopBar = props => {
  return (
    <View style={styles.container}>
      <LinearGradient
        {...props}
        colors={[colors.primary.basic, colors.primary.dark]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <View style={styles.left}>
          <Text style={styles.text}>8 online users</Text>
        </View>
        <View style={styles.center} />
        <View style={styles.right}>
          <AppButton style={styles.button} outline text="Next person" />
        </View>
      </LinearGradient>
    </View>
  );
};

//TODO: add scaling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 7,
  },
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  left: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  right: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'white'},
  button: {padding: 8},
});

export default TopBar;
