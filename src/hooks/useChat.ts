import {useState} from 'react';

import {Message} from '@/types/messages';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

export const useChat = () => {
  const totalMembers = 1;
  const onlineMembers = 1;
  const roomId = 'room-1';
  const user = {
    id: 'user-1',
    name: 'Charlie',
    avatar:
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
  };
  //   const [messages, setMessages] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      author: user,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message: 'message 111 ',
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages([message, ...messages]);
  };
  const handlePress = (message: string) => {
    const textMessage: Message = {
      author: user,
      id: uuidv4(),
      type: message ? 'text' : 'poll',
      createdAt: Date.now(),
      roomId: roomId,
      message: message,
    };
    addMessage(textMessage);
  };

  return {
    totalMembers,
    onlineMembers,
    messages,
    user,
    handlePress,
  };
};
