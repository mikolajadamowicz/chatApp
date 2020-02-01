import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(
		() =>
			setMessages([
				{
					_id: 1,
					text: 'Hello developer',
					createdAt: new Date(),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://placeimg.com/140/140/any',
					},
				},
			]),
		[],
  );
  onSend = (newMessages = []) =>
    setMessages(GiftedChat.append(messages, newMessages));
    
  return (
		<GiftedChat
			messages={messages}
			onSend={m => onSend(m)}
			user={{
				_id: 1,
			}}
		/>
	);
}

export default Chat