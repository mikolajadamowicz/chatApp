import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

import Fire from '../config/Fire';
import LottieLoading from '../components/LottieLoading';

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
