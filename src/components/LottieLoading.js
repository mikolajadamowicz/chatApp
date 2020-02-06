import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import lottieJson from '../../assets/1298-floating-cloud.json';

const LottieLoading = ({style, ...props}) => {
  return (
    <View {...props} style={[styles.container, style]}>
      <LottieView autoPlay loop source={lottieJson} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default LottieLoading;
