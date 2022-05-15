type MessageType = 'text' | 'poll';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type PollItem = {
  text: string;
  voteCount: number;
};

export type Message = {
  author: User;
  id: string;
  type: MessageType;
  createdAt?: number;
  roomId?: string;
  message: string;
  pollItems?: PollItem[];
  voteCount?: number;
};
