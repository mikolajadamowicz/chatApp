import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import Fire from '../config/Fire';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    Fire.shared.on(message => {
      setMessages(prevMessages => GiftedChat.append(prevMessages, message));
    });
    return () => Fire.shared.off();
  }, []);

  if (!Fire.shared.uid) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={Fire.shared.send}
      user={{
        _id: Fire.shared.uid,
      }}
    />
  );
};

export default Chat;
