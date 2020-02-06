import React from 'react';
import {View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';

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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: '5@vs',
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: '8@vs',
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '20@vs',
  },
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  left: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  right: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: colors.text.icons},
  button: {padding: '7@ms'},
});

export default TopBar;
