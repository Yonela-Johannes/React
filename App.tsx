import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native'  
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { View, Image } from 'react-native'
import ProfilePicture from './components/ProfilePicture/index'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import Colors from './constants/Colors';
import RegisterScreen from './screens/RegisterScreen';
import MainApp from './screens/MainApp';
import ChatRoomScreen from './screens/ChatRoomScreen';
import RoomChatScreen from './screens/RoomChatScreen';
import { Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Avatar } from '@material-ui/core';
const globalScreenOptions = {
  headerStyle:{ backgroundColor: '#49274b'},
  headerTitleStyle: {color: 'white'},
  labelStyle: { fontWeight: 'bold' },
}
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}
          style={{
            
          }}
        >
          <Stack.Screen 
          name="React"
          component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen options={{
             headerTitle: () => (
              <FontAwesome name="user-circle-o" size={24} color={"#fff"} />
             ),
             headerLeft: () => (
              <ProfilePicture style={{marginLeft: "20px"}} />
             ),
            // headerRight: () => (
            //   <View style={{
            //     flexDirection: 'row',
            //     width: 170,
            //     cursor: 'pointer',
            //     justifyContent: "space-between",
            //     backgroundColor: "transparent",
            //     marginRight: "10",          
            //   }}>
            //     <Octicons name={"search"} size={20} color={"#fff"}/>
            //     <MaterialIcons name="rate-review" size={30} color="white" />
            //     <MaterialCommunityIcons name="creation" size={24} color="#fff" />
            //     <Ionicons name="information-circle-outline" size={24} color="#fff" />
            //     <MaterialCommunityIcons name={"dots-vertical"} size={20} color={"#fff"} />
            //   </View>
            // )
          }} name="MainApp" component={MainApp} />
          <Stack.Screen name="chatRoom" component={ChatRoomScreen} options={{ title: 'Chat' }} />
          <Stack.Screen name="Room" component={RoomChatScreen} options={{ title: 'Room' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }