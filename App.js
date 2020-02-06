import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';

import TopBar from './src/components/TopBar';
import Chat from './src/screens/Chat';

export default function App() {
  return (
    <>
      <View style={styles.navbar}>
        <StatusBar barStyle="light-content" hidden={false} translucent={true} />
        <TopBar />
      </View>
      <SafeAreaView style={styles.container}>
        <Chat />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 9},
  navbar: {flex: 1},
});
