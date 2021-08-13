import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity} from 'react-native'
import { View } from 'react-native'
import ProfilePicture from './components/ProfilePicture/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainApp from './screens/MainApp';
import ChatRoomScreen from './screens/ChatRoomScreen';
import RoomChatScreen from './screens/RoomChatScreen';
import CustomListItemRooms from './components/CustomListItemRooms/CustomListItemRooms';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import ChatScreenCreatedRoom from './screens/ChatScreenCreatedRoom'
// import NewReactScreen from './screens/NewReactScreen'
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
          <Stack.Screen name="React" component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Chat' component={ChatScreenCreatedRoom} />
          <Stack.Screen name="chatRoom" component={ChatRoomScreen} options={{ title: 'Chat' }} />
          <Stack.Screen name="Room" component={RoomChatScreen} options={{ title: 'Room' }} />
          <Stack.Screen name="CustomListRooms" component={CustomListItemRooms} />
          <Stack.Screen options={{
             headerTitle: () => (
               <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity>
                    <Avatar
                    rounded
                    source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}} />
                </TouchableOpacity>
               </View>
            
             ),
             headerLeft: () => (
              <ProfilePicture style={{marginVertical: "20px"}} />
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

                <AntDesign name="login" size={24} color="green" />
                <MaterialCommunityIcons name={"dots-vertical"} size={20} color={"#fff"} />
              </View>
            )
          }} name="MainApp" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }