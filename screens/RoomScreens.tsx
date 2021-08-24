import React,{ useState, useLayoutEffect, useEffect} from 'react';
import {View,FlatList, StyleSheet, Text } from 'react-native';
import Rooms from '../data/Rooms'
import RoomListItem from '../components/RoomsList/index';
import RoomsHead from '../components/CustomListItemRooms/Header'
import CustomListItemRooms from '../components/CustomListItemRooms/CustomListItemRooms'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { auth, db} from '../firebase'; 

export default function RoomScreen({ navigation }) {
  const [rooms, setRooms] = useState([]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "React"
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
    setRooms(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
      )
    );
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{padding: 20, alignItems: 'center'}}>
        <CustomListItemRooms />
      <ScrollView style={styles.container}>
          {rooms.map(({id, data: { chatName }}) => (
            <RoomsHead key={id} id={id} chatName={chatName} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%"
  },
});