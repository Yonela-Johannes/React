
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import RoomScreens from '../screens/RoomScreens'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import { MainTabParamList, TabTwoParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {  FontAwesome5 } from '@expo/vector-icons'
import ChamberScreen from '../screens/ChamberScreens';
import HomeScreen from "../screens/HomeScreen";

const mainTab = createBottomTabNavigator<MainTabParamList>();
export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <mainTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
         activeTintColor: Colors[colorScheme].background,
         style: {
          backgroundColor: Colors[colorScheme].tint,
         },
         labelStyle: {
           fontWeight: 'bold',
         },
         
         }}>
      <mainTab.Screen name="Home" component={HomeScreen} options={{
           tabBarIcon: ({ color: string }) => <MaterialCommunityIcons name="home-heart" color="#fff" size={20} />,
           tabBarLabel: () => null
         }}
         />
      <mainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color: string }) => <Ionicons name="ios-chatbox-ellipses" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
        />
      <mainTab.Screen
        name="Chambers"
        component={ChamberScreen}
        options={{
          tabBarIcon: ({ color: string }) => <MaterialCommunityIcons name="webhook" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
        />
      <mainTab.Screen
        name="Rooms"
        component={RoomScreens}
        options={{
          tabBarIcon: ({ color: string }) => <FontAwesome5 name="user-friends" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
      />
    </mainTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
