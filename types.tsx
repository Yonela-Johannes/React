export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  NewReact: undefined;
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
  roomName: string;
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
export type TownRoom = {
  id: string,
  roomname: string,
  avatar: string,
  users: User[];
  occupation: string;
  lastMessage: Message;
}

export type ChamberRoom = {
  id: String,
  users: User[];
  lastMessage: Message;
}
export type Room = {
  id: String,
  users: User[];
  lastMessage: Message;
}

export type UserType = {
  id: string,
  name: string,
  username: string,
  createdAt: string,
  image?: string,
}

export type FeedType = {
  id: string,
  user: UserType,
  createdAt: string,
  content: string,
  numberOfComments?: number;
  numberOfFeeds?: number,
  image?: string,
  numberOfLikes?: number,
  numberOfUnlikes?: number,
  numberOfLoves?: number,
  numberOfReacts?: number,
}