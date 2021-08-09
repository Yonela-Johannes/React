import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import RoomScreens from '../screens/RoomScreens'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabTwoParamList } from '../types';
import { Fontisto } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {  FontAwesome5 } from '@expo/vector-icons'
import ChamberScreen from '../screens/ChamberScreens';
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'

const Stack = createStackNavigator();

const MainApp = ({ navigation }) => {
    return(
        <View>
            <HomeScreen />
        </View>
    )
}

export default MainApp;