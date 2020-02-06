import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

import Fire from '../config/Fire';
import LottieLoading from '../components/LottieLoading';
import AppButton from '../components/AppButton';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    Fire.shared.on(message => {
      setMessages(prevMessages => GiftedChat.append(prevMessages, message));
    });
    return () => Fire.shared.off();
  }, []);

  if (!Fire.shared.uid) {
    return <LottieLoading />;
  }

  // if (true) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center'}}>
  //       <AppButton />
  //     </View>
  //   );
  // }

  return (
    <>
      <GiftedChat
        alwaysShowSend
        messages={messages}
        onSend={Fire.shared.send}
        user={{
          _id: Fire.shared.uid,
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </>
  );
};

export default Chat;
