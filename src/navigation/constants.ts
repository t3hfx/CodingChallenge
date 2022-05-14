export enum Screens {
  Chat = 'Chat',
  Poll = 'Poll',
}

export type RootContainerStackParamList = {
  [Screens.Chat]: undefined;
  [Screens.Poll]: undefined;
};
