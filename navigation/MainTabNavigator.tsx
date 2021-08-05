
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { Fontisto } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Zocial } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {  FontAwesome5 } from '@expo/vector-icons'

const mainTab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <mainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
         activeTintColor: Colors[colorScheme].background,
         style: {
          backgroundColor: Colors[colorScheme].tint,
         },
         labelStyle: {
           fontWeight: 'bold',
         },
         }}>
      <mainTab.Screen
        name="Camera"
        component={TabOneNavigator}
         options={{
           tabBarIcon: ({ color: string }) => <Fontisto name="camera" color="#fff" size={20} />,
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
        name="Status"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color: string }) => <Zocial name="statusnet" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
        />
      <mainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color: string }) => <Fontisto name="phone" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
        
        />
      <mainTab.Screen
        name="Rooms"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color: string }) => <MaterialCommunityIcons name="webhook" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
        />
      <mainTab.Screen
        name="Newsfeed"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color: string }) => <FontAwesome5 name="user-friends" color="#fff" size={20} />,
          tabBarLabel: () => null
        }}
      />
    </mainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
