import {useState} from 'react';

import {Message} from '@/types/messages';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const someUser = {
  id: 'user-1',
  name: 'Charlie',
  avatar:
    'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
};

export const currentUser = {
  id: 'user-2',
  name: 'Me',
  avatar:
    'https://pbs.twimg.com/profile_images/1311008414156423170/Kxu_7mQS_400x400.jpg',
};

export const useChat = () => {
  const totalMembers = 1;
  const onlineMembers = 1;
  const roomId = 'room-1';

  //   const [messages, setMessages] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message: "Hey, man, please reply, we're already by your house",
    },
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message: 'Are u up to have some fun together?',
    },
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message:
        'Hey, cat, how r u doin, man, we gonna go and party near the suburbs',
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages([message, ...messages]);
  };

  const addMessageStructured = (message: string) => {
    const textMessage: Message = {
      author: currentUser,
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
    addMessageStructured,
  };
};
