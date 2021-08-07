/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type RoomsNavigatorParamList = {
  ChambersScreen: undefined;
};

export type MainTabParamList = {
  TabOneScreen: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Chambers: undefined;
  Rooms: undefined;

};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String;
  name: String;
  imgUri: String;
  status: String;
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

export type ChamberRoom = {
  id: String,
  users: User[];
  lastMessage: Message;
}