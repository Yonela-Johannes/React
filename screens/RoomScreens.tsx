import React,{ useState, useLayoutEffect } from 'react';
import {View,FlatList, StyleSheet, Text } from 'react-native';
import Rooms from '../data/Rooms'
import RoomListItem from '../components/RoomsList/index';
import CustomListItemRooms from '../components/CustomListItemRooms/CustomListItemRooms'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
// import { auth, db} from '../firebase';

export default function RoomScreen() {
  const [chats, setChats] = useState([]);



  // useEffect(() => {
  //   const unsubscribe = db.collection('chats').onSnapshot => (
  //     setChats(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       data: doc.data()
  //     }))
  //   ));
  //   return unsubscribe;
  // }, [])

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>   
        <CustomListItemRooms />
          <View>
            <Text>React Create</Text>
          </View>
            <FlatList style={{width: '100%'}}
            data={Rooms}
            renderItem={({ item }) => <RoomListItem room={item} /> }
            keyExtractor={(item) => item.id}
            />
          {chats.map(({id, data: { chatName }}) => (
            <CustomListItemRooms key={id} id={id} chatName={chatName} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// const enterChat = (id, chatName) => {
//   navigation.navigate('Chat', {
//     id: id,
//     chatName: chatName,
//   })
// }

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
});