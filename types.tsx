/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Rooms: undefined;
  Newsfeed: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String;
  name: String;
  imgUri: String;
}

export type Message = {
  id: String;
  content: string;
  createdAd: string;
  user: User;
}

export type ChatRoom = {
  id: String,
  users: User[];
  lastMessage: Message;
}