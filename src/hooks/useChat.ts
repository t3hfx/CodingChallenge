import {useDispatch, useSelector} from 'react-redux';

import {saveMessage} from '@/redux/modules/chat/actions';
import {messagesSelector} from '@/redux/modules/chat/selectors';
import {Message} from '@/types/messages';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

export const someUser = {
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

export const roomId = 'room-1';

export const useChat = () => {
  const totalMembers = 1;
  const onlineMembers = 1;
  const channelName = 'The neighborhood';
  const channelImage =
    'https://static.wikia.nocookie.net/warriors-shattered/images/5/57/Blueberry.temporary.jpeg/revision/latest?cb=20190412161611';

  const dispatch = useDispatch();

  const addMessage = (message: Message) => {
    dispatch(saveMessage(message));
  };

  const messages = useSelector(messagesSelector);

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
    channelName,
    channelImage,
    messages,
    addMessageStructured,
  };
};
