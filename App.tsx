import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native'  
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import Colors from './constants/Colors';
import RegisterScreen from './screens/RegisterScreen';
import MainApp from './screens/MainApp';
import RoomScreen from './screens/RoomScreen';
import { MaterialIcons } from '@expo/vector-icons';
const globalScreenOptions = {
  headerStyle:{ backgroundColor: '#49274b'},
  headerTitleStyle: {color: 'white'},
  labelStyle: { fontWeight: 'bold' },
}
const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen 
          name="Login" 
          component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen options={{
            headerTitle: 'Feeds',
            headerRight: () => (
              <MaterialIcons name="rate-review" size={30} color="white" />
            )
          }} name="MainApp" component={MainApp} />
          {/* <Stack.Screen name="Room" component={RoomScreen} options={{ title: 'Room' }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }