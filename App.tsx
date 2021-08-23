import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity} from 'react-native'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainApp from './screens/MainApp';
import ChatListIem from './components/ChatListItem/index';
import RoomChatScreen from './screens/RoomChatScreen';
import CustomListItemRooms from './components/CustomListItemRooms/CustomListItemRooms';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import ChatScreenCreatedRoom from './screens/ChatScreenCreatedRoom'
import { auth, db } from './firebase';
import ChatScreen from './screens/ChatScreen'
import ChatListItem from './components/ChatListItem/index';
const globalScreenOptions = {
  headerStyle:{ backgroundColor: '#49274b'},
  headerTitleStyle: {color: 'white'},
  labelStyle: { fontWeight: 'bold' },
}
const Stack = createStackNavigator();
export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
          <Stack.Screen name='ChatRoom' component={ChatScreen} />
          <Stack.Screen name='ChatList' component={ChatListItem} />
          <Stack.Screen name="createdChatRoom" component={ChatScreenCreatedRoom} options={{ title: 'Chat' }} />
          <Stack.Screen name="Room" component={RoomChatScreen} options={{ title: 'Room' }} />
          <Stack.Screen name="CustomListRooms" component={CustomListItemRooms} />
          <Stack.Screen options={{
             headerTitle: () => (
               <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               
               </View>
            
             ),
             headerLeft: () => (
               <View>
                 <Avatar  rounded source={{uri: auth?.currentUser?.photoURL}} />
               </View>
             ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                width: 170,
                cursor: 'pointer',
                justifyContent: "space-between",
                backgroundColor: "transparent",
                marginRight: "10",          
              }}>
                 <TouchableOpacity>
                    <Avatar
                    rounded
                    source={{ uri: auth?.currentUser?.photoURL }} />
                </TouchableOpacity>

                <TouchableOpacity>
                <AntDesign name="login" size={24} color="green" />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="questioncircleo" size={24} color="white" />
                </TouchableOpacity>
              </View>
            )
          }} name="MainApp" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }