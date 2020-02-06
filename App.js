import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import TopBar from './src/components/TopBar';
import Chat from './src/screens/Chat';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
      <TopBar />
      <SafeAreaView style={{flex: 9}}>
        <Chat />
      </SafeAreaView>
    </>
  );
}
